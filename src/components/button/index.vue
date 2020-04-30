<template>
	<button class="gh-button" :class="[type!=''?'gh-button-'+type:'',size]">
		<slot></slot>
	</button>
</template>

<script>
	export default{
		name:"ghButton",
		props:{
			type:{
				type:String
			},
			size:{
				type:String
			}
		}
	}
</script>

<style>
	
</style>
