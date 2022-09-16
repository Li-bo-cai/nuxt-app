<template>
    <div>
        你好，我是MessageTest
    </div>
</template>

<script setup>
const route = useRoute()
useHead({
    title: "这是test1页面",
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    meta: [
        { name: 'description', content: '信我者生' }
    ],
    bodyAttrs: {
        class: 'test'
    }
})
</script>

<style lang="scss" scoped>
</style>