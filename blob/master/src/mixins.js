import axios from 'axios';

export default {
    methods: {
        async $api(url, method, data) {
            return (await axios({
                method: method,
                url,
                data
            }).catch(e => {
                console.log(e);
            })).data;
        }
    }
}

// Mixins 파일 생성
// 다수의 컴포넌트에서 공통으로 사용하는 함수는 mixins에 등록해서 사용해야 함.