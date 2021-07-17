<template>
  <div>
    <label><input type="checkbox" value="서울" v-model="checked"> 서울</label>
    <label><input type="checkbox" value="부산" v-model="checked"> 부산</label>
    <label><input type="checkbox" value="제주" v-model="checked"> 제주</label>
    <br>
    <span>체크한 지역: {{ checked }}</span>
  </div>
</template>

<script>
export default {
  name: "DataBindingCheckbox2", //컴포넌트 이름
  component: {}, //다른 컴포넌트 사용 시 import(배열로 등록)
  data() { //html과 js코드에서 사용할 데이터 변수 선언
    return {
      checked: []
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