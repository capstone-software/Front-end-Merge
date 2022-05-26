<template>
  <foodPoisoning/>
  <weatherComp />
  <mapPrint />   
</template> 

<script>
import weatherComp from '@/components/Weather.vue'
import mapPrint from '@/components/Map.vue'
import foodPoisoning from '@/components/Probability.vue'

export default {
  name: 'MainPage',
  components: {
    weatherComp,
    mapPrint,
    foodPoisoning
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

</style>




