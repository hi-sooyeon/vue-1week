<template>
  <div v-bind:style="styleObject">
    인라인 스타일 바인딩 (오브젝트로 선언)<br>
    div v-bind:style="styleObject"
  </div>
  <hr>
  <div v-bind:style="[baseStyle, addStyle]">
    배열을 이용한 인라인 스타일 바인딩<br>
    div v-bind:style="[baseStyle, addStyle]"
  </div>
  <br>
  <div style="text-align: left; width: 50%; margin: auto;">
    data() { //html과 js코드에서 사용할 데이터 변수 선언<br>
    &emsp;return {<br>
    &emsp;&emsp;styleObject: {<br>
    &emsp;&emsp;&emsp;color: 'dodgerblue',<br>
    &emsp;&emsp;&emsp;fontSize: '30px'<br>
    &emsp;&emsp;},<br>
    &emsp;&emsp;baseStyle: 'background-color:mistyrose;width:50%;padding:5%;margin:auto;',<br>
    &emsp;&emsp;addStyle: 'color:mediumpurple;font-weight:bold;'<br>
    &emsp;};<br>
    }<br>
  </div>
</template>

<script>
export default {
  name: "DataBindingStyle", //컴포넌트 이름
  component: {}, //다른 컴포넌트 사용 시 import(배열로 등록)
  data() { //html과 js코드에서 사용할 데이터 변수 선언
    return {
      styleObject: {
        color: 'dodgerblue',
        fontSize: '30px'
      },
      baseStyle: 'background-color:mistyrose;width:50%;padding:5%;margin:auto;',
      addStyle: 'color:mediumpurple;font-weight:bold;'
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
hr {
  margin: 2%;
}
</style>