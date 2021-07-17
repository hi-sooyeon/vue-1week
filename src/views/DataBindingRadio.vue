<template>
  <div>
    <label><input type="radio" v-bind:value="radioValue1" v-model="picked"> 서울</label>
    <label><input type="radio" v-bind:value="radioValue2" v-model="picked"> 부산</label>
    <label><input type="radio" v-bind:value="radioValue3" v-model="picked"> 제주</label>
    <br>
    <span>선택한 지역 : {{ picked }}</span>
  </div>
</template>

<script>
export default {
  name: "DataBindingRadio", //컴포넌트 이름
  component: {}, //다른 컴포넌트 사용 시 import(배열로 등록)
  data() { //html과 js코드에서 사용할 데이터 변수 선언
    return {
      picked: '',
      radioValue1: '서울',
      radioValue2: '부산',
      radioValue3: '제주'
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

</style>