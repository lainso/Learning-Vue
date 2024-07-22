<template>
    <h3>关于页面</h3>
    <!-- 在这里务必记得要写全路径 -->
    <router-link to="/about/1">子页01</router-link>
    <span> | </span>
    <router-link to="/about/2">子页02</router-link>
    <p></p>
    <router-view></router-view>
</template>