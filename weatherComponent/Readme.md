# ** [민영] 참고사항

## vscode indentation size : 2
- 들여쓰기 사이즈 다르면 상의해서 하나로 통일
___

## .env.local 파일은 카톡으로 보내드림
- 루트에 파일 추가해서 사용
___

## src/
api
- 외부 오픈api 사용
- router랑 백엔드 데이터 받아올 때 파일 구조 변경될 가능성 있음

assets
- 변경하기 불편하면 굳이 폴더 안 나눠도 됨
- 사용 그림 파일
  - face: 식중독 지수
  - weather: 날씨
  - food: 식중독 상세페이지
  - etc: 위치 및 기타

components 
- 사용 컴포넌트
- Weather.vue / Map.vue 순서(위아래)로 화면 출력
- timeWeather가 Weather 하위 컴포넌트

views
- view는 상세페이지밖에 한 거 없음
- 혜원이 파일 위주로 합치면 될 듯
