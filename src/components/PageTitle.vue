<template>
  <h2>{{ title }}</h2>
</template>

<script>
export default {
  name: "PageTitle", //컴포넌트 이름
  component: {}, //다른 컴포넌트 사용 시 import(배열로 등록)
  data() { //html과 js코드에서 사용할 데이터 변수 선언
    // return {
    //   title: '동적 페이지 타이틀'
    // };
  },
  setup() {
  }, //컴포지션 API
  created() {
  }, //컴포넌트가 생성되면 실행
  mounted() {
  }, //template에 정의된 html 코드가 랜더링된 후 실행
  unmounted() {
  }, //unmount가 완료된 후 실행
  methods: {}, //컴포넌트 내에서 사용할 메소드 정의
  props: {
    title: {
      type: String,
      default: "props에는 부모 컴포넌트로 전달받은 데이터가 저장되고 여기에 정의된 키는 부모로부터 데이터가 전달되지 않았을 때의 default 값"
    }
  }
}
</script>

<style scoped>

</style>