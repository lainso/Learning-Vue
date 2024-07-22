<template>
    <h2>11-Class属性绑定 |:class</h2>
    <!-- 由于clss属性的变更比较频繁，vue针对class进行了增强，其值不仅可以为字符串，还可以是对象以及数组 -->

    <!-- 对象 -->
    <p :class="classObj">示例文本</p>

    <!-- 数组 -->
    <p :class="[arrActive,arrDanger]">示例文本</p>

    <!-- 三目运算（建议写到计算属性） -->
    <p :class="[isActive? 'active': '']">示例文本</p>

    <!-- 数组嵌套对象 -->
    <p :class="[isActive? 'active': '', {danger: false}]">示例文本</p>
</template>

<script>
export default {
    data() {
        return {
            classObj: {
                active: true,
                danger: true
            },
            arrActive:"active",
            arrDanger:"danger",
            isActive:true
        }
    }
}
</script>

<style scoped>
.active {
    font-size: larger;
}

.danger {
    color: red;
}
</style>