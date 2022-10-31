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
        <img  v-if="this.foodIndi.level==='관심'" src='@/assets/face/happy.png'>
        <img  v-else-if="this.foodIndi.level==='주의'" src='@/assets/face/unhappy.png'>
        <img  v-else-if="this.foodIndi.level==='경고'" src='@/assets/face/sad.png'>
        <img  v-else-if="this.foodIndi.level==='위험'" src='@/assets/face/nervous.png'>
        <img  v-else src='@/assets/etc/loading.png'>
        <div>
          <div>
            식중독 지수
            <span @click="showModal=true"> <img id="foodinfo" src="@/assets/etc/information.png"> </span>
              <Teleport to="body">
                <!-- use the modal component, pass in the prop -->
                <modal :show="showModal" @close="showModal = false">
                  <template #body>
                    <div class="weather-body">
                      <span class="close-img" @click="showModal = false">
                        <img src="@/assets/etc/close.png">
                      </span>
                      <!-- (1) 식중독 위험도 정의 --> 
                      <div id="lv1">
                        <div id= "lv1-head">
                          <h3>식중독 위험도란?</h3>
                        </div> 
                        <div id="lv1-content">
                          <p> 식품의약안전처에서 제공하는 식중독 확진건수와 기상청에서 제공하는 지상기상관측정보, 한국환경공단에서 제공하는 대기오염통계정보,
                              민간의 소셜미디어 정보의 분석을 통해 지역별 식중독 위험 발생확률을 예측하여 이를 식중독 발생지수(0~100)값으로 산출하여, 
                              지역별로 식중독에 대한 발병 가능성 및 유행정도 등의 예측정보를 관심, 주의, 경고, 위험 4단계로 알려주는 척도입니다.</p>
                        </div>                         
                      </div>
                      <!-- (2) 식중독 위험도 예측 -->
                      <div id="lv2">
                        <div id="lv2-head">
                          <h3> 식중독 위험도 예측</h3>
                        </div>
                        <div id="lv2-content">
                          <table>
                            <thead>
                              <tr>
                                <th>단계</th><th>지수 구간</th><th>구간 확률</th><th>누적 확률</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td id="lv2-happy">관심</td><td>0≤P&lt;55</td><td>40.00%</td><td>40.00%</td>
                              </tr>
                              <tr>
                                <td id="lv2-unhappy">주의</td><td>55≤P&lt;71</td><td>30.00%</td><td>70.00%</td>
                              </tr>
                              <tr>
                                <td id="lv2-sad">경고</td><td>71≤P&lt;86</td><td>20.00%</td><td>90.00%</td>
                              </tr>
                              <tr>
                                <td id="lv2-nervous">위험</td><td>86≤P≤100</td><td>10.00%</td><td>100%</td>
                              </tr>
                            </tbody>                                        
                          </table>
                          <p> ※ P= 식중독 발생확률</p>
                        </div>
                      </div>

                      <!--(3) 식중독 위험도 단계별 행동요령-->
                      <div id="lv3">        
                        <div id="lv3-head">
                          <h3>식중독 위험도 단계별 행동요령</h3>
                        </div>

                        <div id="lv3-content">
                          <div class="each-level">
                            <div class="face-img">
                              <img src='@/assets/face/happy.png' >
                              <b id="happy">관심</b>
                            </div>
                            <div class="action">
                              <p>화장실 사용 후, 외출 후, 조리를 시작하기 전, 후 등에는 손을 깨끗이 씻습니다.</p>
                            </div>
                          </div>

                          <div class="each-level">
                            <div class="face-img">
                              <img src='@/assets/face/unhappy.png'>
                              <b id="unhappy">주의</b>
                            </div>
                            <div class="action">
                              <p>음식물은 85℃이상에서 1분 이상 가열 조리하고 채소 및 과일류의 비가열 식품은 흐르는 물에 씻어서 섭취합니다.</p>
                            </div>
                          </div>
          
                          <div class="each-level">
                            <div class="face-img">
                              <img src='@/assets/face/sad.png'>
                              <b id="sad">경고</b>
                            </div>
                            <div class="action">
                              <p>식품용수는 가급적 수돗물을 사용하고 지하수는 반드시 끓여서 마시며, 조리기구는 충분히 세척한 후 소독합니다.</p>
                            </div>
                          </div>

                          <div class="each-level">
                            <div class="face-img">
                              <img src='@/assets/face/nervous.png'>
                              <b id="nervous">위험</b>
                            </div>
                            <div class="action">
                              <p>구토, 설사 정도가 심하고 탈수, 발열, 발진 등 증상시 바로 의료기관을 방문하여 전문의의 지시를 따르고 집단설사 환자가 발생하면 가까운 보건소에 신고합니다.</p>
                            </div>
                          </div>                  
                        </div>
                      </div>
                    </div>
                  </template>
                </modal>
              </Teleport>
          </div> 
          <div id="cur-food">{{foodIndi.level}}</div>
        </div>
      </div>
    </div>

    <!-- lv3 -->
    <div class="lv3" >
      <div id= "cur-reh">
          <img src='@/assets/weather/bl_humidity.png'> 
          <div>
            <div> 습도 </div>  
            <div id="reh-value">{{weather.reh}}%</div>
          </div>
      </div>

      <div id="cur-pcp">
        <img src='@/assets/weather/rain.png'> 
        <div>
          <div id="pcp-name"> 강수 </div>
          <div id="pcp-value"> {{weather.pcp}}</div>
        </div>  
      </div>

      <div id="cur-wsd">
        <img src='@/assets/weather/bl_wind.png'>
        <div>
          <div> 풍속 </div>
          <div id="wsd-value">{{weather.wsd}}m/s</div>
        </div>  
      </div>
    </div>  


    <!-- <div class="lv3" v-for="i in 5" :key="i">
      <tWeather
        v-bind:time="weather.time[i]" 
        :t1h="weather.t1h[i]" 
        :sky="weather.sky[i]"
        :pty="weather.pty[i]"
      />
    </div> -->
  </div>

</template>

<script>
import { getAdd, showFoodIndi, getUltraFcst, getVilageFcst } from '@/api/index';
import { getUltraNcst } from '@/api/index';
// import tWeather from '@/components/timeWeather.vue'
import Modal from '@/components/Modal.vue';

export default {
  name: 'weatherComp',
  components: {
    // tWeather
    Modal
  },
  data() {
    return {
      showModal: false,
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
        reh: '', //습도
        pcp: '', //강수량 
        wsd: '',  //풍속
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
      },

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
          this.curLocation.latitude = pos.coords.latitude.toString();
          this.curLocation.longitude = pos.coords.longitude.toString();
          // this.curLocation.latitude = 36.8334862;
          // this.curLocation.longitude = 127.179364;
          resolve();
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
            //습도, 풍속
            let parse_reh =parse_item.filter(function(obj){ return obj["category"]==="REH"; });
            let parse_wsd = parse_item.filter(function(obj){ return obj["category"]==="WSD"; });
            let idx = (this.time.hour<='05'?1:0);
            this.weather.reh = parse_reh[idx].fcstValue;
            this.weather.wsd=parse_wsd[idx].fcstValue;


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
            this.weather.tmn = parse_tmn[idx].fcstValue.slice(0,1); //최저기온
            this.weather.tmx = parse_tmx[idx].fcstValue.slice(0,2); //최고기온

            //강수 추가부분 
            let parse_pcp = parse_item.filter(function(obj){ return obj["category"]==="PCP"; });

            if(parse_pcp[idx].fcstValue=="강수없음"){
              this.weather.pcp= "0mm";
            }
            else{
              this.weather.pcp = parse_pcp[idx].fcstValue; 
            } 
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
          if(response.data.response.header.resultCode!=='00'){
            console.log(`ERROR: ${response.data.response.header.resultMsg}`);
          }
          parse_item = response.data.response.body.items.item; console.log(parse_item);
          this.postWeatherData.avgRhm = parseFloat(parse_item[1].obsrValue); 
          this.postWeatherData.sumRn = parseFloat(parse_item[2].obsrValue);
          this.postWeatherData.avgTa = parseFloat(parse_item[3].obsrValue);
          this.postWeatherData.avgWs = parseFloat(parse_item[7].obsrValue);
          this.postWeatherData.lowTa = parseFloat(this.weather.tmn);
          this.postWeatherData.highTa = parseFloat(this.weather.tmx);

          this.emitter.emit('confirm-result',this.postWeatherData);
        })
        .catch(error => console.log(error));
    }, //getNcstWeather
    foodInformation(){
      console.log("음식점 정보 출력");

    },
    async Initialize(){
      await this.getPosition()
      await this.getAddress()
      await this.getFoodIndi()
      await this.getWeather()
    },
  }, //methods
  created() {
    this.getDate();
    this.getTime();
    this.Initialize();


    this.emitter.on('confirm-click', ()=> {
      this.getNcstWeather();
    });
  },
  mounted(){
  
  },
};

</script>

<style scoped>
.weather {
  background-color: #EAE6E1;
  border-radius: 20px;
  
}
.lv1 {
  height:40px;
}
.lv2 {
  height:90px;
}
.lv3 {
  height:79px;
  display: flex;
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
  background-color: #B9BF71;
  border-radius: 10px;
  font-size: 18px;
  margin-right: 10px;
}

#cur-food {
  font-size: 30px;
}
#foodinfo{
  width:13px;
  height:13px;
  padding-bottom: 5px;
  cursor: pointer;
}


#cur-reh {
  display: flex;
  float:left;
  width: 33%;
  height: 50px;
  padding-top:5px;
  padding-left:5px;
  padding-right: 5px;
  margin-top: 10px;
  margin-left:15px;
  margin-right:7.5px;
  background-color: white;
  border-radius: 10px;
  font-size: 16px;
}
#cur-reh img{
  margin-top: 7px;
  margin-left:2px;
  margin-right:7px;
  height:35px;
  width: 35px;
}

#reh-value{
  margin-right: 5px;
  padding-left: 10px;
  padding-top: 3px;
  font-size: 18px;
}  


#cur-pcp{
  display: flex;
  width: 33%;
  height: 50px;
  padding-top:5px;
  padding-left:5px;
  padding-right: 5px;
  margin-top: 10px;
  margin-left:7.5px;
  margin-right:7.5px;
  background-color:  #ffffff;
  border-radius: 10px;
  font-size: 16px;
}
#cur-pcp img{
  margin-top: 7px;
  margin-left:2px;
  margin-right:7px;
  height:35px;
  width: 35px;
}

#pcp-value{
  margin-right: 5px;
  padding-left: 10px;
  padding-top: 3px;
  font-size: 18px;
}

#cur-wsd{
  display: flex;
  float:right;
  width: 33%;
  height: 50px;
  padding-top:5px;
  padding-left:5px;
  padding-right: 5px;
  margin-top: 10px;
  margin-right:15px;
  margin-left:7.5px;
  background-color: #ffffff;
  border-radius: 10px;
  font-size: 16px;
}
#cur-wsd img{
  margin-top: 7px;
  margin-left:2px;
  margin-right:7px;
  height:35px;
  width: 35px;
}

#wsd-value{
  margin-right: 5px;
  padding-left: 10px;
  padding-top: 3px;
  font-size: 18px;
}

/*-----foodModal css-----*/

.close-img  img{
  float: right;
  width: 15px;
}

.weather-body {
  position: relative;
  height: 600px;
  margin: 20px 20px;
  overflow-y: scroll;
}
.weather-body::-webkit-scrollbar{
  display:none;
}

.weather-body h3{
  padding-top: 10px;
  display: table-cell;
  color:#3c6eac;
}

/*---------- lv1 Content css ---------*/ 
#lv1-content {
  margin-bottom: 25px;
}

#lv1-content p{
  text-align:left;
  font-size: 13px;
  font-weight:normal;
  font-stretch: condensed;
  font-family: sans-serif;
}

/*---------- lv2 Content css ---------*/ 
#lv2-content p{
  float:right;
  font-size: 50%;
  font-family: sans-serif;
}

#lv2-content{
  font-size: 14px;
  margin-top: 15px;
  margin-bottom: 30px;
  font-family: sans-serif;
}
#lv2-content table {
  width: 100%;
   border-collapse: collapse;
}

#lv2-content th, #lv2-content td{
  border-bottom : 1px solid black;
  padding: 5px;
}

#lv2-happy{
  font-size:15px;
  color:#11a5b2;
  font-weight:bold;
}
#lv2-unhappy{
  font-size:15px;
  color:#85ab00;
  font-weight:bold;
}
#lv2-sad{
  font-size:15px;
  color:#ea7f00;
  font-weight:bold;
}
#lv2-nervous{
  font-size:15px;
  color:#e24414;
  font-weight:bold;
}

/*---------- lv3 Content css ---------*/ 
#lv3-content {
  margin-top: 20px;
}

#lv3-content img {
  width: 40px;
}

#lv3-content b {
  font-size: 15px;
}

.each-level {
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  height: 80px;
}

.face-img {
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  justify-content: center;
}

#lv3-content .action {
  display: flex;
  text-align: left;
  font-size: 13px;
  align-items: center;
}


#happy {
  color: #11a5b2;
}
#unhappy {
  color:#85ab00;
}#sad {
  color:#ea7f00;
}#nervous {
  color:#e24414;
}


</style>