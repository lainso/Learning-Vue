<template>
    <h2>04-条件渲染 |v-if v-else v-else-if</h2>
    <div v-if="flag">条件为真时显示</div>
    <div v-else>条件为假时显示</div>
    <!-- v-if会在页面中添加和移除DOM元素 -->
    <br>
    <div v-show="flag">条件为真时显示</div>
    <!-- v-show使用的是display:none -->
    <!-- 适合频繁切换 -->
    <br>
    <div v-if="type === 'A'">type为A</div>
    <div v-else-if="type === 'B'">type为B</div>
    <div v-else-if="type === 'C'">type为C</div>
    <div v-else>type不为ABC</div>
</template>

<script>
    export default{
        data(){
            return{
                flag: false,
                type: "D"
            }
        }
    }
</script>