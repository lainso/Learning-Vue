<template>
    <h2>32-vue3组合式API——生命周期函数</h2>
    <p>beforeCreate | created >>>> setup  <br>
        其余函数 >>>> 在前面加on</p>
</template>

<script setup>
import { onMounted } from 'vue';

// beforeCreate、created直接定义
const getData = ()=>{
    setTimeout(()=>{
        console.log('32-data gotten!')
    },2000)
}
getData()

// beforeMount、mounted、beforeUpdate、updated、beforeUnmount、unmounted
// 好处：可以多次调用，逻辑清晰，不必全部放在一起
onMounted(()=>{
    console.log("32-onMounted")
})
</script>