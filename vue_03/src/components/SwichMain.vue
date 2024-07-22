<template>
    <h2>24-动态组件 / 组件切换 / 异步加载组件</h2>
    <keep-alive>
        <component :is="nowPart"></component>
    </keep-alive>
    
    <button @click="change">切换组件</button>
    <p>在切换组件的时候，被切换的主键会执行销毁，通过keep-alive关键字，可以阻止这个行为</p>
    <p>此时点击更新数据后两次切换组件，新数据将会被保留，此时mounte生命周期函数内的逻辑将不会被执行</p>
</template>

<script>
import SwichA from './SwichA.vue';
// import SwichB from './SwichB.vue';
// 当项目标胶庞大的时候，异步加载可以提升整体项目性能
import { defineAsyncComponent } from 'vue';
const AsyncB = defineAsyncComponent(()=>{
    import('./SwichB.vue')
})
export default{
    data(){
        return{
            // 注意要使用字符串
            nowPart:"SwichA"
        }
    },
    components:{
        SwichA,
        // SwichB,
        AsyncB
    },
    methods:{
        change(){
            // 注意要使用字符串
            this.nowPart = this.nowPart == "SwichA" ? "SwichB" : "SwichA"
        }
    }
}
</script>