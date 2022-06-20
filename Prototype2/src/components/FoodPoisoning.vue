<template>
  <!-- 식중독 확인 버튼 -->
  <button id="food-btn" @click="[confirmClick(),buttonToggle()]">식중독 발병 병원균 확인하기</button>

  <!-- 식중독 결과 차트 -->
  <div id="prob-chart">
    <div v-for="i in poisoning_value.length" :key="i">
      <div v-if="i-1==max_index()">
        <router-link :to= "{path:'/'+ router_link[i-1]}"><button id="prob-btn"> 
          <h2>{{poisoning_label[i-1]}}</h2>
          <p>{{poisoning_element[i-1]}}</p>
          <canvas id= "pieChart"> </canvas>
        </button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { postWeather } from '@/api/index';
import Chart from "chart.js/auto";
let pieChart;

export default {
  name: "foodPoisoning",
  data() {
    return {
      poisoning_value:'', // 살모넬라, 병원성대장균, 노로바이러스, 캠필로박터제주니, 클로스트리디움퍼프린젠스 
      poisoning_label:[
        '살모넬라',
        '병원성대장균',
        '노로바이러스',
        '캠필로박터제주니',
        '클로스트리디움퍼프린젠스'],
      poisoning_element:[
        '덜 익힌 달걀, 생우유 가공품, 오염된 육류 및 가금류',
        '채소류, 복합조리식품(ex)도시락), 육류, 어패류 ',
        '어패류(ex)익히지 않은 굴), 과일류, 채소류',
        '가금류(ex)닭, 오리), 비살균 유제품, 채소류 ',
        '육류,건조식품, 복합조리식품(ex)도시락)'
      ],
      router_link:['salmonella','ecoli','norovirus','jejuni','perfringens'],
    }
  },
  mounted() {
    this.emitter.on('confirm-result', (weatherData)=> {
      if(weatherData.avgTa){ 
        console.log(weatherData);
        postWeather(JSON.stringify(weatherData))
          .then(async response => {
            if(response.status==200){
              this.poisoning_value = await response.data.floatList;
              setTimeout(() => {
                if(pieChart) {
                  pieChart.destroy();
                }
                pieChart;
                this.drawChart(this.poisoning_value);
              }, 500);
            }
          })
          .catch(error => console.log(error));
      }
    })
  },
  methods: {
    max_index(){
      return this.poisoning_value.indexOf(Math.max(...this.poisoning_value));
    },
    drawChart(result_value){
      const ctx = document.getElementById('pieChart');
      
      pieChart= new Chart(ctx, {
        type: 'pie',
        data: {
          labels:this.poisoning_label,
          datasets:[{
            data: result_value,
            backgroundColor: [ 
              'rgb(255, 148, 148)',
              'rgb(169, 148, 255)',
              'rgb(148, 210, 255)',
              'rgb(255, 251, 148)',
              'rgb(176, 255, 148)',
            ],
            hoverOffset: 4
          }]
        },
        options: {
          responsive: false,
          elements:{ arc:{ borderColor:'#c4c4c4' }},
          layout:{ padding:{ }},
          plugins:{
            legend:{
              maxWidth: 600,
              position: 'bottom',
              align:'center',
              display: true,
              labels:{ color: 'black' }
            }
          }
        }
      });
    },
    confirmClick() {
      this.emitter.emit('confirm-click');
    },
    buttonToggle(){
      // const button = document.getElementById('food-btn');
      // const chart = document.getElementById('prob-btn');

      //document.getElementById('prob-btn').style.display = 'block';
      //document.getElementById('food-btn').style.display = 'none';
    }
  } //methods
}
</script>

<style>
#food-btn {
  width: 400px;
  height: 35px;
  font-size:16px;
  color:#000000;
  background-color: gainsboro; 
  border: none;
  border-radius: 12px;
  box-shadow: 2px 2px 3px rgba(128, 128, 128, 0.444);
  padding-left: 10%;
  padding-right: 10%;
  margin-bottom: 20px;
}
#food-btn:active{
  box-shadow: none;
  margin-left: 2px;
  margin-top: 2px;
}
#prob-btn {
  position: relative;
  left:50%;
  transform: translateX(-50%);
  width:400px;
  color:black;
  border: none;
  background-color: gainsboro; 
  border-radius: 20px;
  padding: 1%;
  margin-bottom: 20px;
}
#pieChart {
  width: 300px;
  position:relative;
  margin-left: auto;
  margin-right: auto;
  display: block;
}
</style>