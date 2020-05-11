<template>
  <div class="gh-form">
    <slot></slot>
  </div>

</template>

<script>
  import schema from 'async-validator';
  export default {
    name: "ghFrom",
    props: {
      rules:{
        type:null
      }
    },
    methods: {
      validator(data) {
        return new Promise((resolve, reject) => {
          let validator = new schema(this.rules);
          validator.validate(data, (errors, fields) => {
            if (errors) {
              this.$children.forEach((v)=>{
                v.$data.isshow=false
                errors.forEach((y)=>{
                  if(y.field==v.prop){
                    v.$data.isshow=true
                    v.$data.text=y.message
                  }
                })
              })
                reject(errors)
            }
                resolve(true)
          })

        })
      }

    },
  }
</script>

<style lang="scss" scoped="scoped">

</style>
