<template>
    <div>
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="Hello" name="Hello"></el-tab-pane>
            <el-tab-pane label="Message" name="Message"></el-tab-pane>
            <el-tab-pane label="Post" name="Post"></el-tab-pane>
            <el-tab-pane label="Store" name="Store"></el-tab-pane>
            <el-tab-pane label="Vue" name="Vue"></el-tab-pane>
        </el-tabs>
        <component :is="compname"></component>
    </div>
</template>

<script setup>
const modulesFiles = import.meta.globEager("./*/index.vue")

const getComptModel = (name) => {
    let key = true;
    let pageCmpt = null;
    Object.keys(modulesFiles).forEach((item, index) => {
        if (key && item.indexOf('./' + name + '/') != -1) {
            key = false;
            pageCmpt = item
        }
    })
    return markRaw(modulesFiles[pageCmpt].default)
}

const activeName = ref('Post')

const compname = computed(() => {
    return getComptModel(activeName.value)
});

const handleClick = (tab) => {
    activeName.value = tab.props.name;
}
</script>

<style lang="scss" scoped>
</style>