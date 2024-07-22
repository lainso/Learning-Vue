<template>
    <h2>29-vue3组合式API——reactive | ref</h2>
    <p>vue默认变量是非响应式的，即数据变化不会反映到视图中，需要通过reactive()将其转化</p>
    <p>另外ref也可以进行转化，ref支持简单类型和复杂类型，原理是转化为对象再使用reactive()， <br>script访问数据时需要.value，template不需要，声明数据推荐使用ref</p>
    <!-- <p>现在的计数器为：{{ params.count }}</p> -->
    <p>现在的计数器为：{{ count }}</p>
    <button @click="addCount">计数器+1</button>
</template>

<!-- <script setup>
import { reactive } from 'vue'
// 函数传入的是一个对象
const params = reactive({
    count:0
})

const addCount = ()=>{
    params.count++;
}
</script> -->

<script setup>
import { ref } from 'vue'
const count = ref(0)

const addCount = ()=>{
    count.value++;
}
</script>