<template>
    <div>
        <div>name:{{ name }}</div>
        <div>age:{{ age }}</div>
    </div>
</template>

<script setup>
const store = useStore('store1');
const allStore = useStore();

const age = computed(() => {
    return store.state.age
})

const name = computed(() => {
    return allStore.store2.state.name
})

setTimeout(() => {
    store.setAge(20);
    allStore.store2.setName("李四")
}, 1000)

console.log(store, "这是store打印的-------------->");
</script>

<style lang="scss" scoped>
</style>