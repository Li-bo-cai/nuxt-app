import { defineNuxtConfig } from 'nuxt'
import env from './env'

console.log(env[process.env.NODE_ENV].API_URL);

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    head: {
        charset: "utf-8",
        viewport: "width=device-width, initial-scale=1",
        meta: [
            { name: 'viewport', content: '信我者生' }
        ],
        link: [],
    },
    env: {
        NODE_ENV: env[process.env.NODE_ENV].NODE_ENV,
        API_URL: env[process.env.NODE_ENV].API_URL,
    },
    //css
    css: ["~/assets/scss/index.scss", "element-plus/dist/index.css"],
    // build
    build: {
        // transpile: lifecycle === "build" ? ["element-plus"] : [],
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    },
    plugins: [
        // { src: '~/plugins/wangEditor.client.js', mode: 'client' },
    ],
    loading: false, //顶部loading状态
    // loadingIndicator:'',
    // build modules
    // buildModules: ["nuxt-windicss"],
    modules: [

    ]
});