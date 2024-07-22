<script setup>
import Son1 from './Son1.vue';
import Son2 from './Son2.vue';
import { useCounterStore } from '../store/counter'
import { storeToRefs } from 'pinia'
// 08-将useCounterStore取出
const counterStore = useCounterStore()

// 解构数据会使得响应式丢失，不能这样写👇，但是方法可以直接解构
// const {count, name} = counterStore
// 正确方法：
const { name } = storeToRefs(counterStore)

import { useChannelStore } from '../store/channel'
const ChannelStore = useChannelStore()
</script>

<template>
    <h2>根组件</h2>
    <!-- 09-访问counterStore里面的数据 -->
    <p>Name:{{ name }}</p>
    <p>椰子在吗：{{ counterStore.judgeYe }}</p>
    <Son1 />
    <Son2 />
    <hr>
    <ul>
        <li v-for="item in ChannelStore.channelList" :key="item.id">{{ item.name }}</li>
    </ul>
    <button @click="ChannelStore.getList">获取数据</button>
    <hr>

    <p>作用：管理维护<span class="im">全局</span>数据，使得数据保持一致性，提高可维护性</p>
    <h2>01-安装 & 配置</h2>
    <p>cnpm install pinia</p>
    <p>
        切换到main.js并修改：<br>
    <pre>
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
    </pre>
    </p>

    <h2>02-Store</h2>
    <p>可以理解为项目数据的一个共享区域，下分为三个与vue类似的概念：<br>
        state---data <br>
        getter---computed <br>
        action---methods <br></p>
    <p>Store应用场景：显示在导航栏的用户信息，需要页面保存的数据等</p>
    <p>使用方法：<br>
        01-创建/src/store/xxx.js并编辑<br>
        02-在需要使用Store的组件中引入并使用</p>
</template>

<style scoped>
.im {
    color: red;
}
</style>
