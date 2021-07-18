<template>
  <h1>{{ title }}</h1>
</template>

<script>
import {inject} from "vue";
export default {
  name: "CompositionAPIInject", //컴포넌트 이름
  components: {}, //다른 컴포넌트 사용 시 import(배열로 등록)
  data() { //html과 js코드에서 사용할 데이터 변수 선언
  },
  setup() {
    const title = inject('title');
    //inject를 사용해서 provide에서 정의한 키(key)로 데이터 전달 받음
    return {title};
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