<template>
  <h2>03-属性绑定 | v-bind</h2>
  <!-- 绑定了script中定义的msg属性到html中的class属性 -->
  <p v-bind:class="text_calss" v-bind:id="alive">绑定class</p>
  <!-- 如果绑定的属性值为 null 或者 undefined，绑定值会被直接移除出DOM -->
  <!-- 上面的例子中，“绑定class”的元素将没有id属性 -->
  
  <!-- 另外，v-bind可简写为冒号 -->
  <button :disabled="button_condition">绑定disabled</button>

  <!-- 此外还可以绑定对象以实现一次绑定多个值 -->
  <p v-bind="bind_object">同时绑定</p>
</template>

<script>
export default{
  data(){
    return{
      text_calss:'active',
      text_id:'hello',
      alive:undefined,
      button_condition:false,
      bind_object:{
        id:'active',
        class:'hello',
      }
    }
  }
}
</script>

<style>
  .active{
    font-weight: bolder;
  }

  #hello{
    color: grey;
  }
</style>