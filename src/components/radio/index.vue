<template>
	<label class="gh-radio">
		<span class="gh-radio-label" v-if="label.float=='left'">{{label.label}}</span>
		<input :name="name" class="gh-radio-input" type="radio">
		<span class="gh-radio-label" v-if="label.float=='right'">{{label.label}}</span>
	</label>
</template>

<script>
	export default{
		name:"ghRadio",
		props:{
			label:{
				type:Object,
			},
			name:{
				type:String
			}	
		}
	}
	
</script>

<style>
</style>
