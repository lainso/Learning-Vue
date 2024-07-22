<template>
    <h3>这里是组件A</h3>
    <p>{{ msg }}</p>
    <button @click="update">更新数据</button><br><br>
</template>

<script>
    export default{
        data(){
            return{
                msg:"记录的旧数据"
            }
        },
        beforeUnmount(){
            console.log("组件A卸载前");
        },
        unmounted(){
            console.log("组件A被卸载了")
        },
        methods:{
            update(){
                this.msg = "记录的新数据"
            }
        }
    }
</script>