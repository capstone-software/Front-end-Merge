import {createRouter, createWebHistory} from 'vue-router'
import Probability from '@/views/Probability'
import Salmonella from '@/views/CausativeAgent/Salmonella'
import EColi from '@/views/CausativeAgent/EColi'
import Norovirus from '@/views/CausativeAgent/Norovirus'
import Jejuni from '@/views/CausativeAgent/Jejuni'
import Perfringens from '@/views/CausativeAgent/Perfringens'
import MainPage from '@/views/MainPage'
import axios from 'axios'

const config = {
  // 위경도 -> 법정동(행정동) 변환 (x=경도, y=위도)
  kakaoRegionBase: 'https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?',

  // 식중독 지수
  foodIndiBase: 'http://apis.data.go.kr/1360000/HealthWthrIdxServiceV2/getFoodPoisoningIdxV2?serviceKey='
  + process.env.VUE_APP_PUBLICAPI_KEY + '&numOfRows=10&pageNo=1&dataType=JSON',

  // 초단기예보
  ultraFcstBase: 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey='
  + process.env.VUE_APP_PUBLICAPI_KEY + '&pageNo=1&numOfRows=100&dataType=JSON',
  // 단기예보
  vilageFcstBase: 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey='
  + process.env.VUE_APP_PUBLICAPI_KEY + '&pageNo=1&numOfRows=500&dataType=JSON',
}
function getAdd(long,lat) {
  const kconf = { headers: {Authorization : 'KakaoAK '+process.env.VUE_APP_TRANSADD_KEY}};
  return axios.get(`${config.kakaoRegionBase}x=${long}&y=${lat}`, kconf);
}

function showFoodIndi(area, date) {
  return axios.get(`${config.foodIndiBase}&areaNo=${area}&time=${date}`);
}

function getUltra(date,time,nx,ny) {
  return axios.get(`${config.ultraFcstBase}&base_date=${date}&base_time=${time}&nx=${nx}&ny=${ny}`)
}
function getVilage(date,time,nx,ny) {
  return axios.get(`${config.vilageFcstBase}&base_date=${date}&base_time=${time}&nx=${nx}&ny=${ny}`)
}
export {getAdd, showFoodIndi,getUltra,getVilage}


export default createRouter({
    history: createWebHistory(),
    routes: [ 
      {
        path:'/',
        alias:'/main',
        component: MainPage
      },
      {
        path: '/probability',
        component:Probability

      },
      {
        path: '/probability/salmonella',
        component: Salmonella
      },
      {
        path: '/probability/ecoli',
        component: EColi
      },
      {
        path: '/probability/norovirus',
        component: Norovirus
      },
      {
        path: '/probability/jejuni',
        component: Jejuni
      },
      {
        path: '/probability/perfringens',
        component: Perfringens
      }

    ]


})