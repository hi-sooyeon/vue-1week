<template>
  <div>
    <h1>랜더링 문법(v-if, v-show)</h1>
    <h2>v-if :: type의 key-value로 랜더링</h2>
    <h3 v-if="type=='A'">v-if="type=='A'"</h3>
    <h3 v-else-if="type=='B'">v-else-if="type=='B'"</h3>
    <h3 v-else>v-else</h3>
    <hr>
    <h2>v-if :: bRender의 true/false로 렌더링</h2>
    <h3 v-if="bRender">bRender가 true면, 해당 글자가 보입니다. > v-if="bRender"</h3>
    <h3 v-else>bRender가 true가 아니라면, 해당 글자가 보입니다. > v-else</h3>
    <hr>
    <h2>v-show</h2>
    <h3 v-show="bShow">bShow가 true면, 현재 블록이 화면에 보이게 됩니다. v-show="bShow"</h3>
  </div>
  <br>
  <div id="point">
    <h2>v-if와 v-show의 차이점</h2>
    <table>
      <tr>
        <th>v-if</th>
        <th>v-show</th>
      </tr>
      <tr>
        <td>
          <p>조건 만족 시 > 그 순간에 html 블록 생성</p>
          <p>조건 불만족 시 > 그 순간에 html 블록 삭제</p>
        </td>
        <td>
          <p>조건 만족 여부 상관 없이 일단 무조건 html 블록 생성 후</p>
          <p>조건에 따라 보였다, 안보였다 한다.</p>
        </td>
      </tr>
    </table>
    <h3> * 결론 : 해당 html 블록이 화면 내 자주 toggle이 일어나면 => v-show / 빈도가 작다면 v-if</h3>
  </div>
</template>

<script>
export default {
  name: "RenderingVifVshow", //컴포넌트 이름
  component: {}, //다른 컴포넌트 사용 시 import(배열로 등록)
  data() { //html과 js코드에서 사용할 데이터 변수 선언
    return {
      type: 'B',
      bRender: true,
      bShow: true
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
h1 {
  background-color: lavender;
  width: 50%;
  padding: 1%;
  margin: auto;
}
hr {
  margin: 2%;
}
#point {
  padding-top: 5px;
  padding-bottom: 5px;
  width: 70%;
  background-color: gainsboro;
  margin: auto;
}
table {
  width: 100%;
  border: 1px solid black;
}
th, td {
  border: 1px solid black;
}
</style>