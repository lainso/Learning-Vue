<template>
    <h2>21-组件事件 + v-model</h2>
    <p>↓ 这里是父组件 ↓</p>
    <p>搜索内容为：{{ searchKey }}</p>
    <Search @keyPass="doSearch"/>
</template>

<script>
import Search from './Search.vue';
export default{
    data(){
        return{
            searchKey:""
        }
    },
    methods:{
        doSearch(data){
            this.searchKey = data
        }
    },
    components:{
        Search
    }
}
</script>