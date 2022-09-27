import axios from 'axios';

const config = {
  // 위경도 -> 법정동(행정동) 변환 (x=경도, y=위도)
  kakaoRegionBase: 'https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?',


  // 식중독 지수
  foodIndiBase: 'http://apis.data.go.kr/1360000/HealthWthrIdxServiceV2/getFoodPoisoningIdxV2?serviceKey='
  + process.env.VUE_APP_PUBLICAPI_KEY + '&numOfRows=10&pageNo=1&dataType=JSON',


  // 단기예보
  vilageFcstBase: 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey='
  + process.env.VUE_APP_PUBLICAPI_KEY + '&pageNo=1&numOfRows=500&dataType=JSON',
  // 초단기예보
  ultraFcstBase: 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey='
  + process.env.VUE_APP_PUBLICAPI_KEY + '&pageNo=1&numOfRows=100&dataType=JSON',
  // 초단기실황
  ultraNcstBase: 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey='
  + process.env.VUE_APP_PUBLICAPI_KEY + '&pageNp=1&numOfRows=100&dataType=JSON',


  // 위생등급 지정현황
  hygieneGrade: 'http://openapi.foodsafetykorea.go.kr/api/' + process.env.VUE_APP_FOODSAFETYAPI_KEY + '/C004/json/1/5', 
  // 행정처분 결과
  adminDispos: 'http://openapi.foodsafetykorea.go.kr/api/' + process.env.VUE_APP_FOODSAFETYAPI_KEY + '/I2630/json/1/5', 


  // 백엔드 통신
  backEndBase: process.env.VUE_APP_BACKEND_URL+'/api/v1'
}


function getAdd(long,lat) {
  const kconf = { headers: {Authorization : 'KakaoAK '+process.env.VUE_APP_TRANSADD_KEY}};
  return axios.get(`${config.kakaoRegionBase}x=${long}&y=${lat}`, kconf);
}

function showFoodIndi(area, date) {
  return axios.get(`${config.foodIndiBase}&areaNo=${area}&time=${date}`);
}

function getUltraFcst(date,time,nx,ny) {
  return axios.get(`${config.ultraFcstBase}&base_date=${date}&base_time=${time}&nx=${nx}&ny=${ny}`)
}
function getVilageFcst(date,time,nx,ny) {
  return axios.get(`${config.vilageFcstBase}&base_date=${date}&base_time=${time}&nx=${nx}&ny=${ny}`)
}
function getUltraNcst(date, time, nx, ny) {
  return axios.get(`${config.ultraNcstBase}&base_date=${date}&base_time=${time}&nx=${nx}&ny=${ny}`)
}

function getHygiene(lcns){
  return axios.get(`${config.hygieneGrade}/LCNS_NO=${lcns}`)
}
function getDisposition(lcns){
  return axios.get(`${config.adminDispos}/LCNS_NO=${lcns}`)
}

function postWeather(data){
  return axios.post(`${config.backEndBase}/model-predict`,data, {
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

export { getAdd, showFoodIndi}
export { getUltraFcst, getVilageFcst, getUltraNcst }
export { getHygiene, getDisposition}
export { postWeather }