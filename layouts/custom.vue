<template>
  <TheLoading :hidden="!show2"></TheLoading>
  <div class="page-box" :hidden="!show2">
    <div class="header-box">
      <slot name="header-box" />
    </div>
    <div class="body-box">
      <div class="left-sider">
        <slot name="left-sider" />
      </div>
      <div class="body-content">
        <slot name="body-content" />
      </div>
    </div>
  </div>

</template>

<script setup>
import TheLoading from '../components/TheLoading.vue'
const show2 = ref(true)

setTimeout(() => {
  show2.value = false
}, 5000)

setTimeout
</script>
<style>
.page-box {
  display: flex;
  flex-direction: column;
}

.header-box {
  width: 100%;
  height: 100px;
  display: flex;
  background-color: rgb(255, 105, 105);
}

.body-box {
  width: 100%;
  display: flex;
  flex-flow: row;
}

.left-sider {
  width: 400px;
  height: calc(100vh - 100px);
  background: rgb(255, 255, 77);
  overflow: auto;
}

.body-content {
  flex: 1;
  height: calc(100vh - 100px);
  background-color: rgb(172, 172, 255);
  overflow: auto;
}

.sider-content {
  height: 1300px;
  width: 200px;
  background-color: black;
}
</style>