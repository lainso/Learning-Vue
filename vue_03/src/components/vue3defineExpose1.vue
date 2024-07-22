<template>
    <h2>34-vue3组合式API——模板引用（获取DOM或组件）</h2>
    <!-- 02-通过ref标识进行绑定 -->
    <input type="text" ref="textInput">
    <button @click="fillInput">填充输入框</button><br><br>
    <NewAttr9Vue ref="part"/>
    <button @click="getPart">获取组件</button>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import NewAttr9Vue from './vue3defineExpose2.vue';

// 01-调用ref函数，生成ref对象
const textInput = ref(null)


// 03-渲染完成后，通过ref.value访问绑定元素
onMounted(()=>{
    console.log(textInput.value)
})

const fillInput = ()=>{
    textInput.value.value = "椰子"
}

// --------------------------------------------------
const part = ref(null)
const getPart = ()=>{
    console.log(part.value.count)
    part.value.sayHi()
}
</script>