<template>
    测试组件-{{ count }}
</template>

<script setup>
    const count = 999
    const sayHi = ()=>{
        alert("hello!")
    }
    // 对外暴露，使得父组件得以访问到
    defineExpose({
        count,
        sayHi
    })
</script>