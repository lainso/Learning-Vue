<template>
    <h4>↓ 这里开始是子组件 ↓</h4>
    <!-- 子组件 -->
    <p>{{ notes1 }} {{ notes2 }}</p>
    <p>{{ num+1 }}</p>
    <ul>
        <li v-for="(item,index) in array" :key="index">{{ item }}</li>
    </ul>
    <p>{{ obj }}<br>{{ obj.name }}<br>{{ obj.time }}</p>
</template>

<script>
export default {
    data() {
        return{

        }
    },
    // 只能从父级传递给子级！
    // props是只读的，尝试修改会修改失败并在控制台报错
    props:["notes1", "notes2","num", "array", "obj"]
}
</script>