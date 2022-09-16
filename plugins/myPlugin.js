import request from '../api/index'
import md5 from 'js-md5';

const store = useStore('user-uuid')
console.log('user-uuid-------------------------->', store);

export default defineNuxtPlugin((nuxtApp) => {

    nuxtApp.vueApp.config.errorHandler = (error, context) => {
        console.log(error, context, "报错提示");
    }

    let uuid = useCookie('uuid');
    if (!uuid.value) {
        if (process.client) {    // 判断本地是否存在uuid  有就取值   没有才去创建
            if (localStorage.getItem("uuid")) {
                uuid.value = localStorage.getItem("uuid")
                console.log("我执行了");
            } else {
                uuid.value = guid();
                localStorage.setItem("uuid", uuid.value);
            }
        }
    }
    store.setUuid(uuid.value)

    return {
        provide: {
            uuid: uuid.value,
            request: request({
                "useruniqueid": `${uuid.value}.${md5(uuid.value + '.@sd.#s$')}`
            }),
        }
    }
})

function guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}