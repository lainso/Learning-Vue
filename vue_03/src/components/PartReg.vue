<template>
    <h2>18-组件注册</h2>
    <p>所有组件都需要先注册后才能被vue识别并引用<br>
    在 16-组件基础 中，我们使用的时局部注册，即只有在写了import的组件内才能被引用<br>
    除此之外，还可以在main.js中定义全局引用，然后就不需要每次引用都进行import了</p>
    <pre>
=== main.js ===
import { createApp } from 'vue'
import App from './App.vue'
import EmptyPart from './components/EmptyPart.vue'

const app =  createApp(App)

// 在这里进行全局组件注册
app.component("EmptyPart",EmptyPart)

app.mount('#app')

=== xxx.vue ===
《template》
    《EmptyPart/》
《/template》
    </pre>
    <p>全局注册虽然方便，但是使用域会被扩大，不方便维护，所以一般使用局部注册</p>
</template>

<script>
export default{

}
</script>