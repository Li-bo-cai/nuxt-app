import { reactive } from "vue";

const appStore = {}

const modulesFiles = import.meta.globEager("./modules/*.js")

Object.keys(modulesFiles).map((modulePath, index) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1').substring(8)
    const value = modulesFiles[modulePath]
    appStore[moduleName] = value.default
})

export const useStore = (moduleName) => {
    return moduleName ? reactive(appStore[moduleName]) : reactive(appStore)
}