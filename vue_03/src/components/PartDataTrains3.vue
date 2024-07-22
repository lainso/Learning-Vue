<template>
    <h4>↓ 子组件验证数据类型 ↓</h4>
    <!-- 子组件 -->
    <p>{{ obj }}<br>{{ obj.name }}<br>{{ obj.time }}</p>
    <ul>
        <li v-for="(name,index) in names" :key="index">{{ name }}</li>
    </ul>
</template>

<script>
export default {
    data() {
        return{

        }
    },
    // props还可以对传入的数据类型进行验证，如果不符合将在控制台警告
    props:{
        obj:{
            // 不符合，控制台会报警告，可以包含多种类型
            type:[String,Array,Number]
        },
        names:{
            type:Array,
            // 当父组件没有传递数据时，这里提供默认项，以不至于空白
            default(){
                return ["椰子"]
            },
            // 要求传递，要是不传递将在控制台报警告
            required:true
        }
    }
}
</script>