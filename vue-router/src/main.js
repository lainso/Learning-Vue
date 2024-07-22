import { createApp } from 'vue'
import App from './App.vue'

// 引入路由
import router from './router'

// 安装路由
createApp(App).use(router).mount('#app')