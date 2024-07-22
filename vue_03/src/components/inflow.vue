<template>
    <!-- 自动添加class -->
    <div>
        <h2>23-透传属性</h2>
        <p>在实现组件的时候，可以定义一个class、id、style到组件中，当这个组件只有唯一的一个根元素时，这个class会被自动添加到根节点中。留意此处的div容器。</p>
    </div>
</template>

<script>
export default {
    // 禁用传递过来的class
    // inheritAttrs:false
}
</script>