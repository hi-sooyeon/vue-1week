<template>
  <CompositionAPIInject />
  <h3>CompositionAPIProvide</h3>
</template>

<script>
import CompositionAPIInject from "@/views/CompositionAPIInject";
import {provide} from "vue";
export default {
  name: "CompositionAPIProvide", //컴포넌트 이름
  components: {CompositionAPIInject}, //다른 컴포넌트 사용 시 import(배열로 등록)
  data() { //html과 js코드에서 사용할 데이터 변수 선언
    return {
      sampleData: ""
    };
  },
  setup() {
    provide('title', 'Vue.js 3 프로젝트');
    //provide 함수를 통해서 전달할 키(key), 값(value) 설정
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