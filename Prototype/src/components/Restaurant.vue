<template>
   <p> {{causativeAgent[0].name}} </p>
</template>
<script>
import restaurant from '@/assets/restaurant.json'

export default{
  name: "restaurantComp",
  data(){
    return {
      restaurantList:{
       title:'',
       lat: parseFloat,
       lng: parseFloat
      },
      menuList:[
        {
          name:'',
          price:'',
          tagList:[]
        },
        {
          name:'',
          price:'',
          tagList:[]
        },
        {
          name:'',
          price:'',
          tagList:[]
        }
      ],
      max_index: 2, // salmonella, ecoli, noro, jejuni, perfrigens
      causativeAgent:[
        { 
          name: 'salmonella',   
          food:['유제품','육류','계란','복합조리식품']
        },
        {
          name: 'ecoli',
          food:['육류','해산물','야채','복합조리식품']
        },
        {
          name: 'noro',
          food:['해산물','야채']
        },
        {
          name: 'jejuni',
          food:['유제품','육류','야채']
        },
        {
          name: 'perfrigens',
          food:['육류','건조식품','복합조리식품']
        }
      ]
    }
  },
  methods:{
    //res_num: 음식점 번호 (0.한솥 도시락, 1.이삭토스트, 2.서브밀, 3.수업이 끝난 오후)
    getrestaurantList(res_num){
        this.restaurantList.title=restaurant.data[res_num].name
        this.restaurantList.lat=restaurant.data[res_num].location.latitude //위도
        this.restaurantList.lng=restaurant.data[res_num].location.longitude //경도
    },
    getmenuList(res_num){
      console.log(this.causativeAgent[this.max_index].food)


      for(let i=0;i<3;i++){
        if(restaurant.data[res_num].menuList[i]== null){
          break;
        }
        this.menuList[i].name=restaurant.data[res_num].menuList[i].name //메뉴이름
        this.menuList[i].price=restaurant.data[res_num].menuList[i].price //메뉴 가격

        //원인균별 주의할 식재료와 메뉴의 주의할 식재료 비교
         for(let a=0;a<restaurant.data[res_num].menuList[i].tagList.length;a++){
           this.menuList[i].tagList[a]= restaurant.data[res_num].menuList[i].tagList[a].name
         }
      }
    }  
  },  
  created() {
    //res_num: 음식점 번호 (0.한솥 도시락, 1.이삭토스트, 2.서브밀, 3.수업이 끝난 오후)
    this.getrestaurantList(3)
    this.getmenuList(2)

  }

}
</script>

<style scoped>

</style>
