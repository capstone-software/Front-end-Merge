<template>
  <router-link :to= "{path:'/'}"><button class = 'home'>
    <img title = '메인화면으로 이동' src='@/assets/etc/back_arrow.png'>
  </button></router-link>
  <h2>음식점 검색 페이지</h2>
  <newRestaurantList />
</template>

<script>
import newRestaurantList from "@/components/newrest.vue"

export default {
  name: "RestaurantRegist",
  components:{
    newRestaurantList,
  }
}
</script>

<style>
body{
  text-align: center;
  background-color: #f6f6f8;
}
input{
  border-style: groove;
  width: 200px;
}
button{
  border-style: groove;
}
.shadow{
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.05);
}
.home {
  position: absolute;
  left: 10px;
  top: 20px;
  background-color: transparent;
  border: 0;
}
.home img{
  height: 20px;
}
</style>