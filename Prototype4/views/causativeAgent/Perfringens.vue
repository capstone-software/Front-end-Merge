<template>
  <router-link :to= "{path:'/'}"><button class = 'home'>
    <img title = '메인화면으로 이동' src='@/assets/etc/back_arrow.png'>
  </button></router-link>
  <h1>클로스트리디움퍼프린젠스</h1>

  <div class="food">
    <h3>주의 식재료</h3>
    <img src='@/assets/food/meat.png' width="50px" height="50px">
    <img src='@/assets/food/dryfood.png' width="50px" height="50px">
    <hr />
  </div>

  <div class="detail-content">    
    <h3>전파경로</h3>
    <ul>
      <li>쇠고기, 닭고기, 건조식품, 조리된 식품을 섭취하여 감염됨</li>
      <li>포자는 상온에서 생존하며, 상온 보관 또는 부적절한 가열 시 균이 증식함</li>
      <li>음식 1g당 100만 이상의 균을 섭취할 경우, 장 내강에서 포자를 형성하여 독소를 분비함</li>
      <li>대량으로 조리한 음식을 부적절한 온도로 보관할 경우 균 증식으로 유행사례 발생 가능함</li>
    </ul>

    <h3>잠복기</h3>
    <ul>
      <li>6∼24시간(대부분 10∼12시간)</li>
    </ul>

    <h3>임상증상</h3>
    <ul>
      <li>급성 설사(최대 1일간 지속)</li>
      <li>오심,복통,설사</li>
      <li>건강한 성인은 저절로 회복</li>
      <li>드물게 괴사성 장염이 보고됨(Pig -bel 증후군)</li>
    </ul>

    <h3>예방법</h3>
    <ul>
      <li>조리음식 냉각 시 규칙적으로 저어서 냉각</li>
      <li>따뜻하게 먹는 음식은 60℃이상,차갑게 먹는 음식은 5℃이하에서 보관</li>
      <li>충분히 익혀 섭취(75℃,1분)</li>
      <li>조리식품은 가급적 빠른 시간 내 섭취</li>
      <li>보관 음식 섭취 시 75℃이상으로 재가열</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "clostridiumperfringensDetail",
}
</script>

<style scoped>
.home {
  position: absolute;
  left: 0px;
  top: 20px;
  background-color: transparent;
  border: 0;
}
.home img{
  height: 20px;
}
.detail-content {
  text-align: left;
}
h3 {
  text-align: left;
  margin-top: 30px;
  margin-bottom: -10px;
}
.food img{
  margin: 20px 10px 0px 10px;
}
</style>
