<template>
  <details>
    <summary>{{title}}</summary>
    <hr noshade/>
    <!-- <div>( {{lat}}, {{lng}} )</div> -->
    <div>{{address}}</div>
    <div>{{description}}</div>
  </details>
</template>

<script>
export default {
  name: "listRest",
  props: ["title", "lat", "lng", "address", "description"],
  data() {
    return {

    }
  }
}
</script>

<style scoped>
details{
  margin: 0 0 10px 0;
  padding: 0.5rem;
  background: white;
  border-radius: 5px;
  font-size: 15px;
  text-align: left;
}
details summary {
  cursor: pointer;
  font-weight: bold;
}
details summary::marker {
  font-size:0;
}

</style>