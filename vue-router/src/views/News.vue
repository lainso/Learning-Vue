<template>
    <h3>新闻页</h3>
    <ul>
        <li v-for="(way, index) in ways" :key="index">
            <router-link :to="{ name: 'NewsDetail', params: { way } }">{{ way }}新闻</router-link>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            ways: ["百度", "网易", "头条"]
        }
    }
}
</script>