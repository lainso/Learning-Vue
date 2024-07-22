<template>
    <h2>33-vue3组合式API——父子通信 props | emit</h2>
    <h3>↓ 以下是父组件 ↓</h3>
    <button @click="changeMsg">修改父信息</button><span>----</span>
    <button @click="getMoney">挣钱</button>
    <!-- 子传父 02-定义监听事件 -->
    <NewAttr7 :msg="fatherMsg" :money="money" @usingMoney="using"/>
</template>

<script setup>
// 父传子 01-在父组件中以添加属性的方法给子组件传值
import NewAttr7 from './vue3props2.vue';
import { ref } from 'vue';

const fatherMsg = ref("父组件信息")
const money = ref(100)

const changeMsg = ()=>{
    fatherMsg.value = "修改后父组件信息"
}

const getMoney = ()=>{
    money.value+=10
}

// 子传父 03-定义监听事件逻辑
const using=()=>{
    money.value-=5
}
</script>