import { createApp } from 'vue'
import App from './App.vue'
import router from './router' //router 폴더의 index.js import
import mixins from "../blob/master/src/mixins"

createApp(App).use(router).mixin(mixins).mount('#app')

// createApp(App) > 최상위 컴포넌트인 App.vue를 app으로 생성
// use(router) > App.vue에서 라우터 사용될 수 있도록 추가
// mixin(mixins) > 프로젝트 공통 함수 등록하는 곳
// mount('#app') > App.vue를 public 폴더의 index.html에 정의되어 있는 id="app" html element에 마운트