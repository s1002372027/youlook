<template>
	<label class="gh-checkbox">
		<span class="gh-checkbox-label" v-if="label.float=='left'">{{label.label}}</span>
		<input :name="name" class="gh-checkbox-input" type="checkbox">
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
			}	
		}
	}
	
</script>

<style>
</style>
