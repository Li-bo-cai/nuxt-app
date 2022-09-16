import ElementPlus from 'element-plus'
import request from '../api';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(ElementPlus);
    nuxtApp.vueApp.config.globalProperties.$http = request;
    nuxtApp.vueApp.config.globalProperties.$store = useStore('vuex')
})