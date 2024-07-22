<template>
    <!-- 搜索子组件，用于传递数据到EventWithVmodel父组件 -->
    <p>↓ 这里是子组件 ↓</p>
    <input type="text" v-model="search" placeholder="搜索框">
</template>

<script>
export default{
    data(){
        return{
            search:""
        }
    },
    watch:{
        search(newValue,oldValue){
            this.$emit("keyPass",newValue)
        }
    },
    emits:["keyPass"]
}
</script>