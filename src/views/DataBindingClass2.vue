<template>
  <div class="container"
       v-bind:class="[activeClass, errorClass]">Class Binding</div>
  <br>
  <h1>배열로 클래스 바인딩 하기</h1>
  <br>
  <h3> * 결론 : 배열을 사용하는 경우는 특정 조건에 따른 클래스 바인딩 처리를 true/false 로 할 수 없다.</h3>
</template>

<script>
export default {
  name: "DataBindingClass", //컴포넌트 이름
  component: {}, //다른 컴포넌트 사용 시 import(배열로 등록)
  data() { //html과 js코드에서 사용할 데이터 변수 선언
    return {
      activeClass: 'active',
      errorClass: 'text-red'
    };
  },
  setup() {
  }, //컴포지션 API
  created() {
  }, //컴포넌트가 생성되면 실행
  mounted() {
  }, //template에 정의된 html 코드가 랜더링된 후 실행
  unmounted() {
  }, //unmount가 완료된 후 실행
  method: {} //컴포넌트 내에서 사용할 메소드 정의
}
</script>

<style scoped>
  .container {
    margin: auto;
    width: 80%;
    padding-top: 5em;
    padding-bottom: 5em;
  }
  .active {
    background-color: lavender;
    font-weight: bold;
    font-size: large;
  }
  .text-red {
    color: red;
  }
</style>