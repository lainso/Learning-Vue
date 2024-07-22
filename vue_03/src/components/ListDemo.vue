<template>
    <h2>05-列表渲染 |v-for</h2>
    <!-- 遍历简单数组 -->
    <div v-for="(name,index) in names">{{ index }}-{{ name }}</div><br>
    
    <!-- 遍历json数组 -->
    <div v-for="item in result">
        <div>{{ item.city }}</div>
    </div><br>

    <!-- 遍历对象 -->
    <div v-for="(value,key,index) of userInfo">{{ index }}-{{ key }}-{{ value }}</div>

    <!-- 优化：当列表元素发生改变的时候，vue都会对所有元素进行重新渲染，这增大了开销 -->
    <!-- 可以通过绑定一个key的属性，对列表元素进行追踪，这样元素就不会每次都重载 -->
    <!-- 推荐使用获取回来的数据的id作为key的值 -->
    <br><div v-for="item in result" :key="item.id">
        <div>{{ item.city }}</div>
    </div><br>
</template>

<script>
export default {
    data() {
        return {
            names: ["小凌", "小刘", "椰子"],
            result: [{
                "id": 1,
                "name": "John Doe",
                "age": 28,
                "city": "New York",
                "occupation": "Software Engineer"
            }, {
                "id": 2,
                "name": "John Kate",
                "age": 23,
                "city": "Beijing",
                "occupation": "Doctor"
            }, {
                "id": 3,
                "name": "John Li",
                "age": 31,
                "city": "Guangzhou",
                "occupation": "Driver"
            }],
            userInfo:{
                "name": "John Doe",
                "age": 28,
                "city": "New York"
            }
        }
    }
}
</script>