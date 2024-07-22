import { createApp } from 'vue'
import App from './App.vue'
import EmptyPart from './components/EmptyPart.vue'

// app就是vue的实例化对象，整个项目从这里开始执行
// 在一个vue项目中，有且只有一个vue实例对象
// createApp中传入的是 根组件选项，在这里，App.vue就是根组件
const app =  createApp(App)

// 在这里进行全局组件注册
app.component("EmptyPart",EmptyPart)

// 在这里提供全局provide
app.provide("key","这里是main.js中的数据")

// 在完成对App的设置后，需要挂载应用以开始整个项目的运行
// 这里就是挂载了一个id为app的DOM元素，在index.html中可以找到
app.mount('#app')
