<template>
  <div class="banner">
    <img @click="this.showModal=true" src="@/assets/etc/(10)banner.png">
  </div>

  <Teleport to="body">
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>이달의 식중독 주의 정보</h3>
        <button class="btn-modal-close" @click="showModal=false"><img src="@/assets/etc/exit.png"></button>
      </template>
      <template #body>
        <div class="month-info">
          <img src="@/assets/etc/(10)month_info.png">
        </div>
        <p> 식품의약품안전처 - [2022년 10월] 월간식중독 주의 정보</p>
      </template>
    </modal>
  </Teleport>
</template>

<script>
import Modal from '@/components/Modal.vue'

export default {
  name: "MonthBanner",
  data() {
    return {
      showModal: false,
    }
  },
  components:{
    Modal:Modal
  },
}
</script>

<style scoped>

.banner {
  margin-bottom: 15px;
  cursor: pointer;
}
.banner img {
  width: 400px;
  border-radius: 10px;
}

.month-info img {
  width: 100%;
}

.modal-body p {
  font-size: 8pt;
  text-align: left;

}

</style>