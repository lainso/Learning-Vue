<template>
    <h2>12-Style样式绑定 |:style</h2>
    <!-- style与clss一样也做了增强 -->
    <!-- 对象形式 -->
    <p :style="{ color: text_color, fontSize: text_size }">示例文本</p>
    <p :style="text_style">示例文本</p>

    <!-- 数组形式 -->
    <p :style="[text_style]">示例文本</p>
</template>

<script>
export default {
    data() {
        return {
            text_color: "green",
            text_size: "20px",

            text_style: {
                color: "red",
                fontSize: "20px",
            },
        }
    }
}
</script>