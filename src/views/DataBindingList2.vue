<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>배송료</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(product,i) in productList">
          <td>{{product.product_name}}</td>
          <td>{{product.price}}</td>
          <td>{{product.category}}</td>
          <td>{{product.delivery_price}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "DataBindingList", //컴포넌트 이름
  component: {}, //다른 컴포넌트 사용 시 import(배열로 등록)
  data() { //html과 js코드에서 사용할 데이터 변수 선언
    return {
      productList: []
    };
  },
  setup() {
  }, //컴포지션 API
  created() {
    this.getList();
  }, //컴포넌트가 생성되면 실행
  mounted() {
  }, //template에 정의된 html 코드가 랜더링된 후 실행
  unmounted() {
  }, //unmount가 완료된 후 실행
  methods: {
    async getList(){
      this.productList = await this.$api("https://07fe77c7-ab17-49c0-880a-94e1e6627b73.mock.pstmn.io/list","get");
    }
  } //컴포넌트 내에서 사용할 메소드 정의
}
</script>

<style scoped>
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 80%;
    margin: auto;
  }
  td, th {
    border: 1px solid black;
    text-align: left;
    padding: 8px;
  }
</style>