<template>
	<label class="gh-checkbox" :class="{'is-disabled':disabled}">
		<span class="gh-checkbox-label" v-if="label.float=='left'">{{label.label}}</span>
		<input :name="name" :disabled="disabled" :checked="checked" class="gh-checkbox-input" type="checkbox" :value="label.value" @change="change">
		<span class="gh-checkbox-label" v-if="label.float=='right'">{{label.label}}</span>
	</label>
</template>

<script>
	export default{
		name:"ghCheckbox",
		props:{
			label:{
				type:Object,
			},
			name:{
				type:String
			},
      value:{
				type:null
			},
      disabled:{
        type:Boolean
      }
		},
    model:{
      prop:"value",

    },
    mounted() {
      console.log(this.disabled)
    },
    methods:{
      change(){
        this.$emit("change",this.label.value)
      }
    },
    computed:{
      checked(){
        return this.value==this.label.value
      }
    }
	}

</script>

<style>
</style>
