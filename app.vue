<template>
  <div>
    <NuxtLayout name='custom'>
      <template #header-box>
        <div>首页</div>
        <div>关于</div>
      </template>
      <template #left-sider>
        <div>快速入门</div>
        <div>使用</div>
        <div>目录结构</div>
      </template>
      <template #body-content>
        <NuxtPage></NuxtPage>
      </template>
    </NuxtLayout>
  </div>
</template>

<script>
export default {
  layout: false
}
</script>

<script setup>
import { watch, computed } from 'vue';
const store = useStore('user-uuid');

const uuid = computed(() => {
  return store.state.uuid
})

//在页面
watch(() => uuid, (newValue) => {
  if (process.client) {
    if (!localStorage.getItem('uuid')) {
      localStorage.setItem("uuid", newValue.value);
    }
  }
}, { immediate: true })

</script>

<style>
</style>
