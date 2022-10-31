<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newRestItem" placeholder="음식점명 또는 음식명을 입력해주세요" 
    v-on:keyup.enter="searchRest">
    <span class="search" @click="searchRest"><img src='@/assets/etc/magnifier.png'></span>
  </div>

  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <modal :show="showModal" @close="showModal = false" @click="showModal=false">
      <template #header>
        <h3>검색어를 입력해주세요!!</h3>
      </template>
      <template #footer>
          음식점명 또는 음식명을 입력해주세요
      </template>
    </modal>
  </Teleport>

  <div class="RestListView" v-for="(rest, index) in restList" :key="index">
    <listRest
      :title="rest.title" 
      :lat="rest.lat" 
      :lng="rest.lng"
      :address="rest.address" 
      :description="rest.description" 
    />
  </div>

</template>

<script>
import Modal from '@/components/Modal.vue'
import listRest from '@/components/listRestaurant.vue'

export default {
  name:"newRestaurantList",
  components: {
    listRest,
    Modal:Modal
  },
  data() {
    return {
      newRestItem:'',
      restItems:[],
      showModal: false,

      // 파싱하는 함수 만들어서 따로 빼야댐,, 
      // 배열로 만들어서 이런 식으로 배열에 추가해서 리턴해주는 걸로,,
      restList: [
        {
          title: "한솥도시락 천안상명대점",
          lat: 36.8328691,
          lng: 127.176213,
          address: "천안시 동남구 상명대길",
          description: "처음부터 끝까지 성심을 다해 맛있게 만들겠습니다. 한솥 홈페이지에서 한솥메뉴에 들어가시면 보다 상세한 메뉴정보를 보실 수 있습니다. 점포로 전화 주시면 성심껏 설명해 드리겠습니다.내용 더보기",
        },
        {
          title: "이삭토스트 천안상명대점",
          lat: 36.8323731,
          lng: 127.176503,
          address: "천안시 동남구 상명대길",
          description: "이삭토스트 천안상명대점의 스마트주문 페이지입니다."

        },
        {
          title: "SubMeal",
          lat: 36.8327979,
          lng: 127.175652,
          address: "천안시 동남구 상명대길",
          description: "멕시코,남미음식"

        },
        {
          title: "수업이끝난오후",
          lat: 36.8328612,
          lng: 127.175439,
          address: "천안시 동남구 상명대길",
          description: "콩나물 불고기가 맛있는 수업이 끝난 오후 입니다."

        },
      ]
    }
  },
  created(){
  },
  methods:{
    searchRest() {
      // 백엔드에서 데이터 받아오기
    },
    addRest(){
      if(this.newRestItem !== ""){
        let value = this.newRestItem&&this.newRestItem.trim();
        // setItem(key, value)
        localStorage.setItem(value, value);
        this.showAddRest();
        this.clearInput();
      } else{
        this.showModal = !this.showModal;
      }
    },
  }
}
</script>

<style scoped>
input:focus{
  outline: none;
}
.inputBox{
  background-color: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  margin-bottom: 30px;
}
.inputBox input{
  border-style: none;
  font-size: 0.7rem;
  width: 200px;
  text-align: center;
}
.search{
  float: right;
  background: blueviolet;
  display: block;
  width: 3rem;
  border-radius: 0px 5px 5px 0px;
}
.search img{
  vertical-align: middle;
}

.remove-btn{
  margin-left: auto;
}
.remove-btn img{
  height: 20px;
  vertical-align: middle;
}
.modal-header h3 {
  margin-top: 0;
  color: blueviolet;
}

</style>