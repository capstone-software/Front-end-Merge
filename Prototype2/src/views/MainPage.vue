<template>
  <h3> 오늘의 식중독 예방 병원균 </h3>
  <foodPoisoning />
  <weatherComp />
  <mapPrint />
</template> 

<script>
import foodPoisoning from '@/components/FoodPoisoning.vue'
import weatherComp from '@/components/Weather.vue'
import mapPrint from '@/components/Map.vue'

export default {
  name: 'MainPage',
  components: {
    foodPoisoning,
    weatherComp,
    mapPrint,
  }
}
</script>

<style>

</style>