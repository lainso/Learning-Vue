<template>
    <h2>08-事件修饰符 |@click.xxx</h2>
    <p>由于有一些非常常用的event事件如阻止默认事件等，vue提供了简化这些事件处理的方法，具体可以看<a href="https://cn.vuejs.org/guide/essentials/event-handling.html#event-modifiers" target="_blank">官方文档</a></p>

    <a @click="eventDeal" href="https://cn.vuejs.org/guide/essentials/event-handling.html#event-modifiers">手动阻止默认事件</a><br><br>

    <!-- 通过事件修饰符 -->
    <a @click.prevent="eventDeal2" href="https://cn.vuejs.org/guide/essentials/event-handling.html#event-modifiers">简略阻止默认事件</a><br><br>

    <!-- 阻止冒泡触发 -->
    <div @click="dealDiv">
        <button @click.stop="dealBtn">事件冒泡测试</button>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                
            }
        },
        methods:{
            eventDeal(e){
                // 通过语句阻止
                e.preventDefault();
                alert("手动阻止了跳转")
            },
            eventDeal2(){
                alert("自动阻止了跳转")
            },
            dealDiv(){
                alert("这里是div事件触发")
            },
            dealBtn(e){
                // e.stopPropagation()
                alert("这里是button事件触发")
            }
        }
    }
</script>