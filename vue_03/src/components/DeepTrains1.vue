<template>
    <h2>25-依赖注入（数据多级传递）</h2>
    <p>↓ 这里是高层组件 ↓</p>
    <DeepTrains2/>
</template>

<script>
import DeepTrains2 from './DeepTrains2.vue';
    export default{
        components:{
            DeepTrains2
        },
        data(){
            return{
                msg:"将要传到底层的顶层数据"
            }
        },
        // 通过provide进行依赖注入，只有后代能接收这项数据，且只能由上到下传递
        provide(){
            return{
                msg:this.msg
            }
        }
    }
</script>