<template>
    <h3>↓ 以下是子组件 ↓</h3>
    <!-- 在模板中直接使用即可 -->
    <button @click="useMoney">花钱</button>
    <p>{{ msg }}</p>
    <p>金额：{{ money }}</p>
</template>

<script setup>
// 父传子 02-在子组件中通过props进行接收
// 借助编译器宏
const props = defineProps({
    msg:String,
    money:Number
})

// 在script中需要props.msg
// console.log(props.msg)

// 首先要声明key
const emit = defineEmits(['usingMoney'])
const useMoney = ()=>{
    // 子传父 01-通过编译器宏emit触发事件
    // key-value形式
        emit('usingMoney', 5)
}
</script>