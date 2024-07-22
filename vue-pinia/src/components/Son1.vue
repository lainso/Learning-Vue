<script setup>
import { useCounterStore } from '../store/counter'
// 08-将useCounterStore取出
const counterStore = useCounterStore()
</script>

<template>
    <h3>子组件1</h3>
    <!-- 09-访问counterStore里面的数据 -->
    <p>Count:{{ counterStore.count }}</p>
    <button @click="counterStore.addCount">增加</button>
</template>

<style scoped></style>
