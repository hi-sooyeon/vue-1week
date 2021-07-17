<template>
  <div>
    <p>v-on:click="메소드명" | @click="메소드명"</p>
    <h1>The counter is : {{counter}} </h1>
    <hr>
    <button type="button" @click="increaseCounter">Add 1</button>
    <hr>
    <h4>클릭 이벤트를 통해 지정된 함수로 파라미터를 전달</h4>
    <p></p>
    <button type="button" @click="setCount(7)">@click="setCount(7)"</button>
    <hr>
    <h4>클릭 이벤트 발생 시 여러 개의 함수 호출</h4>
    <button type="button" @click="one(), two()">@click="one(), two()"</button>
  </div>
</template>

<script>
export default {
  name: "EventClick", //컴포넌트 이름
  component: {}, //다른 컴포넌트 사용 시 import(배열로 등록)
  data() { //html과 js코드에서 사용할 데이터 변수 선언
    return {
      counter: 0
    };
  },
  methods: {
    increaseCounter(){
      this.counter = this.counter + 1;
    },
    setCount(counter){
      this.counter = counter;
    },
    one(){
      alert('One');
    },
    two(){
      alert('Two');
    }
  }
}
</script>

<style scoped>
hr {
  margin: 2%;
}
</style>