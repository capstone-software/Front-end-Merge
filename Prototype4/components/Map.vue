<template>
  <div id="map-container">
    <div id="map"></div>
    <!-- <router-link :to= "{path:'/restaurant'}">
      <button id = "restaurant_btn">
      <img title='음식점 검색' src='@/assets/etc/magnifier.png'>
      </button>
    </router-link> -->
  </div>

  <Teleport to="body">
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <div class="map-header">
          <h3>{{modalTitle}}</h3>
          <button class="btn-modal-close" @click="showModal=false"><img src="@/assets/etc/close.png"></button>
        </div>
      </template>
      <template #body>
        <div class="map-body">
          <table>
            <tr>
              <th>주소 : </th>
              <td>{{modalAddress}}</td>
            </tr>
            <tr>
              <th>위생등급 : </th>
              <div v-if="this.modalGrade!='결과없음'" class="api-hygiene"><td>{{modalGrade}}</td></div>
              <div v-else class="api-normal"><td>{{modalGrade}}</td></div>
            </tr>
          </table>

          <table>
            <details>
              <summary>
                <tr>
                  <th>행정처분 : </th>
                  <div v-if="this.modalDispos!='결과없음'" class='api-dispos'  title="자세히보기"><td>{{modalDispos}}</td></div>
                  <div v-else class='api-normal'><td>{{modalDispos}}</td></div>
                </tr>
              </summary>

              <div v-show="this.modalDSdetails" id="modal-details">
                <tr>
                  <th>확정일자 : </th>
                  <td>{{modalDSPSdt}}</td>
                </tr>
                <tr>
                  <th>위반사유 : </th>
                  <td>{{modalVcn}}</td>
                </tr>
                <tr>
                  <th>위반법령 : </th>
                  <td>{{modalVlaw}}</td>
                </tr>
              </div>
            </details>
          </table>

          <table>
            <tr>
              <th>주의메뉴 : </th>
              <div>
                <td v-if="this.modalDMenu=='식중독 발생 확률 분석 결과가 없습니다.'">{{modalDMenu}}</td>
                <td v-else id='caution_menu'>{{modalDMenu}}</td>
              </div>
            </tr>
          </table>
        </div>
      </template>
    </modal>
  </Teleport>

</template>

<script>
import Modal from '@/components/Modal.vue'
import restaurantInfo from '@/assets/RestaurantList.js'
import { getHygiene, getDisposition } from '@/api/index'
import { tgreenList, tredList, tyellowList } from '@/assets/tempRestaurantList.js'

export default {
  name: "mapPrint",
  data() {
    return {
      // Modal
      showModal: false,
      modalTitle: '',
      modalAddress: '',
      modalGrade: '',
      modalDSdetails: false,
      modalDispos: '',
      modalDSPSdt: '',
      modalVcn: '',
      modalVlaw: '',
      modalDMenu: '',

      // Map
      map: null,
      latitude: '',
      longitude: '',
      curMap:'',

      // API
      redList:[],
      greenList:[],
      yellowList: [],
      apiList:[],

      // dangerMenu
      poisoningList : [0.0, 0.0, 5.0, 0.0, 0.0], // [ salmonella, ecoli, norovirus, jejuni, perfringens ]
      causativeAgent:[
        { 
          name: 'salmonella', 
          tag:['계란', '가금류']
        },
        {
          name: 'ecoli',
          tag:['야채', '육류']
        },
        {
          name: 'noro',
          tag:['해산물','야채']
        },
        {
          name: 'jejuni',
          tag:['가금류', '유제품']
        },
        {
          name: 'perfrigens',
          tag:['육류', '건조식품']
        }
      ],
    }
  },
  components:{
    Modal:Modal
  },
  mounted() {
    // get user geolocation
    "geolocation" in navigator?this.getPosition():console.log('Geolocation is not available');
    if(window.kakao && window.kakao.maps){
      setTimeout(() => {
        kakao.maps.load(this.initMap);
      }, 700);
    } else{
      this.addKakaoMapScript();
    }

    // get Hgrade, Dispos
    //for(let i=0; i<restaurantInfo.length; i++)
    /*
    for(let i=0; i<5; i++){
      this.yellowList.push({num: i})
      this.storeHgrade(i);
      this.storeDispos(i);
    }*/

  },
  methods:{
    openModal(idx, list, ci){
      // idx == restaurantList index, list == red or green, ci == 해당 리스트 안에서의 index
      this.showModal = true
      this.modalTitle = restaurantInfo[idx].title
      this.modalAddress = restaurantInfo[idx].address

      this.modalDSdetails= false
      this.modalGrade = '결과없음'
      this.modalDispos = '결과없음'

      if(list == tgreenList){
        this.modalGrade = tgreenList[ci].grade
      }
      else if(list == tredList){
        this.modalDSdetails = true
        this.modalDispos = tredList[ci].DSPScn
        this.modalDSPSdt = tredList[ci].DSPSdt
        this.modalVcn = tredList[ci].Vcn
        this.modalVlaw = tredList[ci].Vlaw
      }

      this.modalDMenu = this.cautionMenu(idx);
    },

    storeHgrade(idx){
      return new Promise(resolve => {
          setTimeout(() => {
            getHygiene(restaurantInfo[idx].license)
              .then(res => {
                let hdata = res.data
                let code = hdata.C004.RESULT.CODE
                if(code == 'INFO-000') {
                  this.greenList.push({num: idx,grade: hdata.C004.row[0].HG_ASGN_LV})
                  this.yellowList.splice(this.yellowList.indexOf(idx),1)
                }
                else if(code == 'INFO-200') { 
                  console.log('해당하는 데이터가 없습니다.')
                }
                else { console.log('ERROR CODE', code) }
                
                resolve();
              })
              .catch(error => console.log(error))

              // console.log('greenList:',this.greenList)
          }, (idx+1)*5000);
        })
    },

    storeDispos(idx){
      return new Promise(resolve => {
          setTimeout(() => {
            getDisposition(restaurantInfo[idx].license)
              .then(res => {
                let hdata = res.data
                let code = hdata.I2630.RESULT.CODE
                if(code == 'INFO-000') {
                  let content = hdata.I2630.row[0]
                  this.redList.push({
                    num: idx,
                    DSPSdt: content.DSPS_DCSNDT,
                    Vcn: content.VILTCN,
                    Vlaw: content.LAWORD_CD_NM,
                    DSPScn: content.DSPSCN
                  })
                  this.yellowList.splice(this.yellowList.indexOf(idx),1)
                }
                else if(code == 'INFO-200') { console.log('해당하는 데이터가 없습니다.') }
                else { console.log('ERROR CODE', code) }
                
                resolve();
              })
              .catch(error => console.log(error))

              // console.log('redList:',this.redList)
          }, (idx+1)*5000);
        })
    },

    cautionMenu(idx) {
      const plist = this.poisoningList; // 식중독 발생확률(List) 넘겨받기
      const dangerCA = plist.indexOf(Math.max.apply(null, plist)); // 식중독 원인균 인덱스 저장
      const dangerTags = this.causativeAgent[dangerCA].tag;
      let dangerList = [];
      let tempMenuList = restaurantInfo[idx].menuList;

      for(let i=0; i<tempMenuList.length; i++) {
        if(tempMenuList[i].tagList.includes(dangerTags[0]) || tempMenuList[i].tagList.includes(dangerTags[1])){
          dangerList.push(tempMenuList[i].name);
        }
      }

      if(dangerList.length!=0) { return dangerList.join(', '); }
      else { return '식중독 발생 확률 분석 결과가 없습니다.'; }
    }, 

    getPosition() {
      navigator.geolocation.getCurrentPosition(pos => {
        // this.latitude = pos.coords.latitude;
        // this.longitude = pos.coords.longitude;

        this.longitude = 127.179364;
        this.latitude = 36.8334862;
        console.log(pos);
      }, err => {
        alert(err.message);
      })
    },

    addKakaoMapScript() {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => setTimeout(() => {
        kakao.maps.load(this.initMap);
      }, 700);
      script.src ="http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey="
      +process.env.VUE_APP_KAKAOMAP_KEY;
      document.head.appendChild(script);
    },

    initMap() {
      const container = document.querySelector('#map')
      const options = {
        center : new kakao.maps.LatLng(this.latitude, this.longitude),
        level: 4
      }
      this.curMap = new kakao.maps.Map(container, options)

      const bluePin = 'https://user-images.githubusercontent.com/90830500/194813824-56f7124d-4fb6-4e7c-96a1-f307cf43488c.png'
      const imageSize = new kakao.maps.Size(30, 30);
      const imageOption = {offset: new kakao.maps.Point(15, 30)};

      const markerImage = new kakao.maps.MarkerImage(bluePin, imageSize, imageOption);
      const markerPosition = new kakao.maps.LatLng(this.latitude, this.longitude);

      let curMarker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage
      });
      curMarker.setMap(this.curMap)

      this.initMarker();
    },

    initMarker(){
      const redPin = 'https://user-images.githubusercontent.com/90830500/194813845-f53b334e-c074-45ce-acbe-ac27d648c9b4.png'
      const greenPin = 'https://user-images.githubusercontent.com/90830500/194813837-c4361d89-1b89-44a2-87ed-f7d4b016f725.png'
      const yellowPin = 'https://user-images.githubusercontent.com/90830500/194813850-0fe93a4d-66aa-447a-9ea0-fc497070b193.png'

      const imageSize = new kakao.maps.Size(30, 30);
      const imageOption = {offset: new kakao.maps.Point(15, 30)};
      const RImage = new kakao.maps.MarkerImage(redPin, imageSize, imageOption)
      const GImage = new kakao.maps.MarkerImage(greenPin, imageSize, imageOption)
      const YImage = new kakao.maps.MarkerImage(yellowPin, imageSize, imageOption)
      let restMarker

      for(let color=0; color<3; color++){
        let list; let Pin;
        if(color==0) { list = tredList; Pin = RImage }
        else if(color==1) { list = tgreenList; Pin = GImage }
        else { list = tyellowList; Pin = YImage }

        for(let i=0; i<list.length; i++){
          let restIdx = list[i].num
          let curPosition = new kakao.maps.LatLng(restaurantInfo[restIdx].lat,restaurantInfo[restIdx].lng);
          restMarker = new kakao.maps.Marker({
            map: this.curMap,
            position: curPosition,
            title: restaurantInfo[restIdx].title,
            image: Pin
          });

          kakao.maps.event.addListener(restMarker, 'click', ()=> {this.openModal(restIdx, list, i)});
        }
      }

        // kakao.maps.event.addListener(restMarker, 'click', this.openOverlay(this.curMap, overlay));

      restMarker.setMap(this.curMap)
    },

    openOverlay(map, overlay, markerPos){
      return ()=>{
        overlay.setMap(map);
        let move = new kakao.maps.LatLng(markerPos.Ma+0.001, markerPos.La);
        map.setCenter(move);
      }
    },
    closeOverlay(overlay){
      overlay.setMap(null);
    },
  },
}

</script>

<style scoped>
#map-container {
  position:relative;
}
#map {
  height:500px;
  border-radius: 15px;
  margin-top: 20px;
  z-index: 1;
}


.api-normal {
  color: grey;
}
.api-hygiene {
  color: green;
  font-weight: bolder;
}
.api-dispos {
  color: red;
  font-weight: bolder;
  cursor: pointer;
}


.map-header {
  text-align: center;
  display: flexbox;
  position: relative;
  height: 40px;
  margin-top: -10px;
}
.map-header h3 {
  text-align: center;
  margin-top: 0;
}

.btn-modal-close {
  position: absolute;
  right: -20px;
  top: 5px;
  border: 0;
  background-color: white;
  width: 30px;
  padding: 0;
}
.btn-modal-close img {
  height: 15px;
}

.map-body table {
  display: block;
  text-align: left;
  border-bottom: none;
  margin: 0px;
  padding: 0px;
}

.map-body th {
  width: 80px;
  text-align: center;
  vertical-align: top;
  padding-top: 5px;
}

.map-body details {
  display: block;
  font-size: 14px;
  margin-top: -20px;
}

.map-body summary {
  font-size: 16px;
  margin-bottom: 5px;
}

.map-body summary::marker {
  font-size: 0;
  display:none;
}

#modal-details {
  margin-left: 8px;
  border-spacing: 3px;
}
#modal-details th {
  width: 70px;
}

#caution_menu {
  color: red;
}

</style>