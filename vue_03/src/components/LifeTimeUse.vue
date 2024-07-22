<template>
    <h3>↓ 应用 ↓</h3>
    <h5>① 通过mounted函数自动获取DOM元素</h5>
    <p ref="name">椰子</p>
    <h5>② 通过网络请求获取数据</h5>
    <div v-for="(item, key, index) in data" :key="index">{{ key }}：{{ item }}</div>
    <p></p>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            data: []
        }
    },
    mounted() {
        console.log("26-"+this.$refs.name)
        axios.get('http://localhost:8000/api/super/gettoken', {
            // 在请求中设置跨域请求的选项
            withCredentials: true // 允许携带凭证（例如cookies）
        })
            .then(response => {
                // 处理成功的响应
                this.data = response.data
                console.log("26-"+response.data)
            })
            .catch(error => {
                // 处理请求错误
                console.error("26-"+error);
                console.error("26-首先要启动zero后台")
            });
    }
}
</script>