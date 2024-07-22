<template>
    <h2>02-模板语法</h2>

    <!-- 文本插值 -->
    <p>{{ msg }}</p>

    <!-- 表达式 -->
    <p>{{ number + 1 }}</p>
    <p>{{ ok ? 'Yes' : 'No' }}</p>
    <!-- 通过空字符串分割、反转，然后合并 -->
    <p>{{ msg2.split("").reverse().join("") }}</p>
    <!-- 不支持的表达 -->
    <!-- <p>{{ var i = 1 }}</p> (没有返回)-->
    <!-- <p>{{ if(ok) {return "Yes"} }}</p> （非单一表达式）-->

    <!-- 建议不要在这里做处理，这里仅作为数据展示，处理在script中完成 -->

    <!-- 原始html -->
    <p v-html="html"></p>
    <!-- <p>{{ html }}</p>(直接显示html文本) -->
</template>

<script>
export default {
    data() {
        return {
            msg: 'hello vue',
            number: 10,
            ok: true,
            msg2: "大家好",
            html: "<a href='https://www.baidu.com/'>百度</a>"
        }
    }
}
</script>