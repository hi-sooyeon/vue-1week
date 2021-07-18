<template>
  <div>{{ likes }}</div>
  <div>{{ likess }}</div>
  <div>{{ isPublished }}</div>
  <div>{{ commentIds }}</div>
  <div>{{ post }}</div>
  <div>{{ post.id }}</div>
  <div>{{ post.message }}</div>
</template>

<script>
export default {
  name: "BlogPost", //컴포넌트 이름
  components: {}, //다른 컴포넌트 사용 시 import(배열로 등록)
  data() { //html과 js코드에서 사용할 데이터 변수 선언
  },
  setup() {
  }, //컴포지션 API
  created() {
  }, //컴포넌트가 생성되면 실행
  mounted() {
  }, //template에 정의된 html 코드가 랜더링된 후 실행
  unmounted() {
  }, //unmount가 완료된 후 실행
  methods: {}, //컴포넌트 내에서 사용할 메소드 정의
  props: {
    likes: {
      type: String,
      default: "12345"
    },
    likess: {
      type: Number,
      default: 98765
    },
    isPublished: {
      type: Boolean,
      default: true
    },
    commentIds: {
      type: Array,
      default:() => [111, 222, 333]
    },
    post: {
      type: Object,
      default:() => {
        return {
          message : 'hello vue.js :D',
          id : 'hi-sooyeon'
        }
      }
    },
  }
}
</script>

<style scoped>

</style>