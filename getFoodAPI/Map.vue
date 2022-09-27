<template>
  <div id="map_container">
    <div id="map"></div>
    <!-- <router-link :to= "{path:'/restaurant'}">
      <button id = "restaurant_btn">
      <img title='음식점 검색' src='@/assets/etc/magnifier.png'>
      </button>
    </router-link> -->
  </div>
</template>

<script>
import restaurantInfo from '@/assets/RestaurantList.js'
// import { getHygiene, getDisposition} from '@/api/index'
// import { getHygiene } from '@/api/index'
import { getDisposition } from '@/api/index'

export default {
  name: "mapPrint",
  data() {
    return {
      map: null,
      latitude: '',
      longitude: '',
      curMap:'',
      redList:[],
      greenList:[],
      yellowList:[]
    }
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


    // - for문 2번 (위생등급/행정처분) list에 저장
    // - 나머지는 그냥 빼버릴까,,, yellow = whole-(red+green)

    // get heygiene grade
    for(let i=0; i<restaurantInfo.length; i++){
      setTimeout(()=>{
        this.storeHygiene(i)
      }, 3000)
    }

    // get edsf
  },
  methods:{
    storeHygiene(idx){
      return new Promise(resolve => {
        getDisposition(restaurantInfo[idx].license)
        .then(response => {
          this.redList.push(response.data)
          console.log(this.redList)
          // console.log(response)
        resolve;   
        })
        .catch(error => console.log(error))
        
      })
    },

    getPosition() {
      navigator.geolocation.getCurrentPosition(pos => {
        this.latitude = pos.coords.latitude;
        this.longitude = pos.coords.longitude;

        // this.longitude = 127.179364;
        // this.latitude = 36.8334862;
        // console.log(pos);
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
      const markerPosition = new kakao.maps.LatLng(this.latitude, this.longitude);

      let curMarker = new kakao.maps.Marker({
        position: markerPosition
      });
      curMarker.setMap(this.curMap)

      this.initMarker();
    },

    initMarker(){
      let imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
      let imageSize = new kakao.maps.Size(24, 35); 
      let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
      let restMarker;

      // 데이터 받기
      // restaurantList, menuList, dangerList 받아옴

      for(let i=0; i<restaurantInfo.length; i++){
        let curPosition = new kakao.maps.LatLng(restaurantInfo[i].lat,restaurantInfo[i].lng);
        restMarker = new kakao.maps.Marker({
          map: this.curMap,
          position: curPosition,
          title: restaurantInfo[i].title,
          image:markerImage
        });
        
        let overlay = new kakao.maps.CustomOverlay({
          //content: iwContent,
          position: curPosition,
          yAnchor: 1
        });

        // this.initContent(overlay, this.serverData.data[i].name, this.serverData.data[i].description, menuList[i], dangerList);

        kakao.maps.event.addListener(restMarker, 'click', this.openOverlay(this.curMap, overlay, curPosition));
        // kakao.maps.event.addListener(restMarker, 'click', this.openOverlay(this.curMap, overlay));
      }
      restMarker.setMap(this.curMap)
    },

    /*
    initContent(overlay, restName, restDesc, menuList, dangerList){
      let infoContent = document.createElement('div');
      infoContent.className = 'overlay';

      let info = document.createElement('div');
      info.className = 'info';
      infoContent.appendChild(info);

      // 음식점 이름, 설명
      let contentTitle = document.createElement('div');
      contentTitle.className = 'title';
      contentTitle.innerHTML = `<details><summary><h3>${restName}</h3></summary><p>${restDesc}</p></details>`
      info.appendChild(contentTitle);

      // 오버레이 닫기
      let closeBtn = document.createElement('div');
      closeBtn.className = 'info-close';
      closeBtn.setAttribute('title', '닫기');
      closeBtn.onclick = () => this.closeOverlay(overlay);
      contentTitle.appendChild(closeBtn);
      

      // 메뉴 테이블
      let tableContent = document.createElement('div');
      tableContent.className = 'menu-table';
      let tableText= '';
      tableText += `<table>`;
      tableText += `<th>메뉴</th><th>가격</th><th>주의 식재료</th>`;
      let tagName = [ '유제품', '육류', '해산물', '계란', '건조식품', '과일 및 야채', '복합조리식품' ]
      for(let menu=0;menu<menuList.length;menu++){
        tableText += `<tr> <td>${menuList[menu].name}</td><td>${menuList[menu].price}</td>`;
        tableText += `<td>`
        for(let tag=0; tag<7; tag++){
          if(menuList[menu].tagList[tag]===1){
            if(dangerList[tag]===1){
              tableText += `<span class="tag-danger">${tagName[tag]}</span>`
            } 
            // else{
            //   tableText += `<span class="tag-normal">${tagName[tag]}</span>`
            // }
          }
        }
        tableText +=`</td></tr>`
      }
      tableText += `</table></details>`;
      tableContent.innerHTML = tableText;
      info.appendChild(tableContent);

      overlay.setContent(infoContent);
    },*/

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

<style>
#map_container {
  position:relative;
}
#map {
  height:500px;
  border-radius: 15px;
  margin-top: 20px;
  z-index: 1;
}
#restaurant_btn {
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 2;
  height: 30px;
  width: 30px;
  border: 0;
  border-radius: 5px;
  background-color: blueviolet;
  padding: 0px 5px 0px 5px;
}
#restaurant_btn img {
  height: 20px;
  color:white;
  display: block;
  margin: 0px;
}

.overlay {
  background-color: white;
  margin: 0;
  width: 350px;
  position: relative;
  bottom: 50px;
  padding: 10px 15px 10px 15px;
  border-radius: 10px;
}

.title p{
  margin: 0 10px 15px 10px;
  padding: 5px;
  font-size: 12px;
  text-align: left;
  white-space: normal;
  /* background: rgba(231, 231, 231, 0.736); */
  background: linear-gradient(rgba(231, 231, 231, 0.736),white);
  border-radius: 0 0 5px 5px;
}
.title details{
  margin-bottom: 20px;
  transition: height 0.5s ease;
}

.title summary{
  margin: 0;
  padding: 0;
  height: 30px;
}
.title summary::marker{
  font-size: 0;
  display:none;
}
.title summary h3{
  position: relative;
  top:-15px;
  margin: 0 10px 0 10px;
  cursor: pointer;
  border-width: 330px;
  border-bottom: 3px solid grey;
}
.info table{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  border-collapse: collapse;
  font-size: 13px;
  /* text-align: center; */
}
.info th, td{
  padding: 5px 10px 5px 10px;  
  border-bottom: 0.5px solid #444444;
}
.info th{
  text-align: center;
  border-bottom: 2px solid #444444;
  font-size: 15px;
}
.tag-normal {
  padding: 2px; 
  margin: 1.5px; 
  background-color: white; 
  border-radius: 5px;
}
.tag-danger {
  padding: 2px; 
  margin: 1.5px; 
  background-color: white; 
  border-radius: 5px;
}
/* .tag-1{ padding: 2px; margin: 2.5px; background-color: pink; border-radius: 5px; }
.tag-2{ padding: 2px; margin: 2.5px; background-color: paleturquoise; border-radius: 5px; }
.tag-3{ padding: 2px; margin: 2.5px; background-color: rgb(255, 247, 175); border-radius: 5px; }
.tag-4{ padding: 2px; margin: 2.5px; background-color: palegoldenrod; border-radius: 5px; }
.tag-5{ padding: 2px; margin: 2.5px; background-color: rgb(147, 169, 242); border-radius: 5px; }
.tag-6{ padding: 2px; margin: 2.5px; background-color: rgba(201, 252, 147, 0.871); border-radius: 5px; }
.tag-7{ padding: 2px; margin: 2.5px; background-color: skyblue; border-radius: 5px; } */
.info-close {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #888;
  width: 16px;
  height: 16px;
  background: url('@/assets/etc/exit.png');
}
.info-close:hover {
  cursor: pointer;
}
.overlay:after{
  content: '';
  position: absolute;
  margin-left: -12px;
  left: 50%;
  bottom: -10px;
  width: 22px;
  height: 12px;
  background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png');
}

</style>