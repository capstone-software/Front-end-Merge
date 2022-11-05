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
    n_review: 'https://map.naver.com/v5/entry/place/11664159?c=14157198.0626658,4415831.5463662,13,0,0,0,dh&placePath=%2Freview%2Fvisitor&entry=plt',
    k_review: 'https://place.map.kakao.com/16857495#comment',
    g_review: 'https://www.google.com/maps/place/%ED%95%9C%EC%86%A5%EB%8F%84%EC%8B%9C%EB%9D%BD+%EC%B2%9C%EC%95%88%EC%83%81%EB%AA%85%EB%8C%80%EC%95%9E%EC%A0%90/data=!4m8!3m7!1s0x357b291972cefe73:0x9863d78b15226595!8m2!3d36.832823!4d127.1761924!9m1!1b1!16s%2Fg%2F1tgw_yg3',
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
    //review 추가
    n_review: 'https://map.naver.com/v5/entry/place/32682196?c=14156337.4294186,4415765.3435805,15,0,0,0,dh&placePath=%2Freview%2Fvisitor&entry=plt',
    k_review: 'https://place.map.kakao.com/16742966#comment',
    g_review: 'https://www.google.com/maps/place/%EC%88%9F%EA%B0%80%EB%9D%BD%EC%A0%93%EA%B0%80%EB%9D%BD/data=!4m8!3m7!1s0x357b29199dd61fc9:0x2c580dc01b6e7174!8m2!3d36.832331!4d127.1769118!9m1!1b1!16s%2Fg%2F11bxb9q8cr',
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
    //review 추가
    n_review: 'https://map.naver.com/v5/entry/place/38227544?c=14156766.6773751,4415787.8747345,15,0,0,0,dh&placePath=%2Freview%2Fvisitor&entry=plt',
    k_review: 'https://place.map.kakao.com/10756489#comment',
    g_review: 'https://www.google.com/maps/place/%EC%9D%B4%EC%82%AD%ED%86%A0%EC%8A%A4%ED%8A%B8/data=!4m8!3m7!1s0x357b291976dddf87:0x18b9e6358c4de0f2!8m2!3d36.8323678!4d127.1764988!9m1!1b1!16s%2Fg%2F1td6_xpy',
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
    //review 추가
    n_review: 'https://map.naver.com/v5/entry/place/36420026?c=14157198.0626658,4415831.5463662,13,0,0,0,dh&placePath=%2Freview%2Fvisitor&entry=plt',
    k_review: 'https://place.map.kakao.com/1422080323#comment',
    g_review: 'https://www.google.com/maps/place/%EC%84%9C%EB%B8%8C%EB%B0%80/data=!4m8!3m7!1s0x357b29196960945f:0x4b3bfc279ea80c83!8m2!3d36.8327677!4d127.1756773!9m1!1b1!16s%2Fg%2F11f64dg6_d',
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
    //review 추가
    n_review: 'https://map.naver.com/v5/entry/place/55848314?c=14156675.6514275,4415856.7202227,15,0,0,0,dh&placePath=%2Freview%2Fvisitor&entry=plt',
    k_review: 'https://place.map.kakao.com/24346409#comment',
    g_review: 'https://www.google.com/maps/place/%EB%8F%88%EA%B9%8C%EC%8A%A4%EC%8A%A4%EC%BF%A8/data=!4m8!3m7!1s0x357b293af6da2e0f:0x15aa8159536bd4b7!8m2!3d36.8420399!4d127.181843!9m1!1b1!16s%2Fg%2F11fx8_fy3x',
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
    //review 추가
    n_review: 'https://map.naver.com/v5/entry/place/1262571516?c=14156675.6514275,4415856.7202227,15,0,0,0,dh&placePath=%2Freview%2Fvisitor&entry=plt',
    k_review: 'https://place.map.kakao.com/1404737672#comment',
    g_review: 'https://www.google.com/maps/place/%EC%88%98%EC%97%85%EC%9D%B4%EB%81%9D%EB%82%9C%EC%98%A4%ED%9B%84/data=!4m8!3m7!1s0x357b291969fc284d:0x3f080d3d7809b04e!8m2!3d36.832922!4d127.1755029!9m1!1b1!16s%2Fg%2F11f3xwwrqc',
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
    //review 추가
    n_review: 'https://map.naver.com/v5/entry/place/1541871022?c,=14156675.6514275,4415856.7202227,15,0,0,0,dh&placePath=%2Freview%2Fvisitor&entry=plt',
    k_review: 'https://place.map.kakao.com/1272538689#comment',
    g_review: 'https://www.google.com/maps/place/%EC%95%88%EC%84%9C%EB%8F%99%EC%95%BC%EA%B3%B1%EC%A7%91/data=!4m8!3m7!1s0x357b291be52fcbc7:0x6a3c489bd99a9f61!8m2!3d36.8317612!4d127.1747935!9m1!1b1!16s%2Fg%2F11f6dzq82t',
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
    //review 추가
    n_review: 'https://map.naver.com/v5/entry/place/34305849?c=14156823.0050374,4415754.8985988,15,0,0,0,dh&placePath=%2Freview%2Fvisitor&entry=plt',
    k_review: 'https://place.map.kakao.com/21462299#comment',
    g_review: 'https://www.google.com/maps/place/%ED%94%BC%ED%94%8C/data=!4m8!3m7!1s0x357b29199c0b56f3:0x673da5b71e805549!8m2!3d36.8321971!4d127.1770847!9m1!1b1!16s%2Fg%2F11bxc78cr_',
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
    //review 추가
    n_review: 'https://map.naver.com/v5/entry/place/1226705553?c=14156823.0050374,4415754.8985988,15,0,0,0,dh&placePath=%2Freview%2Fvisitor&entry=plt',
    k_review: 'https://place.map.kakao.com/1299785956#comment',
    g_review: 'https://www.google.com/maps/place/%EB%B6%80%EC%95%88%EC%A7%91/data=!4m8!3m7!1s0x357b29473e46c401:0x98dea30218bc44c9!8m2!3d36.8328909!4d127.1746911!9m1!1b1!16s%2Fg%2F11j6s28k5v',
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
    //review 추가
    n_review: 'https://map.naver.com/v5/entry/place/17245790?c=14156362.7546027,4415671.3391142,15,0,0,0,dh&placePath=%2Freview%2Fvisitor&entry=plt',
    k_review: 'https://place.map.kakao.com/10045031#comment',
    g_review: 'https://www.google.com/maps/place/%ED%9D%A5%EB%B6%80%EB%B0%98%EC%A0%90/data=!4m8!3m7!1s0x357b291986b94f65:0x85498c9abb8f814!8m2!3d36.8316255!4d127.1771772!9m1!1b1!16s%2Fg%2F1tfrdp2q',
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