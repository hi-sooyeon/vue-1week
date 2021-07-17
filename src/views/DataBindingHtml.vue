<template>
  <div>
    <div>{{htmlString}}</div>
    <!-- p태그 text 그대로 노출 -->
    <div v-html="htmlString"></div>
    <!-- 컬러 적용된 String 노출 -->
  </div>
</template>

<script>
export default {
  name: "DataBindingHtml", //컴포넌트 이름
  component: {}, //다른 컴포넌트 사용 시 import(배열로 등록)
  data() { //html과 js코드에서 사용할 데이터 변수 선언
    return {
      htmlString: '<p style="color:red;">This is a red String.</p>'
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