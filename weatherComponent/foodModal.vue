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

              <div id="head">
                <h3>식중독 위험도 단계별 행동요령</h3>
              </div>

              <div id= "content">
                <div id ="happy">
                  <img src='@/assets/face/happy.png'>
                  <h6> 화장실 사용 후, 외출 후, 조리를 시작하기 전, 후 등에는 손을 깨끗이 씻습니다.</h6>  
                </div>

                <div id="unhappy">
                  <img src='@/assets/face/unhappy.png'>
                  <h6> 음식물은 85℃이상에서 1분 이상 가열 조리하고
                       채소 및 과일류의 비가열 식품은 흐르는 물에 씻어서 섭취합니다.</h6>
                </div>     

                <div id= "sad">
                  <img src='@/assets/face/sad.png'>
                  <h6> 식품용수는 가급적 수돗물을 사용하고 지하수는 반드시 끓여서 마시며,
                     조리기구는 충분히 세척한 후 소독합니다.</h6>
                </div>

                <div id="nervous">
                  <img src='@/assets/face/nervous.png'>
                  <h6> 구토, 설사 정도가 심하고 탈수, 발열, 발진 등 증상시 바로 의료기관을 방문하여 
                    전문의의 지시를 따르고 집단설사 환자가 발생하면 가까운 보건소에 신고합니다.</h6>
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
  transform: translate(-10%,38%);
}

.modal-body {
  margin: 20px 20px;
}
.modal-body h3{
  padding-top: 10px;
  margin-left:35px;
  color:#3c6eac;
}

.modal-body h6{
  font-size: 14px;
  font-stretch:condensed;
}
.modal-body img{
  float: left;
  width: 37px;
  margin-right: 15px;
}

.close-img  img{
  float: right;
  width: 10px;
  padding: 15px;
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