import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useChannelStore = defineStore('channel', () => {
    const channelList = ref([])
    // 异步请求数据
    const getList = async () => {
        const {data:{data}} = await axios.get('http://geek.itheima.net/v1_0/channels')
        channelList.value = data.channels
    }
    return {
        channelList,
        getList
    }
})