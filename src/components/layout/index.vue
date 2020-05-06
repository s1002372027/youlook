<template>
  <div class="gh-row" :class="[{'gh-row-flex':type=='flex'},isjustify]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "ghRow",
    data() {
      return {
       }
    },
    props: {
      type: String,
      justify: String
    },
    computed: {
      isjustify() {
        let cla
        // start/end/center/space-around/space-between
        switch (this.justify) { 
          case 'end':
            cla = {
              'is-justify-end': true
            }
            break;
          case 'center':
            cla = {
              'is-justify-center': true
            }
            break;
          case 'space-around':
            cla = {
              'is-justify-space-around': true
            }
            break;
          case 'space-between':
            cla = {
              'is-justify-space-between': true
            }
            break;
          default:
            break;
        }
        return cla
      }
    }
  }
</script>

<style>

</style>
