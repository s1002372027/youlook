<template>
  <div class="gh-input">
    <input class="gh-input-inner" :placeholder="placeholder" :readonly="readonly" :disabled="disabled" :value="value" :class="[border?'gh-input-border-'+border:'']" :type="type" @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
  export default {
    name: "ghInput",

    props: {
      type: {
        type: String,
        default: "text"
      },
      border: {
        type: String
      },
      value: {
        type: null,
      },
      name:{
        type: null,
      },
      disabled:{
        type:Boolean,
        default:false
      },
      readonly:{
        type:Boolean,
        default:false
      },
      placeholder:{
        type:String
      }
    },
    methods: {

    }

  }
</script>

<style lang="scss" scoped="scoped">

</style>
