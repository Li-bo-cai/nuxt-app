import { computed, toRefs } from 'vue';
import env from '../env'

// 获取当前环境
const API_URL = env[process.env.NODE_ENV].API_URL
const store = useStore('user-token');
store.setToken("hfkhjkhjkshjksdhfjkshkj");

const { token, isLogin } = toRefs(store.state)

const Ax = {
    get(
        url,
        params,
        selfHeader = {
            "Content-Type": "application/json"
        }
    ) {
        if (params) {
            let paramsArray = [];
            //拼接参数
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
        }
        return server(API_URL + url, { method: 'GET', headers: selfHeader })
    },
    post(url, params, selfHeader) {
        return server(API_URL + url, { method: "POST", headers: selfHeader, body: JSON.stringify(params) })
    }
}
//类似请求拦截
function server(url, options) {
    console.log(options, '---------------->');
    return new Promise(async (resolve, reject) => {
        if (store.state.token) options.headers.Authorization = `Bearer${store.state.token}`
        await fetch(url, options).then((res) => {
            if (res.status == 200) {
                return res.text()
            } else {
                reject("当前请求错误")
            }
        }).then(res => {
            let data = JSON.parse(res)
            resolve(showView(data))

        })
    })
}
//类似响应拦截
function showView(data) {
    if (data.code == 1) {
        store.setToken("helloli")
        console.log(token.value);
        // navigateTo('/Message')
    } else if (data.code == 44455) {
        if (isLogin) {//手动触发，不提示错误信息
            // locStorage('userInfo', '');
            store.commit('$uStore', {
                name: 'userInfo',
                value: ''
            });
            // router.replace('/');
        } else {
            ElMessage({
                message: res.data.message,
                type: 'error',
            })
            // locStorage('userInfo', '');
            store.commit('$uStore', {
                name: 'userInfo',
                value: ''
            });
            router.replace('/');
        }
    } else if (data.code == 402 || code == 401) {
        // locStorage('userInfo', '');
        store.commit('$uStore', {
            name: 'userInfo',
            value: ''
        });
        // router.replace('/');
    } else if (data.code == 403) {
        // locStorage('err', { info: res.data.data.freeze_reason, times: res.data.data.unfreeze_time });

    } else if (data.code == 80003 || code == 80012) {
        // router.replace('/onu0sf');

    }
    return data
}

export default Ax