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
      productList: [
        {"product_name":"기계식키보드","price":25000,"category":"노트북/태블릿","delivery_price":5000},
        {"product_name":"무선마우스","price":12000,"category":"노트북/태블릿","delivery_price":3000},
        {"product_name":"아이패드","price":725000,"category":"노트북/태블릿","delivery_price":0},
        {"product_name":"태블릿거치대","price":32000,"category":"노트북/태블릿","delivery_price":2500},
        {"product_name":"무선충전기","price":42000,"category":"노트북/태블릿","delivery_price":2500}
      ]
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