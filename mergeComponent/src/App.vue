<template>
 <div id="app">
   <h3> 오늘의 식중독 예방 병원균 </h3>
   <router-view></router-view> 
   <weatherComp />
   <mapPrint />

 </div>
</template>

<script>
import weatherComp from '@/components/Weather.vue'
import mapPrint from '@/components/Map.vue'

export default {
  name: 'App',
  components: {
    //salmonellaDetail,
    //norovirusDetail,
    //EcoliDetail,
    weatherComp,
    mapPrint
  }
}
</script>

<style>
#app {

  width: 400px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  position: absolute;
  left:50%;
  transform: translateX(-50%);

  margin-top: 10px;
  text-align: center;
  color: #2c3e50;
}
#probability_btn{

    border-color: #c4c4c4;
    font-size:16px;
    color:#000000;
    background-color: #c4c4c4; 
    border-radius: 20px;
    padding-left: 10%;
    padding-right: 10%;
}

</style>
