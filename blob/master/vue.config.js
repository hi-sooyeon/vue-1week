const target = 'http://127.0.0.1:3000';

module.exports = {
    chainWebpack: config => {
        config.plugins.delete('prefetch'); // prefetch 삭제
        // prefetch 기능을 삭제해도 Lazy Load 사용 가능
        // 컴포넌트 import 시 아래와 같이 처리
        // import(/* webpackPrefetch: true */ './views/XXX.vue');
    },
    devServer: {
        port: 8080,
        proxy: {
            //proxy 요청을 보낼 api 시작 부분
            '^/api': {
                target,
                changeOrigin: true
            }
        }
    }
}

// Lazy Load (비동기 컴포넌트)
// Vue CLI 통해 빌드 시 소스 코드가 하나의 파일로 합쳐짐
// 프로젝트 규모에 따라 매우 커질 수 있음
// => 이 때문에 사용자가 웹사이트 첫 접속 시, 큰 파일 다운로드로 인한 나쁜 경험 가능
// (물론 페이지가 로드된 이후로는 페이지 전환이 매우 빠르지만)

// Lazy Load는 리소스를 컴포넌트 단위로 분리하여 컴포넌트 혹은 라우터 단위로
// 필요한 것들만 그때 그때 다운받을 수 있게 하는 방법

// * 주의 점 : Lazy Load로 컴포넌트를 import 한 것은 내부적으로 Vue CLI prefetch 기능이 사용되는 것으로
//     미래에 사용될 수 있는 리소스를 캐시에 저장함으로써, 사용자가 path 접근 시 굉장히 빠르게 리소스를 내려 줄 수 있음
//     다만 비동기 컴포넌트로 정의된 모든 리소스를 당장 사용하지 않더라도 캐시에 담는 비용이 발생됨.
//     (별도로 분리된 chunk 파일에 대한 request가 일어나고, 각각의 파일을 다운로드 받아서 캐시에 저장하게 됨)
//     prefetch를 사용하는 것은 렌더링 시간을 줄이기 위해서 인데, 잘못 사용하면 *역효과* 발생 가능.
//     => 또한 Vue CLI에서 prefetch 기능은 default 값 true. (Lazy Load가 적용된 컴포넌트는 모두 prefetch 기능이 적용되어 캐시에 저장됨)

//     # prefetch 사용 > Request 요청 수 증가 (캐시에 리소스 담느냐고)
//     # prefetch 미사용 > 요청 수 훨씬 줄어듬
//     오히려 초기 랜더링은 prefetch 기능을 사용 안하는 것이 더 빨리 로딩됨.
//     하지만 사용하지 않는 것의 단점은 라우트 이동 시 리소스 크기에 따라 화면 전환이 늦을 수 있음

// * 결론 : prefetch 기능을 적절한 곳에 적용하는 고민이 반드시 필요하며, 이를 고려해야 좋은 애플리케이션을 서비스 할 수 있다.

// + : Vue 애플리케이션 개발 시 기본적으로 prefetch 기능을 끄는 것을 권장합니다.
// tip : 사용자가 접속할 가능성이 높은 컴포넌트는 한 번에 다운로드 할 수 있게 설정 / 접속 빈도가 낮은 컴포넌트는 prefetch 적용
//       초기 설계 시 적용한 방법을 그대로 유지하기 보다는, 운영 과정에서 접속 빈도 조사 후 지속적으로 개선해 나가는 것이 좋음