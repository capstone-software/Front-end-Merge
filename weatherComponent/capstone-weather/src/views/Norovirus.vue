<template>
  <h1>노로바이러스</h1>

  <h3>주의 식재료</h3>
  <img src='@/assets/food/seafood.png' width="50px" height="50px">
  <img src='@/assets/food/vegetable.png' width="50px" height="50px">
  <hr />

  <div class="detail-content">    
    <h3>전파경로</h3>
    <ul>
      <li>직접적인 환자와 접촉 및 환자 구토물에 의한 비말감염</li>
      <li>익히지 않은 해산물 섭취</li>
      <li>오염된 물로 세척된 과일 및 야채 섭취</li>
      <li>불충분하게 조리된 고기가 함유된 인스턴트 음식 등 오염된 음식 섭취</li>
      <li>매우 강한 전염력의 특성으로 인해 2차 감염이 흔히 일어남</li>
    </ul>

    <h3>잠복기</h3>
    <ul>
      <li>10~50시간(평균적으로 24~48시간)</li>
      <li>증상발생 후 24~48시간 동안 대변에서 바이러스 배출이 가장 많음</li>
    </ul>

    <h3>임상증상</h3>
    <ul>
      <li>구토</li>
      <li>설사</li>
      <li>복통</li>
      <li>근육통, 두통, 권태감, 미열, 또는 2가지 증상이 동반하여 발생 가능</li>
    </ul>

    <h3>예방법</h3>
    <ul>
      <li>흐르는 물에 비누로 30초 이상 손을 자주 씻기(특히 식품 섭취 또는 조리 전, 화장실 사용 후)</li>
      <li>충분히 익혀 섭취(75℃,1분)</li>
      <li>채소, 과일은 깨끗한 물에 씻어 껍질을 벗겨 섭취</li>
      <li>칼, 도마를 통한 교차오염 주의</li>
    </ul>



  </div>
</template>

<script>

export default {
  name: "norovirusDetail",

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
