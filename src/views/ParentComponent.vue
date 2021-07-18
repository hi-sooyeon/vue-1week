<template>
  <child-component @send-message="sendMessage" ref="child_component"/>
  <div>
    <h2>ParentComponent</h2>
    <p>부모 컴포넌트에서 자식 컴포넌트의 이벤트 직접 발생시키기</p>
  </div>
</template>

<script>
import ChildComponent from "@/components/ChildComponent";
export default {
  name: "ParentComponent", //컴포넌트 이름
  components: {
    ChildComponent
  }, //다른 컴포넌트 사용 시 import(배열로 등록)
  data() { //html과 js코드에서 사용할 데이터 변수 선언
  },
  setup() {
  }, //컴포지션 API
  created() {
  }, //컴포넌트가 생성되면 실행
  mounted() {
    this.$refs.child_component.$refs.btn.click();
  }, //template에 정의된 html 코드가 랜더링된 후 실행
  unmounted() {
  }, //unmount가 완료된 후 실행
  methods: {} //컴포넌트 내에서 사용할 메소드 정의
}
</script>

<style scoped>

</style>