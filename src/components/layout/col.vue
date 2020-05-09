<template>
    <div :class="[col]" :style="{paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}">
      <div class="col-content">
        <slot></slot>
      </div>
    </div>
</template>

<script>
  export default {
    name: "ghLayout",
    props: {
      col: {
        type: String
      },
      gutter:{
        default:0
      }
    }
  }
</script>

<style>

</style>
