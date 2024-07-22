<template>
    <h2>10-计算属性 |computed</h2>
    <!-- 为了提升代码的可阅读性，在template里面原则上不进行计算 -->
    <p>{{ IsHome }}</p>
</template>

<script>
export default {
    data() {
        return {
            home: {
                name: "温馨的小家",
                member: ["小凌", "小刘", "椰子"]
            }
        }
    },
    // 计算属性，对比method，在不进行表达更改时，其只会计算一次值并存入缓存中，往后使用计算属性时会直接从缓存中获取，而method会在每一次调用时进行计算
    computed:{
        IsHome(){
            return this.home.member.length > 0 ? 'Yes' : 'No'
        }
    }
}
</script>