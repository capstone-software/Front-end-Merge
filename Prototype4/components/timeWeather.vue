<template>
  <div id="t-weather">
    <div>{{time.slice(0,2)}}:00</div>
    <div v-if="pty==='0'">
      <img v-if="sky==='1'" src='@/assets/weather/sun.png'>
      <img v-else-if="sky==='3'" src='@/assets/weather/cloudy.png'>
      <img v-else-if="sky==='4'" src='@/assets/weather/clouds.png'>
      <img v-else src='@/assets/etc/loading.png'>
    </div>
    <div v-else>
      <img v-if="pty==='1'||pty==='5'" 
      src='@/assets/weather/sun.png'>
      <img v-else-if="pty==='2'||pty==='6'" 
      src='@/assets/weather/cloudy.png'>
      <img v-else-if="pty==='3'||pty==='7'"  
      src='@/assets/weather/clouds.png'>
      <img v-else src='@/assets/etc/loading.png'>
    </div>
    <div>{{t1h}}℃</div>
  </div>
</template>

<script>
export default {
  name : "tWeather",
  props:["time", "t1h", "sky", "pty"],
  data() {
    return {

    }
  },
}

</script>

<style scoped>
#t-weather {
  background-color: #E6E6E6;
  border-radius: 15px;
  height:75px;
  width: 55px;
  margin:5px;
  margin-left: 6px;
  margin-right:6px;
  padding: 5px;
  font-size: 13px;
}
img {
  height: 30px;
  margin: 3px;
  margin-top: 6px;
}
</style>