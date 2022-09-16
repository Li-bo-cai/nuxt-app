<template>
  <div>
    <el-button type="primary" @click="getPost">点击请求</el-button>
    <div>{{data}}</div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
const { $request } = useNuxtApp()

useAsyncData(() =>
  Promise.all([
    $request('getHotInformation').then((res) => {
      data.value = res.data.news[0].title
    }),
  ])
)
const data = ref('')
onMounted(async () => {})
// 发起请求
const getPost = async () => {
  $request('getHotInformation').then((res) => {
    data.value = res.data.news[0].title
  })
}
</script>

<style lang="scss" scoped>
</style>