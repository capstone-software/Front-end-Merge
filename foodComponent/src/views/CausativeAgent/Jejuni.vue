<template>
 <div class="campylobacterjejuni">
  <h1>캠필로박터제주니</h1>

  <h3>주의 식재료</h3>
  <img src='@/assets/meat.png' width="50px" height="50px">
  <img src='@/assets/dairyproduct.png' width="50px" height="50px">
  <img src='@/assets/vegetable.png' width="50px" height="50px">
  <hr />

  <div class="detail-content">    
    <h3>전파경로</h3>
    <ul>
      <li>덜 익힌 육류(특히 가금류), 비살균 유제품, 오염된 물 또는 음식을 섭취하여 감염됨</li>
      <li>균에 감염된 동물의 분변으로 물이 오염될 경우 물을 통해 감염 가능</li>
    </ul>

    <h3>잠복기</h3>
    <ul>
      <li>1∼10일(대부분 2∼5일)</li>
    </ul>

    <h3>임상증상</h3>
    <ul>
      <li>급성 설사(혈성 설사 가능)</li>
      <li>심한복통으로 급성 충수염이나 염증성 장질환으로 오진할 수 있음</li>
      <li>발열, 권태감이 설사 1∼2일 전부터 발현 할 수 있음</li>
      <li>오심, 구토</li>
      <li>면역 체계가 약한 사람들은 캠필로박터균이 때때로 혈류로 퍼져 생명을 위협</li>
    </ul>

    <h3>예방법</h3>
    <ul>
      <li>충분히 익혀 섭취(75℃,1분)</li>
      <li>칼, 도마를 통한 교차오염 주의</li>
      <li>삼계탕을 준비할 때 채소류→육류→어류→생닭 순으로 세척</li>
      <li>닭찜 등의 요리는 씻지 않은 생닭을 뜨거운 물에 한번 끓여낸 뒤 손질</li>
      <li>생닭은 냉장고 제일 아래 칸에 보관</li>
    </ul>
  </div>
 </div>
</template>

<script>

export default {
  name: "campylobacterjejuniDetail",
}
</script>

<style scoped>
.campylobacterjejuni{
  width: 500px;
  position: relative;
  left:50%;
  transform: translateX(-50%);
}
.detail-content {
  text-align: left;
}
h3 {
  text-align: left;
}
img{
  margin: 5px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>