<template>
    <h2>14-表单数据绑定 | v-model</h2>
    <!-- 作用：用于实时获取用户输入的值，简化js开发 -->
    <form action="">
        <input type="text" v-model.lazy="username" placeholder="用户名">
        <p>{{ username }}</p>

        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">{{ checked }}</label>
    </form>
    

    <!-- 此外,v-model也支持修饰符，有以下几种 -->
    <!-- v-model.lazy：不实时获取，失去焦点后获取 -->
    <!-- v-model.number：只获取输入的数字，其余输入去除 -->
    <!-- v-model.trim：自动去除输入内容的前后空格 -->
</template>

<script>
export default{
    data(){
        return{
            username:"",
            checked:false
        }
    },
    methods:{
        
    }
}
</script>