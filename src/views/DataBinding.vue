<template>
  <h1>Hello, {{title}}!</h1>
  <!-- {{xxx}} > data 프로퍼티에 정의 -->
  <div style="height: 1000px;">
    <p v-pin="position">페이지 고정 영역(position:fixed;top:50px,left:100px;)</p>
  </div>
</template>

<script>
export default {
  name: "DataBinding", //컴포넌트 이름
  data() { //html과 js코드에서 사용할 데이터 변수 선언
    return {
      title: 'World',
      position: {top: 600, left: 150}
    };
  },
  directives: {
    pin: {
      mounted(el, binding) {
        el.style.position = 'fixed';
        el.style.top = binding.value.top + 'px';
        el.style.left = binding.value.left + 'px';
      }
    }
  }
}
</script>

<style scoped>

</style>