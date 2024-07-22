<template>
    <h3>底层组件</h3>
    <p>祖宗数据：{{ count }}</p>
    <button @click="change">修改数据</button>
</template>

<script setup>
import { inject } from 'vue';
const count = inject("count")
const changeCount = inject('changeCount')

const change = ()=>[
    changeCount(999)
]
</script>