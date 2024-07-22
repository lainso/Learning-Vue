<template>
    <!-- 当父级插槽没有内容的时候，将会显示默认值 -->
    <slot name="part1">插槽默认值</slot>
    <p>子组件自定义内容</p>
    <slot name="part2">插槽默认值2</slot>
    
    <!-- 传递数据 -->
    <slot name="part3" :msg="childMsg">插槽默认值3</slot>
</template>

<script>
export default{
    data(){
        return{
            childMsg:"子组件数据"
        }
    }
}
</script>

