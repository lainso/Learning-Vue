<template>
    <h2>26-组件生命周期</h2>
    <pre>
生命周期函数包括：
    创建：beforeCreate、created
    挂载：beforeMount、mounted
    更新：beforeUpdate、updated
    销毁：beforeUnmount、unmounted

    留意控制台
    </pre>
    <p>{{ msg }}</p>
    <button @click="update">更新数据</button>
    <LifeTimeUse/>
</template>

<script>
import LifeTimeUse from './LifeTimeUse.vue'
    export default{
        data(){
            return{
                msg:"数据更新之前"
            }
        },
        /**
         * 生命周期函数包括：
         *    创建：beforeCreate、created
         *    挂载：beforeMount、mounted
         *    更新：beforeUpdate、updated
         *    销毁：beforeUnmount、unmounted
         */
        beforeCreate(){
            console.log("26-beforeCreate")
        },
        created(){
            console.log("26-created")
        },
        beforeMount(){
            console.log("26-beforeMount")
        },
        mounted(){
            console.log("26-mounted")
        },
        beforeUpdate(){
            console.log("26-beforeUpdate")
        },
        updated(){
            console.log("26-updated")
        },
        beforeUnmount(){
            console.log("26-beforeUnmount")
        },
        unmounted(){
            console.log("26-unmounted")
        },
        methods:{
            update(){
                this.msg = "数据被更新了"
            }
        },
        components:{
            LifeTimeUse
        }
    }
</script>