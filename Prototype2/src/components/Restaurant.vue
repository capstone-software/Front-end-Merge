<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newRestItem" placeholder="음식점 이름을 입력해주세요" 
    v-on:keyup.enter="addRest">
    <span class="addContainer" @click="addRest"><img src='@/assets/etc/plus_white.png'></span>
  </div>

  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <modal :show="showModal" @close="showModal = false" @click="showModal=false">
      <template #header>
        <h3>경고</h3>
      </template>
      <template #footer>
          음식점 이름을 입력해주세요!!
      </template>
    </modal>
  </Teleport>

  <section>
    <ul>
      <li v-for="(restItem,index) in restItems" :key="restItem" class="shadow">{{restItem}}
        <span class="remove-btn" type="button" @click="removeRest(restItem, index)">
          <img src='@/assets/etc/remove.png'>
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
import Modal from '@/components/Modal.vue'

export default {
  name:"RestaurantList",
  data() {
    return {
      newRestItem:'',
      restItems:[],
      showModal: false
    }
  },
  components:{
    Modal:Modal
  },
  created(){
    this.showRest();
  },
  methods:{
    showRest(){
      if(localStorage.length>0){
        for(let i=0;i<localStorage.length;i++){
          this.restItems.push(localStorage.key(i));
        }
      }
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
    showAddRest(){
      this.restItems.push(this.newRestItem);
    },
    clearInput(){
      this.newRestItem = "";
    },
    removeRest(restItem, index){
      localStorage.removeItem(restItem);
      this.restItems.splice(index,1);
    }
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
  font-size: 0.9rem;
  width: 200px;
  text-align: center;
}
.addContainer{
  float: right;
  background: blueviolet;
  display: block;
  width: 3rem;
  border-radius: 0px 5px 5px 0px;
}
.addContainer img{
  vertical-align: middle;
}
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li{
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
  font-size: 15px;
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
  color: #42b983;
}

</style>