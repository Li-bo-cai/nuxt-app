<template>
  <div>
    <NuxtLink to="../Message">跳转到test1</NuxtLink>
    <el-button type="primary" @click="jumpTo">点击跳转到test1</el-button>
    <TheLoading />
  </div>
</template>

<script setup>
const router = useRouter()
const counter = useCookie('counter')
counter.value = '张三，李四，王麻子'

// useStore('vuex').commit('$uStore', {
//   name: 'lbc',
//   value: false,
// })

const store2 = useStore('vuex')

// store2.commit('$uStore', {
//   name: 'lbc',
//   value: '123456',
// })

console.log(store2.state.lbc, '--------------------->4564645')

const store = useStore('store1')
store.setAge(18)

const jumpTo = () => {
  router.push({
    path: '../Message',
    query: {
      name: '张三',
      age: 18,
    },
  })
}
</script>

<style lang="scss" scoped>
</style>