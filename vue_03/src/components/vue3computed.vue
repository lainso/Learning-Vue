<template>
    <h2>30-vue3组合式API——computed</h2>
    <p>新版写法：</p>
    <pre>
import { computed } from 'vue'
import { ref } from 'vue'
const home = ref({
    member: ["椰子", "小刘", "小凌"],
    name: "Home"
})


const computedState = computed(() => {
    return home.value.member.length > 0 ? 'Yes' : 'No'
})

console.log(computedState.value)
    </pre>
</template>

<script setup>
import { computed } from 'vue'
import { ref } from 'vue'
const home = ref({
    member: ["椰子", "小刘", "小凌"],
    name: "Home"
})


const computedState = computed(() => {
    return home.value.member.length > 0 ? '30-Yes' : '30-No'
})

console.log(computedState.value)
</script>