<template>
  <h1>병원성대장균</h1>

  <h3>주의 식재료</h3>
  <img src='@/assets/food/vegetable.png' width="50px" height="50px">
  <img src='@/assets/food/kimbap.png' width="50px" height="50px">
  <img src='@/assets/food/meat.png' width="50px" height="50px">
  <img src='@/assets/food/seafood.png' width="50px" height="50px">
  <hr />

  <div class="detail-content">    
    <h3>전파경로</h3>
    <ul>
      <li>오염된 물(지하수 및 음용수 등) 섭취</li>
      <li>오염된 물로 세척된 과일 및 야채 섭취</li>
      <li>도축과정에서 오염된 육류 섭취</li>
      <li>드물게 환자 또는 병원체보유자의 대변 직접 접촉에 의한 감염도 가능</li>
    </ul>

    <h3>잠복기</h3>
    <ul>
      <li>1일~6일(24~144시간)</li>
      <li>잠복기가 짧을 경우, 9∼12시간도 가능</li>
    </ul>

    <h3>임상증상</h3>
    <ul>
      <li>구토</li>
      <li>설사</li>
      <li>복통</li>
      <li>발열</li>
      <li>병원성대장균의 한 종류인 장출혈성대장균의 경우, 심한 증상이 나타날 수 있음</li>
    </ul>

    <h3>예방법</h3>
    <ul>
      <li>육류 조리 시에는 내부까지 완전히 익도록 충분히 가열 조리(중심온도 75℃ 1분 이상)</li>
      <li>세척한 채소류는 즉시 조리에 사용하고, 바로 조리나 섭취하지 않는 경우 냉장 보관</li>
      <li>가열·조리한 음식은 상온 방치하지 말고 가능한 빨리 섭취(2시간 이내)</li>
      <li>칼, 도마를 구분해 사용하여 교차오염 방지</li>
    </ul>

  </div>
</template>

<script>

export default {
  name: "EcoliDetail",

}
</script>

<style scoped>
.detail-content {
  text-align: left;
}
h3 {
  text-align: left;
  margin-top: 30px;
  margin-bottom: -10px;
}
img{
  margin: 20px 10px 0px 10px;
}
</style>
