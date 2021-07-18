<template>
  <PageTitle /> <!-- default 값 -->
  <page-title title="인라인 타이틀을 넣자!" />
  <page-title :title="returnTitle" />
  <hr>
  <BlogPost /> <!-- default 값 -->
  <p>---------------------------</p>
  <blog-post likes="333" likess="444" comment-ids="['a', 'b']" post="{'aa':'bb', 'cc':'dd'}" />
  <p>---------------------------</p>
  <blog-post v-bind="returnBlog" />
  <div>
    <h1>NestedComponent</h1>
  </div>
</template>

<script>
import PageTitle from "@/components/PageTitle";
import BlogPost from "@/components/BlogPost";
export default {
  name: "NestedComponent",
  components: {
    PageTitle,
    BlogPost
  }, //다른 컴포넌트 사용 시 import(배열로 등록)
  data() { //html과 js코드에서 사용할 데이터 변수 선언
    return {
      returnTitle: '리턴 타이틀',
      returnBlog: {
        likes: '777'
      }
    }
  },
  setup() {
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
h1 {
  background-color: pink;
  padding: 3%;
  margin: 1%;
}
hr {
  margin: 2%;
}
</style>