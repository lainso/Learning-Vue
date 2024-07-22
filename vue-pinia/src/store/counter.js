// 01-导包
import { defineStore } from 'pinia'
import { ref,computed } from 'vue'

// 02-定义Store
// defineStore(【唯一标识】,()=>{ ... })
export const useCounterStore = defineStore('counter', () => {
    // ---------------------以下是维护count------------------
    // 03-声明数据 state ==> data
    const count = ref(0)
    // 04-声明数据的操作方法 actions ==> methods
    const addCount = () => {
        count.value++
    }
    const subCount = () => {
        count.value--
    }

    // ---------------------以下是维护name------------------
    const name = ref('椰子')

    // 05-声明基于数据派生的计算属性 getters ==> computed
    const judgeYe = computed(() => {
        return name.value === '椰子' ? '在' : '不在'
    })
    
    // 06-返回需要暴露的数据以及方法
    return {
        count,
        addCount,
        subCount,

        name,
        judgeYe
    }
},
{
    // 开启默认数据持久化，数据的变更将会被保留
    // 原理：使用h5的localStorage
    // persist: true
    // 开启自定义数据持久化设置
    persist: {
        // 自定义localStorage的key
        key: 'lains-counter',
        // 设置为sessionStorage进行存储
        storage:sessionStorage,
        // 设置需要持久化的内容，默认为所有数据持久化
        paths:['count']
        // 官网查看更多配置：https://prazdevs.github.io/pinia-plugin-persistedstate/zh/
    }
})

// 07-在组件中使用，以App.vue为例