<template>
    <h2>28-vue3组合式API——setup</h2>
    <p>留意控制台，setup的时机比beforeCreate还要早<br>因此获取不到data中的数据，即无法识别this.xxx <br>{{ msg }}</p>
    <button @click="logMsg">控制台输出setup内定义信息</button>
</template>

<script setup>
// setup的时机比beforeCreate还要早
// 因此获取不到data中的数据，即无法识别this.xxx
console.log("28-setup")
const msg = "setup作用：可以定义数据和函数"
const logMsg = () => {
    console.log("28-"+msg)
}
</script>

<script>
export default {
    beforeCreate(){
        console.log("28-beforeCreate")
    }
}
</script>