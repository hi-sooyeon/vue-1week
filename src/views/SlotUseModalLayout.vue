<template>
<modal-layout>
  <template v-slot:header>
    <h1>팝업 타이틀</h1>
  </template>
  <template v-slot:default>
    <p>팝업 컨텐츠 1</p>
    <p>팝업 컨텐츠 2</p>
  </template>
  <template v-slot:footer>
    <button type="button">닫기</button>
  </template>
</modal-layout>
</template>
<script>
import ModalLayout from './SlotModalLayout';
export default {
  name: "SlotUseModalLayout", //컴포넌트 이름
  components: {ModalLayout}, //다른 컴포넌트 사용 시 import(배열로 등록)
  data() { //html과 js코드에서 사용할 데이터 변수 선언
    return {
      sampleData: ""
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
  methods: {} //컴포넌트 내에서 사용할 메소드 정의
}
</script>

<style scoped>

</style>