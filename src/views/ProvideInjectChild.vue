<template>
  <div>ProvideChild</div>
</template>

<script>
export default {
  name: "ProvideInjectChild", //컴포넌트 이름
  components: {}, //다른 컴포넌트 사용 시 import(배열로 등록)
  data() { //html과 js코드에서 사용할 데이터 변수 선언
  },
  inject: ['itemLength'],
  setup() {
  }, //컴포지션 API
  created() {
  }, //컴포넌트가 생성되면 실행
  mounted() {
    console.log(this.itemLength);
  }, //template에 정의된 html 코드가 랜더링된 후 실행
  unmounted() {
  }, //unmount가 완료된 후 실행
  methods: {} //컴포넌트 내에서 사용할 메소드 정의
}
</script>

<style scoped>

</style>