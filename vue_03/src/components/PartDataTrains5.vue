<template>
    <!-- 子组件 -->
    <p>↓ 这里是子组件 ↓</p>
    <button @click="dataTrains">传递数据</button>
</template>

<script>
export default {
    data(){
        return{
            msg:"这是子组件里的数据"
        }
    },
    methods:{
        dataTrains(){
            // 01-自定义事件
            this.$emit("passEvents",this.msg)
        }
    },
    emits:["passEvents"]
}
</script>