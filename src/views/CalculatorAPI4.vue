<template>
  <div>
    <h2>CalculatorAPI4</h2>
    <div>
      <input type="text" v-model="num1" />
      <span> + </span>
      <input type="text" v-model="num2" />
      <span> = </span>
      <span>{{result}}</span>
    </div>
  </div>
</template>

<script>
import {plusCalculator} from "@/calculator";
import {onMounted} from "vue";

export default {
  name: "Calculator", //컴포넌트 이름
  components: {}, //다른 컴포넌트 사용 시 import(배열로 등록)
  setup() {
    //mounted
    onMounted(() => {
      console.log('Component is mounted!')
    });
    let {num1, num2, result} = plusCalculator();
    return {
      num1, num2, result
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