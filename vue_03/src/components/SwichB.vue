<template>
    <h3>这里是组件B</h3>
</template>

<script>
    export default{
        beforeUnmount(){
            console.log("组件B卸载前");
        },
        unmounted(){
            console.log("组件B被卸载了")
        }
    }
</script>