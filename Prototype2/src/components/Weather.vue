<template>     
  <div class="weather">
    <!-- lv1 -->
    <div class="lv1">
      <div id="cur-location">
        <img src='@/assets/etc/map.png'>
        <div>{{curLocation.address}}</div>
      </div>
      <div id="weather-updates">
        <span @click="[getTime(),getDate(),getPosition(),getAddress(),getWeather(),getFoodIndi()]">
          <img src='@/assets/etc/reload.png'>
        </span>
        <div>업데이트 {{time.hour+":"+time.minute}}</div>
      </div>
    </div>

    <!-- lv2 -->
    <div class="lv2">
      <div id="cur-weather">
        <div v-if="this.weather.pty[0]==='0'">
          <img v-if="this.weather.sky[0]==='1'" src='@/assets/weather/sun.png'>
          <img v-else-if="this.weather.sky[0]==='3'" src='@/assets/weather/cloudy.png'>
          <img v-else-if="this.weather.sky[0]==='4'" src='@/assets/weather/clouds.png'>
          <img v-else src='@/assets/etc/loading.png'>
        </div>
        <div v-else>
          <img v-if="this.weather.pty[0]==='1'||this.weather.pty[0]==='5'" 
          src='@/assets/weather/rain.png'>
          <img v-else-if="this.weather.pty[0]==='2'||this.weather.pty[0]==='6'" 
          src='@/assets/weather/rainsnow.png'>
          <img v-else-if="this.weather.pty[0]==='3'||this.weather.pty[0]==='7'"  
          src='@/assets/weather/snow.png'>
          <img v-else src='@/assets/etc/loading.png'>
        </div>
        <div>
          <div id="cur-temp">{{weather.t1h[0]}}℃</div>
          <div>({{weather.tmn}} / {{weather.tmx}})</div>
        </div>
      </div>
      <div id="food-indi">
        <img v-if="this.foodIndi.level==='관심'" src='@/assets/face/happy.png'>
        <img v-else-if="this.foodIndi.level==='주의'" src='@/assets/face/unhappy.png'>
        <img v-else-if="this.foodIndi.level==='경고'" src='@/assets/face/sad.png'>
        <img v-else-if="this.foodIndi.level==='위험'" src='@/assets/face/nervous.png'>
        <img v-else src='@/assets/etc/loading.png'>
        <div>
          <div>식중독 지수</div>
          <div id="cur-food">{{foodIndi.level}}</div>
        </div>
      </div>
    </div>

    <!-- lv3 -->
    <div class="lv3" v-for="i in 5" :key="i">
      <tWeather
        v-bind:time="weather.time[i]" 
        :t1h="weather.t1h[i]" 
        :sky="weather.sky[i]"
        :pty="weather.pty[i]"
      />
    </div>
  </div>

</template>

<script>
import tWeather from '@/components/timeWeather.vue'
import { getAdd, showFoodIndi, getUltraFcst, getVilageFcst } from '@/api/index';
import { getUltraNcst } from '@/api/index';

export default {
  name: 'weatherComp',
  components: {
    tWeather
  },
  data() {
    return {
      date:{
        today: '',
        yesterday:''
      },
      time:{
        hour:'',
        minute:''
      },
      curLocation:{
        latitude: '',   // 위도
        longitude:'',   // 경도
        address: '',    // 행정동 주소(시구동)
        code:''         // 지역코드
      },
      foodIndi: {
        fiScore: '',    // 현재 지수
        level: ''       // 지수 레벨(관심/주의/경고/위험)
      },
      weather: {
        tmx: '',
        tmn: '',
        time:['t1','t2','t3','t4','t5','t6',],
        t1h: ['v1','v2','v3','v4','v5','v6',],  // (1~6시간) 기온
        sky: ['v1','v2','v3','v4','v5','v6',],  // (1~6시간) 하늘 상태
        pty: ['v1','v2','v3','v4','v5','v6',]   // (1~6시간) 강수 형태
      },
      postWeatherData: {
        avgTa: '',
        highTa: '',
        lowTa: '',
        avgRhm: '',
        sumRn: '',
        avgWs: '',
      }
    };
  },  // data
  methods: {
    getDate(){
      let today = new Date();
      this.date.today = today.getFullYear()+('0' + (today.getMonth() + 1)).slice(-2)+('0' + today.getDate()).slice(-2);

      let yesterday = new Date(today.setDate(today.getDate()-1));
      this.date.yesterday = yesterday.getFullYear()+('0' + (yesterday.getMonth() + 1)).slice(-2)+('0' + yesterday.getDate()).slice(-2);
    }, //getDate(yyyymmdd)
    getTime() {
      let time = new Date();
      this.time.hour = ('0' + time.getHours()).slice(-2);
      this.time.minute = ('0' + time.getMinutes()).slice(-2);
    }, //getTime(hh:mm)
    getPosition() {
      return new Promise(resolve => {
        if(!("geolocation" in navigator)) {
          this.curLocation.address = 'Geolocation is not available';
          return;
        }
        this.curLocation.address = 'Locating...';

        navigator.geolocation.getCurrentPosition(pos => {
          // this.curLocation.latitude = pos.coords.latitude.toString();
          // this.curLocation.longitude = pos.coords.longitude.toString();
          this.curLocation.latitude = 36.8334862;
          this.curLocation.longitude = 127.179364;
          resolve(pos);
        }, err => {
          this.curLocation.address = err.message;
        },
        );
      })
      
    }, //getPosition
    getAddress(){
      return new Promise(resolve => {
        getAdd(this.curLocation.longitude, this.curLocation.latitude)
        .then(response=>{
          this.curLocation.address = response.data.documents[0].region_2depth_name+
          " "+response.data.documents[0].region_3depth_name;
          this.curLocation.code = (response.data.documents[0].code).slice(0,5)+"00000";
          resolve();
        })
        .catch(error => console.log(error.response))
      })
    }, //getAddress
    getFoodIndi() {
      return new Promise(resolve => {
        showFoodIndi(this.curLocation.code,(this.time.hour<='05'?this.date.yesterday:this.date.today)+'06')
          .then(response => {
            let parse_item = response.data.response.body.items.item[0];
            this.foodIndi.fiScore = (this.time.hour<='05')?parse_item.tomorrow:parse_item.today;

            if(this.foodIndi.fiScore<'55'){ this.foodIndi.level = "관심";
            } else if(this.foodIndi.fiScore<'71'){ this.foodIndi.level = "주의";
            } else if(this.foodIndi.fiScore<'86'){ this.foodIndi.level = "경고";
            } else{ this.foodIndi.level = "위험";
            }
            resolve();
          })
          .catch(error => console.log(error));
      })
    }, //getFoodIndi
    getXYcoor(v1,v2){
      // LCC DFS 좌표변환을 위한 기초 자료
      const RE = 6371.00877;  // 지구 반경(km)
      const GRID = 5.0;       // 격자 간격(km)
      const SLAT1 = 30.0;     // 투영 위도1(degree)
      const SLAT2 = 60.0;     // 투영 위도2(degree)
      const OLON = 126.0;     // 기준점 경도(degree)
      const OLAT = 38.0;      // 기준점 위도(degree)
      const XO = 43;          // 기준점 X좌표(GRID)
      const YO = 136;         // 기1준점 Y좌표(GRID)

      const DEGRAD = Math.PI / 180.0;
      const re = RE / GRID;
      const slat1 = SLAT1 * DEGRAD;
      const slat2 = SLAT2 * DEGRAD;
      const olon = OLON * DEGRAD;
      const olat = OLAT * DEGRAD;

      let sn = Math.tan(Math.PI * 0.25 + slat2 * 0.5) / Math.tan(Math.PI * 0.25 + slat1 * 0.5);
      sn = Math.log(Math.cos(slat1) / Math.cos(slat2)) / Math.log(sn);
      let sf = Math.tan(Math.PI * 0.25 + slat1 * 0.5);
      sf = Math.pow(sf, sn) * Math.cos(slat1) / sn;
      let ro = Math.tan(Math.PI * 0.25 + olat * 0.5);
      ro = re * sf / Math.pow(ro, sn);
      let rs = {};
      
      rs['lat'] = v1;
      rs['lng'] = v2;
      let ra = Math.tan(Math.PI * 0.25 + (v1) * DEGRAD * 0.5);
      ra = re * sf / Math.pow(ra, sn);
      let theta = v2 * DEGRAD - olon;
      if (theta > Math.PI) theta -= 2.0 * Math.PI;
      if (theta < -Math.PI) theta += 2.0 * Math.PI;
      theta *= sn;
      rs['x'] = Math.floor(ra * Math.sin(theta) + XO + 0.5);
      rs['y'] = Math.floor(ro - ra * Math.cos(theta) + YO + 0.5);

      return rs;
    }, //getXYcoor (위경도 -> xy좌표)
    getWeather() {
      let rs = this.getXYcoor(this.curLocation.latitude, this.curLocation.longitude);

      let parse_item='';
      let time = this.time.minute<'45'?(this.time.hour==='00'?'2330':('0'+(this.time.hour-1)).slice(-2)+'30'):this.time.hour+'30';
      let date = this.time.minute<'45'&&this.time.hour==='00'?this.date.yesterday:this.date.today;

      return new Promise(resolve => {
        getUltraFcst(date, time, rs.x, rs.y)
          .then(async response => {
            if(response.data.response.header.resultCode!=='00'){
              console.log(`ERROR: ${response.data.response.header.resultMsg}`);
            }
            parse_item = await response.data.response.body.items.item;
            for(let i=0;i<6;i++){
              this.weather.time[i] = parse_item[i+24].fcstTime;
              this.weather.t1h[i] = parse_item[i+24].fcstValue;
              this.weather.sky[i] = parse_item[i+18].fcstValue;
              this.weather.pty[i] = parse_item[i+6].fcstValue;
            }
          })
          .catch(error => console.log(error));
        
        date = this.time.hour<'02'?this.date.yesterday:this.date.today;
        getVilageFcst(date, '0200', rs.x, rs.y)
          .then(response => {
            if(response.data.response.header.resultCode!=='00'){
              console.log(`ERROR: ${response.data.response.header.resultMsg}`);
            }
            parse_item = response.data.response.body.items.item;
            let parse_tmx = parse_item.filter(function(obj){ return obj["category"]==="TMX"; });
            let parse_tmn = parse_item.filter(function(obj){ return obj["category"]==="TMN"; });
            let idx = (this.time.hour<='05'?1:0);
            this.weather.tmn = parse_tmn[idx].fcstValue.slice(0,2);
            this.weather.tmx = parse_tmx[idx].fcstValue.slice(0,2);
          })
          .catch(error => console.log(error));

        resolve;
      })
    }, //getWeather
    getNcstWeather(){
      let rs = this.getXYcoor(this.curLocation.latitude, this.curLocation.longitude);

      let parse_item='';
      let time = this.time.minute<'45'?(this.time.hour==='00'?'2330':('0'+(this.time.hour-1)).slice(-2)+'30'):this.time.hour+'30';
      let date = this.time.minute<'45'&&this.time.hour==='00'?this.date.yesterday:this.date.today;

      getUltraNcst(date, time, rs.x, rs.y)
        .then(response => {
          /*if(response.data.response.header.resultCode!=='00'){
            console.log(`ERROR: ${response.data.response.header.resultMsg}`);
          }*/
          parse_item = response.data.response.body.items.item;
          this.postWeatherData.avgRhm = parseFloat(parse_item[1].obsrValue);
          this.postWeatherData.sumRn = parseFloat(parse_item[2].obsrValue);
          this.postWeatherData.avgTa = parseFloat(parse_item[3].obsrValue);
          this.postWeatherData.avgWs = parseFloat(parse_item[7].obsrValue);
          this.postWeatherData.lowTa = parseFloat(this.weather.tmn);
          this.postWeatherData.highTa = parseFloat(this.weather.tmx);
        })
        .catch(error => console.log(error));
    },
    // pushWeather(){
    //   postWeather(JSON.stringify(this.postWeatherData))
    //     .then(response => {
    //       console.log(response.status);
    //       console.log(response.data);
    //     })
    //     .catch(error => console.log(error));
    // },
    async Initialize(){
      await this.getPosition()
      await this.getAddress()
      await this.getFoodIndi()
      await this.getWeather()
    },
  }, //methods
  created() { //mounted랑 머가 다른지 모르게따,,,
    this.getDate();
    this.getTime();
    this.Initialize();

    this.emitter.on('confirm-click', ()=> {
      this.getNcstWeather();
      this.emitter.emit('confirm-result',this.postWeatherData);
    });
  },
  mounted(){
  
  },
  /*
  watch: {
    curLocation:{
      deep:true,
      handler(){
        this.getAddress(); 
        this.getWeather();
      }
    },
    'curLocation.code'(){
      this.getFoodIndi();
    }
  },*/
};

</script>

<style>
.weather {
  background-color: gainsboro;
  border-radius: 20px;
}
.lv1 {
  height:40px;
}
.lv2 {
  height:90px;
}
.lv3 {
  height:100px;
  display: inline-flex;
}

#cur-location {
  /*background-color: grey;*/
  float:left;
  display: flex;
  height: 20px;
  margin-left: 10px;
  margin-top: 10px;
  font-size: 15px;
}
#cur-location img {
  height: 18px;
  margin-right: 5px;
}
#weather-updates{
  float:right;
  display: inline-flex;
  height: 20px;
  margin: 10px;
  /*background-color: grey;*/
}
#weather-updates img{
  height: 18px;
  margin: 3px;
}

#cur-weather {
  /*background-color: grey;*/
  font-size: 20px;
  float: left;
  display: flex;
}
#cur-weather div {
  display: block;
}
#cur-weather img {
  height: 70px;
  margin:5px 15px 5px 10px;
}
#cur-temp {
  font-size: 40px;
}

#food-indi {
  float:right;
  display: flex;
  height: 70px;
  padding: 7px;
  background-color: skyblue;
  border-radius: 10px;
  font-size: 18px;
  margin-right: 10px;
}
#food-indi img{
  height: 70px;
  margin-right: 5px;
}
#cur-food {
  font-size: 30px;
}

</style>