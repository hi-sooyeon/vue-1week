<template>
  <h1>Hello, {{title}}!</h1>
  <!-- {{xxx}} > data 프로퍼티에 정의 -->
</template>

<script>
export default {
  name: "DataBinding", //컴포넌트 이름
  data() { //html과 js코드에서 사용할 데이터 변수 선언
    return {
      title: 'World'
    };
  }
}
</script>

<style scoped>

</style>