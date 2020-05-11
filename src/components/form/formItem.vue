<template>
  <div class="gh-from-item">
    <label class="from-item-label">
      <slot name="label"></slot>
    </label>
    <div class="from-item-content">
      <slot name="input"></slot>
      <transition name="fade">
        <div v-if="isshow" class="from-item-error">{{text}}</div>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: "formItem",
    data() {
      return {
        isshow: false,
        text: ""
      }
    },
    props: ["prop"]
  }
</script>

<style scoped="scoped">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
