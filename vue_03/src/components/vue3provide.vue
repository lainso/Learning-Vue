<template>
    <h2>35-vue3组合式API——provide+inject</h2>
    <h3>顶层组件</h3>
    <vue3mid4provide/>
</template>

<script setup>
import vue3mid4provide from './vue3mid4provide.vue';
import { ref,provide } from 'vue';

// 01-通过provide传递数据到后代组件，支持响应式数据
// 采用key-value的形式
const count = ref(100)
provide("count", count)

// 提供方法给后代修改数据
provide('changeCount',(number)=>{
    count.value = number
})

</script>