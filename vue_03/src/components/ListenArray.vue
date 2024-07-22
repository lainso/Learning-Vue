<template>
    <h2>09-监听数组变化</h2>
    <ul>
        <li v-for="(name, index) in names" :key="index">{{ name }}</li>
    </ul>
    <button @click="addList">增加列表元素</button><br><br>
    <button @click="conList">合并列表元素</button>
</template>

<script>
export default {
    data() {
        return {
            names: ["小凌", "小刘", "椰子"]
        }
    },
    methods: {
        addList() {
            // 添加元素，UI自动更新:push,pop,shift,unshift,splice,sort,reverse
            // 改变原数组
            this.names.push("猫猫")
        },
        conList() {
            // 合并数组，UI不会自动更新:filter,concat,slice
            // 不改变原数组
            this.names.concat(["猫猫"])
            // 更新UI的写法
            this.names = this.names.concat(["猫猫"])
        }
    }
}
</script>