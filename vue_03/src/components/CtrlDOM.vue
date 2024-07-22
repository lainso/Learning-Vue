<template>
    <h2>15-直接操作DOM元素 |$refs</h2>
    <!-- 在vue中的大部分场景下，使用{{  }}、：、@ 即可完成对元素的所有操作 -->
    <!-- 但是在某些场景下，我们仍然需要直接操控DOM元素，如document.querySelector -->
    <!-- vue为此提供了解决方案，但仍不建议使用 -->
    <p ref="msg">{{ content }}</p>
    <button @click="getCon">注意控制台</button>
</template>

<script>
export default{
    data(){
        return{
            content:"目标DOM对象"
        }
    },
    methods:{
        getCon(){
            console.log(this.$refs.msg)
            // 直接使用原生JS属性
            this.$refs.msg.innerHTML = '直接操作DOM元素'
        }
    }
}
</script>