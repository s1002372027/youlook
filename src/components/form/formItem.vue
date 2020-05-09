<template>
  <div class="gh-from-item">
      <label class="from-item-label">
        <slot name="label"></slot>
      </label>
      <div class="from-item-content">
        <slot name="input"></slot>
        <div  v-if="isshow" class="from-item-error">请输入密码</div>
      </div>
  </div>
</template>

<script>
  export default{
    name:"formItem",
    data(){
      return {
        isshow:false
      }
    },
    props:["prop"]
  }
</script>

<style>
</style>
