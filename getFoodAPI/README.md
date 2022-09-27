# 수정사항

### 1. @/api/index
   - 위생등급 지정현황, 행정처분 결과 받아오는 함수 추가(함수 이름 밑에 export 참고)

### 2. @/assets/RestaurantList.js
   - 음식점 정보 파일로 따로 빼서 정리
   - `[{number: 그냥 1부터 순차적으로 번호 매김, license: '음식점 인허가번호', title: '음식점 이름', address: '음식점 주소', lat: 위도, lng: 경도,},...]`

### 3. @/components/Map.vue
   - api 받아오는 함수 사용
