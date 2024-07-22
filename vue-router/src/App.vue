<script setup>
import StartRouter from './components/StartRouter.vue'
import PassParam from './components/PassParam.vue'
import RouterLoop from './components/RouterLoop.vue'
</script>

<template>
  <!-- 定义路由的显示入口 -->
  <router-view></router-view>
  <!-- 定义页面跳转 -->
  <router-link to="/">首页(基础)</router-link>
  <span> | </span>
  <router-link to="/news">新闻(传参)</router-link>
  <span> | </span>
  <router-link to="/about">关于(嵌套)</router-link>

  <hr>
  <!-- 笔记组件 -->
  <StartRouter />
  <PassParam/>
  <RouterLoop/>
</template>
