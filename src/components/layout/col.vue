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
.col-content{
  height: 3.125rem;
  background-color: #000066;
}
</style>
