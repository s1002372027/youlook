<template>
  <a :href="href" :class="['el-link',typeClass,underlineClass]" :target="target">
    <slot></slot>
  </a>
</template>

<script>
  export default {
    name: "ghLink",
    props: {
      href: {
        type: String,

      },
      target: {
        type: String
      },
      type: {
        type: String,
        default: "default"
      },
      underline:{
        type:Boolean,
        default: false
      }
    },
    computed: {
      underlineClass(){
        let cla=this.underline?"is-underline":"";
        return cla
      },
      typeClass() {
        let cla = {}
        switch (this.type) {
          case "primary":
            cla = {
              'gh-link-primary':true
            }
            break;
          case "success":
            cla = {
              'gh-link-success':true
            }
            break;
          case "info":
            cla = {
              'gh-link-info':true
            }
            break;
          case "warning":
            cla = {
              'gh-link-warning':true
            }
            break;
          case "danger":
            cla = {
              'gh-link-danger':true
            }
            break;
          default:
            cla = {
              'gh-link-default':true
            }
            break;
        }
        return cla
      }
    }
  }
</script>

<style>

</style>
