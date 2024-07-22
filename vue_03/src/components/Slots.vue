<template>
    <h2>27-Slots插槽</h2>
    <p>作用：传递整段的HTML代码到子组件中</p>

    <Slots1>
        <!-- 在这里可以指定一个v-slot，可以简写为#,目的是为片段增加一个名字，在子组件中可根据name对片段进行群渲染 -->
        <template #part1>
            <div>
                <h3>插槽标题</h3>
            </div>
        </template>
        <!-- 当使用了v-slot进行分隔后,子组件就可以在插槽之间增添自定义的内容,这样的插槽叫具名插槽 -->
        <template #part2>
            <div>
                <p>{{ slotMsg }}</p>
            </div>
        </template>
        <!-- 有时候插槽需要从子组件中获取数据并渲染到插槽里面,这时候则需要先从子组件中传递数据到父组件这里,在父组件完成逻辑后再把整个插槽传递回子组件中 -->
        <template #part3="SlotObject">
            <p>{{ parentMsg }}-{{ SlotObject.msg }}</p>
        </template>
    </Slots1>

</template>

<script>
import Slots1 from './Slots1.vue'
export default {
    data() {
        return {
            slotMsg: "插槽内容",
            parentMsg:"父组件数据"
        }
    },
    components: {
        Slots1
    }
}
</script>