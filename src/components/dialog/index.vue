<template>
  <div class="gh-dialog-box" v-if="isShow" @click.stop="closeDialog">
    <div class="gh-diglog" @click.stop>
      <div v-if="isTitle" class="diglog-title">
        <div class="title">{{title}}</div>
        <div class="close" @click="closeDialog"><i class="iconfont icon-close"></i></div>
      </div>
      <div class="diglog-content">
        <slot></slot>
      </div>
      <div class="diglog-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "ghDatePicker",
    props: {
      title: {
        type: null
      },
      isShow: {
        type: Boolean
      },
      beforeClose: {
        type: Function
      },
      isTitle:{
        type: Boolean,
        default:true
      }
    },

    mounted() {},
    methods: {
      closeDialog() {
        if (this.beforeClose) {
          this.beforeClose(this.closeDialogBefore)
        } else {
          this.$emit('update:isShow', false);
        }
      },
      closeDialogBefore() {
        this.$emit('update:isShow', false);
      }
    },
    watch: {

    }
  }
</script>

<style>

</style>
