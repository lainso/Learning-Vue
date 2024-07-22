<template>
    <h2>19-父组件数据传递 |props</h2>
    <!-- 父组件 -->
    <PartDataTrains2 notes1="父数据项1" :notes2="message" :num="num" :array="array" :obj="object"/>
    <PartDataTrains3 :obj="object"/>
</template>

<script>
import PartDataTrains2 from './PartDataTrains2.vue';
import PartDataTrains3 from './PartDataTrains3.vue';
export default {
    data() {
        return{
            message:"父数据项2",
            num:19,
            array:["小凌", "小刘", "椰子"],
            object:{
                name:"温馨的小家",
                time:231010
            }
        }
    },
    components:{
        PartDataTrains2,
        PartDataTrains3
    }
}
</script>