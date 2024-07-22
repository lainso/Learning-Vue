<template>
    <h2>20-子组件数据传递（组件事件） |$emit</h2>
    <!-- 父组件 -->
    <p>↓ 这里是父组件 ↓</p>
    <p>{{ msg }}</p>

    <!-- 02-声明子组件定义的函数 -->
    <PartDataTrains5 @passEvents="dealEvent"/>
</template>

<script>
import PartDataTrains5 from './PartDataTrains5.vue';
export default {
    data(){
        return{
            msg:"这里是父组件里的数据"
        }
    },
    components:{
        PartDataTrains5
    },
    methods:{
        // 03-实现子组件定义函数
        dealEvent(data){
            this.msg = data
        }
    }
}
</script>