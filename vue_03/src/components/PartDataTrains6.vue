<template>
    <h2>22-子组件数据传递 |props</h2>
    <p>总体思想：通过props传递函数，函数通过携带参数传递数据</p>
    <p>↓ 这里是父组件 ↓</p>
    <p>{{ sonData }}</p>
    <PartDataTrains7 :notes="note1" :toSon="passData"/>
</template>

<script>
import PartDataTrains7 from './PartDataTrains7.vue';
export default {
    data(){
        return{
            note1:"父数据",
            sonData:""
        }
    },
    components:{
        PartDataTrains7
    },
    methods:{
        passData(data){
            this.sonData = data
        }
    }
}
</script>