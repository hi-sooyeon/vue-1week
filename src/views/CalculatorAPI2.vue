<template>
  <div>
    <h2>CalculatorAPI2</h2>
    <div>
      <input type="text" v-model="state.num1" @keyup="plusNumbers" />
      <span> + </span>
      <input type="text" v-model="state.num2" @keyup="plusNumbers" />
      <span> = </span>
      <span>{{state.result}}</span>
    </div>
  </div>
</template>

<script>
import {reactive, computed} from 'vue';
export default {
  name: "Calculator", //컴포넌트 이름
  components: {}, //다른 컴포넌트 사용 시 import(배열로 등록)
  data() { //html과 js코드에서 사용할 데이터 변수 선언
    return {
    };
  },
  setup() {
    let state = reactive({
      num1: 0,
      num2: 0,
      result: computed(() => parseInt(state.num1) + parseInt(state.num2))
          //computed를 이용해서 num1, num2 변경 발생 시 즉시 result로 반환
    });
    return {
      state
    }
  }, //컴포지션 API
  created() {
  }, //컴포넌트가 생성되면 실행
  mounted() {
  }, //template에 정의된 html 코드가 랜더링된 후 실행
  unmounted() {
  }, //unmount가 완료된 후 실행
  methods: {
  } //컴포넌트 내에서 사용할 메소드 정의
}
</script>

<style scoped>

</style>