<template>
<h2>37-vue3组合式API——defineModel</h2>
<p>需要在config中开启功能</p>
<!-- 01-定义v-model，传入需要双向绑定的数据 -->
<Child v-model="count"/>
<p>{{ count }}</p>
</template>

<script setup>
import Child from './vue3defineModelChild.vue'
import { ref } from 'vue';
const count = ref("123456")
</script>