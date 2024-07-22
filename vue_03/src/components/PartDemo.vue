<template>
    <h2>16-组件基础</h2>
    <p>其实就是.vue文件</p>
    <p>使用方法：<br>1-编写.vue文件
        <br>2-在App.vue 中 import PartDemo from './components/PartDemo.vue'<br>
        3-在script标签内注入组件:
    <pre style="font-size: 15px;">
export default{
    components:{
        PartDemo
    }
}
    </pre><br>4-在template中显示组件
    </p>
</template>

<script>
export default {

}
</script>

<style scoped>
/* scoped表示此样式仅在组件内生效，否则将会成为全局样式 */
</style>