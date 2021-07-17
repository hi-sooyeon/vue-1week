<template>
  <div class="container" v-bind:class="{
    'active': isActive, 'text-red': hasError
  }">Class Binding</div>
  <br>
  <h1>클래스에 대한 바인딩 처리 시 특이한 점</h1>
  <p>반드시 적용해야 하는 클래스는 기존 html에서 사용하던 방식처럼 class 속성에 클래스명을 입력하면 되고</p>
  <p>조건에 따라 바인딩할 클래스의 경우는 v-bind:class를 이용해서 추가적으로 정의해서 사용할 수 있다.</p>
  <br>
  <h3> * 결론 : 다른 속성의 경우 > 하나의 속성 / 클래스의 경우는 기본 클래스와, 데이터 바인딩 처리를 하는 클래스를 공존해서 사용 가능</h3>
</template>

<script>
export default {
  name: "DataBindingClass", //컴포넌트 이름
  component: {}, //다른 컴포넌트 사용 시 import(배열로 등록)
  data() { //html과 js코드에서 사용할 데이터 변수 선언
    return {
      isActive: true,
      hasError: false
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