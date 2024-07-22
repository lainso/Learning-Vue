<template>
    <h2>13-数据监听器 |watch</h2>
    <p>{{ msg }}</p>
    <button @click="updateMsg">修改数据</button>
</template>

<script>
export default{
    data(){
        return{
            // 监听范围仅于在此return中声明的数据，即响应式数据
            msg:"留意控制台"
        }
    },
    methods:{
        updateMsg(){
            this.msg = "Updated !"
        }
    },
    // 定义监听器
    watch:{
        // 定义一个函数，函数名必须跟data中的定义一致
        // newValue为改变后的数据，oldValue为改变前的数据
        msg(newValue, oldValue){
            // 作用：当数据发生变化时自动执行逻辑
            console.log(newValue + " <---- " + oldValue)
        }
    }
}
</script>