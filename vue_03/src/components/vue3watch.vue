<template>
    <h2>31-vue3组合式API——watch</h2>
    <p>注意控制台</p>
    <p>{{ count }}</p>
    <button @click="changeCount">修改数字</button>
    <p>{{ name }}</p>
    <button @click="changeName">修改名字</button>
    <p>{{ Userinfo }}</p>
    <button @click="changeInfo">修改信息</button>
</template>

<script setup>
import { ref, watch } from 'vue'
const count = ref(0)
const name = ref("椰子")

const changeCount = () => {
    count.value++
}

const changeName = () => {
    name.value = "小刘"
}

const Userinfo = ref({
    name: "小凌",
    age: 23
})
const changeInfo = () => {
    Userinfo.value.age++
}

// 监视单个数据变化
// watch(count,(newValue, oldValue)=>{
//     console.log(newValue + " <----- " + oldValue);
// })

// 监视多个数据的变化
watch([count, name], (newArray, oldArray) => {
    console.log(newArray + " <----- " + oldArray)
}, {
    // 表示一进页面就开始监视，即数据仍为undefined的时候就开始监视
    immediate: false,
}
)

watch(Userinfo, (newInfo) => {
    console.log(newInfo)
}, {
    // 在ref传入复杂对象的时候，watch会失效，此时需要加入deep以生效配置，但此时对象的所有变化都会触发监听
    deep: true
})

// 在不开启deep的情况下只监听对象内的指定一个数据
watch(
    ()=>Userinfo.value.age,
    (newValue, oldValue)=>console.log(newValue + " <----- " + oldValue)
)

</script>