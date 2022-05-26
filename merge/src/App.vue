<template>
 <div id="app">
   <h3> 오늘의 식중독 예방 병원균 </h3>   
   <router-view></router-view> 
 </div>
</template>


<style>
/*#app {


  position: relative;
  left:50%;
  transform: translateX(-50%);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}*/
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
