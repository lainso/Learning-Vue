<template>
<!-- 03-直接修改数据 -->
<!-- 04-开启vite配置 -->
<input type="text" :value="count" @input="e=>count = e.target.value">
</template>
    
<script setup>
import { defineModel } from 'vue';
// 02-定义双向绑定数据
const count = defineModel()
</script>