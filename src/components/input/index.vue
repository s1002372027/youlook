<template>
	<div class="gh-input">
		<input class="gh-input-inner" :class="[border?'gh-input-border-'+border:'']" :type="type" >
	</div>
</template>

<script>
	export default{
		name:"ghInput",
		props:{
			type:{
				type:String,
				default:"text"
			},
			border:{
				type:String
			}
			
		}
	}
	
</script>

<style>
</style>
