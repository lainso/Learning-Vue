<template>
    <p>↓ 这里是子组件 ↓</p>
    <p>{{ notes }}</p>
    <p>{{ toSon(sonData) }}</p>
</template>

<script>

export default {
    data(){
        return{
            sonData:"子数据"
        }
    },
    props:{
        notes:String,
        toSon:Function
    }
}
</script>