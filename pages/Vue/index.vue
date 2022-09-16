<template>
  <div>
    我是vue2写的
    <button @click="btn">点击</button>
  </div>
</template>

<script>
export default {
  data() {},
  created() {
    useAsyncData(() => {
      console.log(this.$store.state.lbc, '------------------->我是vue2this')
      const store = useStore('store1')
      console.log(store, '这是store打印的-------------->')
    })
  },
  mounted() {
    const store = useStore('store1')
    console.log(store, '这是store打印的-------------->')
    console.log(this, '------------------->我是vue2this')
  },
  methods: {
    btn() {
      console.log('执行了')
      this.$store.commit('$uStore', {
        name: 'lbc',
        value: 456464554654654654,
      })
    },
  },
}
</script>

<style scoped>
</style>