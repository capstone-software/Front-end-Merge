<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <span class="close-img" @click="$emit('close')">
                <img src="@/assets/etc/close.png">
              </span>
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
             <!-- (1) 식중독 위험도 정의 --> 
             <div id="lv1">
              <div id= "lv1-head">
                <h3>식중독 위험도란?</h3>
              </div> 
              <div id="lv1-content">
                <p> 식품의약안전처에서 제공하는 식중독 확진건수와 기상청에서 제공하는 지상기상관측정보, 한국환경공단에서 제공하는 대기오염통계정보,
                  민간의 소셜미디어 정보의 분석을 통해 지역별 식중독 위험 발생확률을 예측하여 이를 식중독 발생지수(0~100)값으로 산출하여, 
                  지역별로 식중독에 대한 발병 가능성 및 유행정도 등의 예측정보를 관심, 주의, 경고, 위험 4단계로 알려주는 척도입니다.</p>
              </div>   
             </div>
             <!-- (2) 식중독 위험도 예측 -->
             <div id="lv2">
              <div id="lv2-head">
                <h3> 식중독 위험도 예측</h3>
              </div>
              <div id="lv2-content">
                <table>
                  <thead>
                    <tr>
                      <th>단계</th><th>지수 구간</th><th>구간 확률</th><th>누적 확률</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td id="lv2-happy">관심</td>
                      <td>0≤P&lt;55</td>
                      <td>40.00%</td>
                      <td>40.00%</td>
                    </tr>
                    <tr>
                      <td id="lv2-unhappy">주의</td>
                      <td>55≤P&lt;71</td>
                      <td>30.00%</td>
                      <td>70.00%</td>
                    </tr>
                    <tr>
                      <td id="lv2-sad">경고</td>
                      <td>71≤P&lt;86</td>
                      <td>20.00%</td>
                      <td>90.00%</td>
                    </tr>
                    <tr>
                      <td id="lv2-nervous">위험</td>
                      <td>86≤P≤100</td>
                      <td>10.00%</td>
                      <td>100%</td>
                    </tr>
                  </tbody>                                        
                </table>
                 <p> ※ P= 식중독 발생확률</p>
              </div>
             </div>

             <!--(3) 식중독 위험도 단계별 행동요령-->
             <div id="lv3">        
                <div id="lv3-head">
                  <h3>식중독 위험도 단계별 행동요령</h3>
                </div>

                <div id= "lv3-content">
                  <div id ="happy">
                    <img src='@/assets/face/happy.png' >
                    <b>관심</b> 
                    <p> 화장실 사용 후, 외출 후, 조리를 시작하기 전, 후 등에는 손을 깨끗이 씻습니다.</p>     
                  </div>     

                  <div id="unhappy">
                    <img src='@/assets/face/unhappy.png'>
                    <b>주의</b>
                    <p> 음식물은 85℃이상에서 1분 이상 가열 조리하고
                        채소 및 과일류의 비가열 식품은 흐르는 물에 씻어서 섭취합니다.</p>                     
                  </div>
   

                  <div id= "sad">
                    <img src='@/assets/face/sad.png'>
                    <b>경고</b>
                    <p> 식품용수는 가급적 수돗물을 사용하고 지하수는 반드시 끓여서 마시며,
                      조리기구는 충분히 세척한 후 소독합니다.</p>                    
                  </div>


                  <div id="nervous">
                    <img src='@/assets/face/nervous.png'>
                    <b>위험</b>
                    <p> 구토, 설사 정도가 심하고 탈수, 발열, 발진 등 증상시 바로 의료기관을 방문하여 
                        전문의의 지시를 따르고 집단설사 환자가 발생하면 가까운 보건소에 신고합니다.</p>                      
                  </div>                  
                </div>
             </div>               
            </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
            </slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name:"inputModal",
  props: {
    show: Boolean
  }
}
</script>

<style scoped>
.modal-mask {
  position:fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper { 
  display:table-cell;
  vertical-align: text-bottom;

}

.modal-container {
  width: 500px;
  margin: 0px auto;
  padding: 5px 5px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  transform: translate(-11%,10%);
}

/*---------- header css ---------*/ 
.close-img  img{
  float: right;
  width: 10px;
  padding: 15px;
}

/*---------- body css ---------*/ 
.modal-body {
  margin: 20px 20px;
}

.modal-body h3{
  padding-top: 10px;
  display: table-cell;
  color:#3c6eac;
}

/*---------- lv1 Content css ---------*/ 

#lv1-content p{
  text-align:left;
  font-size: 14px;
  font-weight:normal;
  font-stretch: condensed;
  font-family: sans-serif;

}

/*---------- lv2 Content css ---------*/ 
#lv2-content p{
  float:right;
  font-size: 50%;
  font-family: sans-serif;
}

#lv2-content{
  font-size: 14px;
  margin-top: 15px;
  margin-bottom: 20px;
  font-family: sans-serif;
}
table{
  width: 100%;
}
#lv2-happy{
  font-size:15px;
  color:#11a5b2;
  font-weight:bold;
}
#lv2-unhappy{
  font-size:15px;
  color:#85ab00;
  font-weight:bold;
}
#lv2-sad{
  font-size:15px;
  color:#ea7f00;
  font-weight:bold;
}
#lv2-nervous{
  font-size:15px;
  color:#e24414;
  font-weight:bold;
}        
/*---------- lv3 Content css ---------*/ 
#lv3-content{
  width:100%;
  margin-bottom: 3%;
  /* display: table-cell; */
}
#lv3-content b{
  float:left;
  font-size: 14px;
  transform: translate(-75%,170%);
}
#lv3-content img{
  float: left;
  width: 37px;
  transform: translate(30%,-20%);
}

#lv3-content p{
  margin-left: 15%;
  padding-top: 4px;
  text-align: center;

  font-size: 13px;
  font-weight: bold;
  font-stretch: condensed;
  font-family: sans-serif;
}


#happy{
  margin-top: 30px;
}
#happy b{
  color: #11a5b2;
  font-size:15px;
}

#unhappy{
  margin-top: 60px;
}
#unhappy b{
  color:#85ab00;
  font-size:15px;
}

#sad{
  margin-top: 60px;
}
#sad b{
  color:#ea7f00;
  font-size:15px;
}

#nervous{
  margin-top: 60px;
}
#nervous b{
  color:#e24414;
  font-size:15px;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

/* .modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
} */
</style>