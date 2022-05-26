<template>
  <div id="map"></div>
</template>

<script>
export default {
  name: "mapPrint",
  data() {
    return {
      map: null,
      latitude: 0,
      longitude: 0
    }
  },
  mounted() {
    "geolocation" in navigator?this.getPosition():console.log('Geolocation is not available');
    (window.kakao && window.kakao.maps)?this.initMap():this.addKakaoMapScript();
  },
  methods:{
    addKakaoMapScript() {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src ="http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey="
      +process.env.VUE_APP_KAKAOMAP_KEY;
      document.head.appendChild(script);
    },
    initMap() {
      const container = document.querySelector('#map')
      const options = {
        center : new kakao.maps.LatLng(this.latitude, this.longitude),
        level: 3
      }
      const map = new kakao.maps.Map(container, options)
      const markerPosition = new kakao.maps.LatLng(this.latitude, this.longitude);

      const marker = new kakao.maps.Marker({
        position: markerPosition
      });
      marker.setMap(map)
    },
    getPosition() {
      navigator.geolocation.getCurrentPosition(pos => {
        this.latitude = pos.coords.latitude;
        this.longitude = pos.coords.longitude;
      }, err => {
        alert(err.message);
      })
    },
    
  }
}

</script>

<style scoped>
#map {
  height:500px;
  border-radius: 15px;
  margin-top: 20px;
}
</style>