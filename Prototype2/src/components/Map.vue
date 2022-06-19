<template>
  <div id="map_container">
    <div id="map"></div>
    <!-- <router-link :to= "{path:'/restaurant'}">
      <button id = "restaurant_btn">
      <img title='단골 음식점 등록' src='@/assets/etc/plus_white.png'>
      </button>
    </router-link> -->
  </div>
</template>

<script>
export default {
  name: "mapPrint",
  data() {
    return {
      map: null,
      latitude: '',
      longitude: '',
      curMap:'',
      restaurantPos:[
        {
          title:'한솥도시락',
          lat: 36.8323731, 
          lng: 127.176503
        },
        {
          title:'이삭토스트',
          lat: 36.8328691, 
          lng: 127.176213
        },
        {
          title:'SubMeal',
          lat: 36.8325989, 
          lng: 127.176167
        },
      ],
      serverData:{"count":4,"data":[{"id":1,"name":"한솥도시락 천안상명대점","description":"처음부터 끝까지 성심을 다해 맛있게 만들겠습니다. 한솥 홈페이지에서 한솥메뉴에 들어가시면 보다 상세한 메뉴정보를 보실 수 있습니다. 점포로 전화 주시면 성심껏 설명해 드리겠습니다.내용 더보기","location":{"latitude":36.8328691,"longitude":127.176213},"address":{"city":"천안시","province":"동남구","county":"상명대길"},"menuList":[{"id":2,"name":"치킨 제육","content":"짭조름한 치킨가라아게와 매콤하면서도 부드러운 제육볶음으로 구성된 든든한 도시락입니다.","price":4700,"tagList":[{"id":3,"name":"육류","updatedAt":"2022-06-06T23:42:05.378332","createdAt":"2022-06-06T23:42:05.378332"},{"id":4,"name":"복합 조리 식품","updatedAt":"2022-06-06T23:42:05.415624","createdAt":"2022-06-06T23:42:05.415624"}]},{"id":5,"name":"빅치킨마요","content":"배부르게 먹고 싶은 날 즐겨보세요. 치킨마요에 밥(+70g), 치킨(+15g), 소스(+10g)까지 모두 빅으로 푸짐하게 담았습니다.","price":4100,"tagList":[{"id":6,"name":"육류","updatedAt":"2022-06-06T23:42:05.418104","createdAt":"2022-06-06T23:42:05.418104"},{"id":7,"name":"계란","updatedAt":"2022-06-06T23:42:05.419464","createdAt":"2022-06-06T23:42:05.419464"},{"id":8,"name":"복합 조리 식품","updatedAt":"2022-06-06T23:42:05.420752","createdAt":"2022-06-06T23:42:05.420752"}]},{"id":9,"name":"돈까스 카레","content":"두툼한 국내산 등심 돈까스와 누구도 흉내낼 수 없는 한결같은 맛을 고수해 온 한솥 카레를 함께 즐겨보세요.","price":4500,"tagList":[{"id":10,"name":"육류","updatedAt":"2022-06-06T23:42:05.422887","createdAt":"2022-06-06T23:42:05.422887"},{"id":11,"name":"복합 조리 식품","updatedAt":"2022-06-06T23:42:05.423831","createdAt":"2022-06-06T23:42:05.423831"}]},{"id":12,"name":"소불고기 철판볶음밥","content":"짭조름한 베이컨과 양파, 대파, 홍 피망을 넣어 불 맛을 잘 살렸습니다. 달콤한 소불고기와 담백한 지단 채 그리고 김 가루와 함께 풍미 가득한 불고기철판볶음밥을 즐겨보세요.","price":4700,"tagList":[{"id":13,"name":"육류","updatedAt":"2022-06-06T23:42:05.425762","createdAt":"2022-06-06T23:42:05.425762"},{"id":14,"name":"복합 조리 식품","updatedAt":"2022-06-06T23:42:05.427204","createdAt":"2022-06-06T23:42:05.427204"}]},{"id":15,"name":"진달래","content":"한솥 도시락 Top 5 메뉴 중 하나로 떡 햄버그, 돈까스, 새우튀김, 치킨 가라아게, 제육볶음이 모두 들어 있어 푸짐합니다. 생수와 조미 김이 함께 제공 됩니다.","price":7500,"tagList":[{"id":16,"name":"육류","updatedAt":"2022-06-06T23:42:05.430529","createdAt":"2022-06-06T23:42:05.430529"},{"id":17,"name":"복합 조리 식품","updatedAt":"2022-06-06T23:42:05.431891","createdAt":"2022-06-06T23:42:05.431891"},{"id":18,"name":"해산물","updatedAt":"2022-06-06T23:42:05.434797","createdAt":"2022-06-06T23:42:05.434797"}]}],"updatedAt":"2022-06-06T23:42:05.214578","createdAt":"2022-06-06T23:42:05.214578"},{"id":19,"name":"이삭토스트 천안상명대점","description":"한끼 식사로 부족함 없도록 맛과영양을 듬뿍담아 정성껏 맛있는 토스트와음료를 준비해드립니다.","location":{"latitude":36.8323731,"longitude":127.176503},"address":{"city":"천안시","province":"동남구","county":"상명대길"},"menuList":[{"id":20,"name":"트리플소세지 토스트","content":"탱글하고 뽀득한 국내산 소세지(3개)와 달콤한 이삭토스트의 만남!","price":4500,"tagList":[{"id":21,"name":"육류","updatedAt":"2022-06-06T23:42:05.439797","createdAt":"2022-06-06T23:42:05.439797"},{"id":22,"name":"복합 조리 식품","updatedAt":"2022-06-06T23:42:05.440969","createdAt":"2022-06-06T23:42:05.440969"}]},{"id":23,"name":"베이컨 포테이토 피자","content":"쫄깃한 모짜렐라 치즈, 해쉬브라운과 베이컨의 만남!","price":4500,"tagList":[{"id":24,"name":"계란","updatedAt":"2022-06-06T23:42:05.443864","createdAt":"2022-06-06T23:42:05.443864"},{"id":25,"name":"육류","updatedAt":"2022-06-06T23:42:05.446051","createdAt":"2022-06-06T23:42:05.446051"},{"id":26,"name":"복합 조리 식품","updatedAt":"2022-06-06T23:42:05.447438","createdAt":"2022-06-06T23:42:05.447438"}]},{"id":27,"name":"허니갈릭햄치즈","content":"보리맥아추출물이 첨가되어 부드럽고 촉촉한 프리미엄 식빵에 진한 풍미가 있는 허니갈릭소스로 맛을 낸 토스트","price":3200,"tagList":[{"id":28,"name":"계란","updatedAt":"2022-06-06T23:42:05.449736","createdAt":"2022-06-06T23:42:05.449736"},{"id":29,"name":"육류","updatedAt":"2022-06-06T23:42:05.450721","createdAt":"2022-06-06T23:42:05.450721"},{"id":30,"name":"복합 조리 식품","updatedAt":"2022-06-06T23:42:05.451818","createdAt":"2022-06-06T23:42:05.451818"}]},{"id":31,"name":"딥치즈 베이컨","content":"짭조름한 베이컨과 쫄깃한 모짜렐라 치즈, 부드러운 치즈소스가 듬뿍 들어간 토스트","price":3700,"tagList":[{"id":32,"name":"계란","updatedAt":"2022-06-06T23:42:05.455842","createdAt":"2022-06-06T23:42:05.455842"},{"id":33,"name":"육류","updatedAt":"2022-06-06T23:42:05.456852","createdAt":"2022-06-06T23:42:05.456852"},{"id":34,"name":"복합 조리 식품","updatedAt":"2022-06-06T23:42:05.462961","createdAt":"2022-06-06T23:42:05.462961"}]},{"id":35,"name":"그릴드 불갈비","content":"불맛이 살아있는 그릴향 가득한 두툼한 패티로 고기 함량 UP! 브라운 브레드 프리미엄 토스트로 업그레이드 된 그릴드 불갈비 토스트","price":4100,"tagList":[{"id":36,"name":"계란","updatedAt":"2022-06-06T23:42:05.475652","createdAt":"2022-06-06T23:42:05.475652"},{"id":37,"name":"육류","updatedAt":"2022-06-06T23:42:05.4785","createdAt":"2022-06-06T23:42:05.4785"},{"id":38,"name":"복합 조리 식품","updatedAt":"2022-06-06T23:42:05.480355","createdAt":"2022-06-06T23:42:05.480355"},{"id":39,"name":"야채","updatedAt":"2022-06-06T23:42:05.482077","createdAt":"2022-06-06T23:42:05.482077"}]}],"updatedAt":"2022-06-06T23:42:05.436419","createdAt":"2022-06-06T23:42:05.436419"},{"id":40,"name":"SubMeal","description":"멕시코,남미음식","location":{"latitude":36.8327979,"longitude":127.175652},"address":{"city":"천안시","province":"동남구","county":"상명대길"},"menuList":[{"id":41,"name":"브리또 단품","content":"내 입맛대로 맛을 고르는 브리또","price":3900,"tagList":[{"id":42,"name":"육류","updatedAt":"2022-06-06T23:42:05.486277","createdAt":"2022-06-06T23:42:05.486277"},{"id":43,"name":"복합 조리 식품","updatedAt":"2022-06-06T23:42:05.488867","createdAt":"2022-06-06T23:42:05.488867"},{"id":44,"name":"해산물","updatedAt":"2022-06-06T23:42:05.490276","createdAt":"2022-06-06T23:42:05.490276"},{"id":45,"name":"야채","updatedAt":"2022-06-06T23:42:05.492055","createdAt":"2022-06-06T23:42:05.492055"},{"id":46,"name":"계란","updatedAt":"2022-06-06T23:42:05.493197","createdAt":"2022-06-06T23:42:05.493197"}]}],"updatedAt":"2022-06-06T23:42:05.484026","createdAt":"2022-06-06T23:42:05.484026"},{"id":47,"name":"수업이끝난오후","description":"콩나물 불고기가 맛있는 수업이 끝난 오후 입니다.","location":{"latitude":36.8328612,"longitude":127.175439},"address":{"city":"천안시","province":"동남구","county":"상명대길"},"menuList":[{"id":48,"name":"콩나물불고기+볶음밥","content":"콩나물불고기 먹은 후에 볶아 먹는 밥까지","price":7000,"tagList":[{"id":49,"name":"육류","updatedAt":"2022-06-06T23:42:05.496532","createdAt":"2022-06-06T23:42:05.496532"},{"id":50,"name":"야채","updatedAt":"2022-06-06T23:42:05.501376","createdAt":"2022-06-06T23:42:05.501376"}]},{"id":51,"name":"대패삼겹살","content":"얇은 삼겹, 대패 삼겹살 (150g)","price":4000,"tagList":[{"id":52,"name":"육류","updatedAt":"2022-06-06T23:42:05.505802","createdAt":"2022-06-06T23:42:05.505802"}]},{"id":53,"name":"냉동삼겹살","content":"추억의 냉동 삼겹살 (150g)","price":6000,"tagList":[{"id":54,"name":"육류","updatedAt":"2022-06-06T23:42:05.510301","createdAt":"2022-06-06T23:42:05.510301"}]}],"updatedAt":"2022-06-06T23:42:05.494241","createdAt":"2022-06-06T23:42:05.494241"}]}
    }
  },
  mounted() {
    "geolocation" in navigator?this.getPosition():console.log('Geolocation is not available');
    if(window.kakao && window.kakao.maps){
      setTimeout(() => {
        kakao.maps.load(this.initMap);
      }, 700);
    } else{
      this.addKakaoMapScript();
    }
  },
  methods:{
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
      // init Map
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

      // init Marker & Info
      this.initMarker();
      
    },
    initMarker(){
      let imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
      let imageSize = new kakao.maps.Size(24, 35); 
      let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
      let restMarker;

      // 데이터 받기
      // restaurantList, menuList, dangerList 받아옴

      for(let i=0; i<this.restaurantPos.length; i++){
        let curPosition = new kakao.maps.LatLng(this.restaurantPos[i].lat,this.restaurantPos[i].lng);
        restMarker = new kakao.maps.Marker({
          map: this.curMap,
          // position이랑 title 두 개 바꾸면 됨..
          position: curPosition,
          title: this.restaurantPos[i].title,
          image:markerImage
        });

        // tagList: [ 유제품/ 육류/ 해산물/ 계란/ 건조식품/ 과일 및 야채/ 복합조리식품 ]
        let menuList = [
          [{
              name:"치킨 제육",
              price: 4700,
              tagList: [ 0,1,0,0,0,0,1 ]
            },
            {
              name:"빅치킨마요",
              price: 4100,
              tagList: [ 0,1,0,1,0,0,1 ]
            },
            {
              name:"돈까스 카레",
                price: 4500,
                tagList: [ 0,1,0,0,0,0,1 ]
            }], 
          [{
              name:"트리플소세지 토스트",
              price: 4500,
              tagList: [ 0,1,0,0,0,0,1 ]
            },
            {
              name:"베이컨 포테이토 피자",
              price: 4500,
              tagList: [ 0,1,0,1,0,0,1 ]
            },
            {
              name:"허니갈릭햄치즈",
                price: 3200,
                tagList: [ 1,1,0,1,0,0,1 ]
            }], 
          [{
            name:"브리또 단품",
            price: 3900,
            tagList: [ 0,1,0,1,0,1,1 ]
          }],
        ]

        // (살모넬라) -[ 유제품, 육류, 계란 ] 기준
        let dangerList = [ 1,1,0,1,0,0,0 ];
        
        let overlay = new kakao.maps.CustomOverlay({
          //content: iwContent,
          position: curPosition,
          yAnchor: 1
        });

        this.initContent(overlay, this.serverData.data[i].name, this.serverData.data[i].description, menuList[i], dangerList);

        kakao.maps.event.addListener(restMarker, 'click', this.openOverlay(this.curMap, overlay));
      }
      restMarker.setMap(this.curMap)
    },
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
        for(let tag=1; tag<=7; tag++){
          if(menuList[menu].tagList[tag]===1){
            if(dangerList[tag]===1){
              tableText += `<span class="tag-normal">${tagName[tag]}</span>`
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
    },
    openOverlay(map, overlay){
      return ()=>overlay.setMap(map);
    },
    closeOverlay(overlay){
      overlay.setMap(null);
    },
  }
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
  text-align: center;
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
  background-color: pink; 
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