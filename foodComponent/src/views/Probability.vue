<template>
  <div v-for="i in poisoning_value.length" :key="i">
    <div v-if="i-1==max_index()">
      <router-link :to= "{path:'/probability/'+ router_link[i-1]}"><button class='probability_btn'> 
        <h2>{{poisoning_label[i-1]}}</h2>
        <p>{{poisoning_element[i-1]}}</p>
        <canvas id= "pieChart" > </canvas>
      </button></router-link>
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
  import Chart from 'chart.js/auto'
  export default{
    name: 'pieChart',
    data(){
      return{
        poisoning_value:[10.5,9.5,10,10,10], // 살모넬라, 병원성대장균, 노로바이러스, 캠필로박터제주니, 클로스트리디움퍼프린젠스 
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
        router_link:['salmonella','ecoli','norovirus','jejuni','perfringens']
      }
    },
    methods:{
      max_index(){
         return this.poisoning_value.indexOf(Math.max(...this.poisoning_value));
      }
    },
    mounted(){
      const ctx= document.getElementById('pieChart');
      const data = {
        labels: [
          '살모넬라',
          '병원성대장균',
          '노로바이러스',
          '캠필로박터제주니',
          '클로스트리디움퍼프린젠스'
        ],
        datasets: [{
          data: this.poisoning_value,
          backgroundColor: [
            'rgb(255, 148, 148)',
            'rgb(169, 148, 255)',
            'rgb(148, 210, 255)',
            'rgb(255, 251, 148)',
            'rgb(176, 255, 148)',
            ],
            hoverOffset: 4
         }]
      };
      
      const pieChart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: {
          responsive: false,
          elements:{
            arc:{
              borderColor:'#c4c4c4'
            }
          },
          layout:{
            padding:{

            }
          },
          plugins:{
            legend:{
              maxWidth: 600,  
              position: 'bottom',
              align:'center',
              display: true,
              labels:{
                color: 'black'
              }
            }
          }
        }

      }); 
      pieChart;
    }
  }
</script>

<style>
  #pieChart{
    width: 300px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
  .probability_btn{
    position: absolute;
    left:50%;
    transform: translateX(-50%);
    width:600px;
    color:black;
    border-color: #c4c4c4;
    background-color: #c4c4c4; 
    border-radius: 20px;
    margin-top: 2%;
    padding: 1%;
  }

</style>



  <!--
  <div v-if="max_index()==0">
   <router-link to='/probability/salmonella'><button class='probability_btn'>
    <h3>{{poisoning_label[max_index()]}}</h3>
    <p> {{poisoning_element[max_index()]}}</p>
    <canvas id= "pieChart" > </canvas>
   </button></router-link>
 </div> -->