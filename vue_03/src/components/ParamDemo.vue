<template>
    <h2>07-事件参数传递</h2>
    <button @click="showInfo('Hello')">传递“Hello”</button>
    <br><br>
    <!-- 将遍历出来的结果作为参数传递到处理函数中 -->
    <!-- 此时仍然可以获取JS的原生event对象，作为第二个参数进行传递 -->
    <button @click="showName(name,$event)" v-for="(name,index) in names" :key="index">
        {{ name }}
    </button>
</template>

<script>
    export default{
        data(){
            return{
                count:0,
                names:["小凌","小刘","椰子"]
            }
        },
        // 定义函数
        methods:{
            showInfo(msg){
                alert(msg)
            },
            showName(name,event){
                alert(name)
                event.target.innerHTML = name + " 被点过了"
            }
        }
    }
</script>