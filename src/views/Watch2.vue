<template>
  <h1>Full Name : {{fullName}}</h1>
  <button type="button" @click="changeName">변경</button>
  <p>Vue 컴포넌트를 실행하면 처음에는 fullName이 보이지 않지만 버튼을 클릭 시</p>
  <p>firstName 변경으로 인해 Watch가 실행되고, firstName 함수를 통해 fullName이 갱신된다.</p>
  <hr>
  <h3>* 결론 *</h3>
  <p>computed : 정의된 데이터 값을 바탕으로 세로운 데이터 값을 생성하고, 새로운 데이터 값에서 참조하고 있는 기존 데이터 값의 변경을 감지.</p>
  <p>watch : 초기에 할당된 값에서 변경이 발생되어야 watch에 정의한 함수를 실행.</p>
  <div>
    computed는 변경이 있고, 그 변경으로 인한 결과가 필요할 때 사용(property라는 느낌이 강함)<br>
    watch는 트리거의 역할로 사용된다.(값의 변경이 있고 그 변경의 결과에 따라 다른 메소드 등을 호출할 때 사용)<br>
    <br>
    computed의 사용 예)<br>
    data의 값을 대문자로 보여주고 싶을때<br>
    a data와 b data를 결합해서 보여주고 싶을때<br>
    <br>
    watch의 사용 예)<br>
    특정 값이 변경되었을때 axios같은 비동기 통신이나 복잡한 처리, 동작 등을 넣고 싶을때 주로 사용<br>
    다른 data의 값을 변경할때(this.xx = 'yy',push)<br>
  </div>
</template>

<script>
export default {
  name: "Watch", //컴포넌트 이름
  component: {}, //다른 컴포넌트 사용 시 import(배열로 등록)
  data() { //html과 js코드에서 사용할 데이터 변수 선언
    return {
      firstName: 'First',
      lastName: 'Kim',
      fullName: '버튼 누르기 전'
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
    changeName(){
      this.firstName = 'Sooyeon'
    }
  }, //컴포넌트 내에서 사용할 메소드 정의
  watch: {
    firstName() {
      this.fullName = this.firstName + ' ' + this.lastName;
    },
    lastName() {
      this.fullName = this.firstName + ' ' + this.lastName;
    }
  }
}
</script>

<style scoped>
hr {
  margin: 2%;
}
</style>