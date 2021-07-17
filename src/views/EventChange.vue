<template>
  <div>
    <h1>@change="changeSelect"</h1>
    <select v-model="selectedValue" @change="changeSelect">
      <option value="서울">서울</option>
      <option value="부산">부산</option>
      <option value="제주">제주</option>
    </select>
    <hr>
    <h1>@keyup.enter="submit"</h1>
    <input type="text" v-model="searchValue" @keyup.enter="submit" />
    <h4>Vue에서 자주 사용되는 Key 이벤트</h4>
    <p>.enter .tab .delete(키보드에서 Del키, Backspace키) .esc .space .up .down .left .right</p>
    <h4>Control, Shift, Alt 키와 같이 다른 키와 같이 사용되는 특수 키</h4>
    <p>alt + enter : input @keyup.alt.enter="clear"</p>
    <p>ctrl + click : div @click.ctrl="doSomething">Do something </p>
    <hr>
    <h1></h1>
  </div>
</template>

<script>
export default {
  name: "EventChange", //컴포넌트 이름
  component: {}, //다른 컴포넌트 사용 시 import(배열로 등록)
  data() { //html과 js코드에서 사용할 데이터 변수 선언
    return {
      selectedValue: '',
      searchValue: ''
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
  methods: {
    changeSelect(){
      alert(this.selectedValue);
    },
    submit(){
      alert(this.searchValue);
    }
  } //컴포넌트 내에서 사용할 메소드 정의
}
</script>

<style scoped>
hr {
  margin: 2%;
}
</style>