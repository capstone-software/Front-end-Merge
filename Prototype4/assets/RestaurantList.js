/* eslint-disable no-unused-vars */
// 시연을 위해 임의로 다른 음식점의 정보로 저장(핀 위치는 학교 근처로 지정)
const restaurantInfo = [
  {
    number: 0, 
    license: '20010450053', 
    title:'한솥도시락',
    address: '충남 천안시 동남구 상명대길 27 영일빌딩', 
    lat: 36.832823, 
    lng: 127.1761924,
    menuList: [
      {
        name: '치킨제육',
        tagList: ['가금류', '육류'],
      },
      {
        name: '빅치킨마요',
        tagList: ['가금류', '계란'],
      },
      {
        name: '돈까스 카레',
        tagList: ['육류', '야채'],
      },
      {
        name: '소불고기 철판볶음밥',
        tagList: ['육류'],
      },
      {
        name: '진달래',
        tagList: ['육류', '해산물'],
      },
    ]
  },
  { // 행정처분
    number: 1, 
    license: '20130458056', // 인허가번호: 삼삼꼬마김밥
    title:'숟가락젓가락',
    address: '충청남도 천안시 동남구 상명대길 38(안서동)', 
    lat: 36.832331, 
    lng: 127.1769118, 
    menuList: [
      {
        name: '부대찌개', 
        tagList: ['육류'],
      },
      {
        name: '제육볶음', 
        tagList: ['육류'],
      },
      {
        name: '닭볶음탕', 
        tagList: ['가금류'],
      },
      {
        name: '돼지찌개', 
        tagList: ['육류'],
      },
    ]
  },
  { // 행정처분
    number: 2, 
    license: '20200460675', // 인허가번호: 한샘한식부페
    title:'이삭토스트',
    address: '충남 천안시 동남구 상명대길 34 ,28', 
    lat: 36.8328691, 
    lng: 127.176213,
    menuList: [
      {
        name: '햄치즈 토스트',
        tagList: ['계란', '육류', '유제품'],
      },
      {
        name: '베이컨 포테이토 피자',
        tagList: ['계란', '육류', '유제품'],
      },
      {
        name: '감자 토스트',
        tagList: ['계란'],
      },
      {
        name: '딥치즈 베이컨',
        tagList: ['육류', '유제품'],
      },
      {
        name: '칠리새우 토스트',
        tagList: ['계란', '야채', '해산물'],
      },
      
    ]
  },
  {
    number: 3, 
    license: '20140450665', 
    title:'서브밀',
    address: '충남 천안시 동남구 상명대길 26 상록홈타운', 
    lat: 36.8325989, 
    lng: 127.176167,
    menuList: [
      {
        name: '브리또 단품',
        tagList: ['육류', '야채', '유제품'],
      },
      {
        name: '새우튀김 추가',
        tagList: ['해산물'],
      },
    ]
  },
  { // 행정처분
    number: 4, 
    license: '20190460222', // 인허가번호: 엘제이컴퍼니
    title:'돈가스스쿨',
    address: '충남 천안시 동남구 상명대길 23(1층 안서동)', 
    lat: 36.8329959, 
    lng: 127.1757767,
    menuList: [
      {
        name: '등심돈까스',
        tagList: ['육류'],
      },
      {
        name: '치즈돈까스',
        tagList: ['육류', '유제품'],
      },
      {
        name: '생선까스',
        tagList: ['해산물'],
      },
      {
        name: '오므라이스',
        tagList: ['계란', '야채'],
      },
      {
        name: '제육덮밥',
        tagList: ['육류'],
      },
      {
        name: '쫄면',
        tagList: ['야채'],
      },
      
    ]
  },
  {
    number: 5, 
    license: '20010450742', 
    title:'수업이끝난오후',
    address: '충남 천안시 동남구 상명대길 24', 
    lat: 36.8328612, 
    lng: 127.175439, 
    menuList: [
      {
        name: '콩나물불고기+볶음밥',
        tagList: ['육류', '야채'],
      },
      {
        name: '대패삼겹살',
        tagList: ['육류'],
      },
      {
        name: '냉동삼겹살',
        tagList: ['육류'],
      },
    ]
  },
  {
    number: 6, 
    license: '20030450111', 
    title:'안서동야곱집',
    address: '충청남도 천안시 동남구 중암샛길 2(1층 안서동)', 
    lat: 36.8317612, 
    lng: 127.1747935, 
    menuList: [
      {
        name: '막창',
        tagList: ['육류'],
      },
      {
        name: '야채곱창',
        tagList: ['육류', '야채'],
      },
      {
        name: '알곱창',
        tagList: ['육류', '야채'],
      },
      {
        name: '오돌뼈',
        tagList: ['육류'],
      },
    ]
  },
  { // 위생등급-매우우수
    number: 7, 
    license: '19970450355', // 인허가번호: 배스킨라빈스천안안서점
    title:'피플', 
    address: '충청남도 천안시 동남구 탑골길 18(안서동)', 
    lat: 36.8321971, 
    lng: 127.1770847, 
    menuList: [
      {
        name: '오븐치즈스파게티',
        tagList: ['유제품'],
      },
      {
        name: '오븐치즈새우도리아',
        tagList: ['해산물', '유제품'],
      },{
        name: '오븐치즈치킨도리아',
        tagList: ['가금류', '유제품'],
      },{
        name: '해물볶음밥',
        tagList: ['해산물', '야채'],
      },{
        name: '햄베이컨볶음밥',
        tagList: ['육류', '야채'],
      },
    ]
  },
  
  { // 위생등급-매우우수
    number: 8, 
    license: '20200458430', // 인허가번호: 케이에프씨천안터미널점
    title:'원조부안집안서점',
    address: '충청남도 천안시 동남구 상명대길 14(1층 안서동)', 
    lat: 36.8328909, 
    lng: 127.1746911, 
    menuList: [
      {
        name: '육즙목살', 
        tagList: ['육류']
      },
      {
        name: '쫀득살', 
        tagList: ['육류']
      },
      {
        name: '숙성삼겹', 
        tagList: ['육류']
      },
      {
        name: '쫄깃껍데기', 
        tagList: ['육류']
      },
      {
        name: '부안오득살', 
        tagList: ['육류']
      },
      {
        name: '살얼음 막국수', 
        tagList: ['야채']
      },
    ]
  },
  { // 위생등급-우수
    number: 9, 
    license: '20140450439', // 인허가번호: 애슐리퀸즈신세계천안아산점
    title:'흥부반점',
    address: '충청남도 천안시 동남구 안서동 305-7', 
    lat: 36.8302114, 
    lng: 127.1795261, 
    menuList: [
      {
        name: '짜장면',
        tagList: ['육류', '야채'],
      },
      {
        name: '짬뽕',
        tagList: ['야채', '해산물'],
      },
      {
        name: '우동',
        tagList: ['야채', '해산물'],
      },
      {
        name: '볶음밥',
        tagList: ['육류', '야채'],
      },
      {
        name: '탕수육',
        tagList: ['육류'],
      },
    ]
  },
]

export default restaurantInfo