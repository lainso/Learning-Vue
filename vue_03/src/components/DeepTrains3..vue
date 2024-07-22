<template>
    <p>↓ 这里是底层组件 ↓</p>
    <p style="color: green;">{{ fullMsg }}</p>
    <p>除此之外，还可以在main.js中定义全局provide，以实现整个项目的获取</p>
    <pre>
=== main.js ===

import { createApp } from 'vue'
import App from './App.vue'
import EmptyPart from './components/EmptyPart.vue'

const app =  createApp(App)

// 在这里进行全局组件注册
app.component("EmptyPart",EmptyPart)

// 在这里提供全局provide
app.provide("key","value")

app.mount('#app')
    </pre>
    <p>{{ key }}</p>
</template>

<script>
    export default{
        inject:["msg", "key"],
        data(){
            return{
                fullMsg:this.msg + '!!!!'
            }
        }
    }
</script>