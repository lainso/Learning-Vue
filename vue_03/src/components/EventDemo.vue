<template>
    <h2>06-事件监听处理 |@</h2>
    <button @click="count++">内联：数字加一</button>
    <br><br>
    <button @click="addCount">函数：数字加一</button>
    <p>现在值为：{{ count }}</p>
</template>

<script>
    export default{
        data(){
            return{
                count:0
            }
        },
        // 定义函数
        methods:{
            addCount(e){
                // data里面的数据使用this获取
                this.count++

                // e就是JS原生的event对象
                e.target.innerHTML = this.count
            }
        }
    }
</script>