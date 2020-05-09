<template>
	<button class="gh-button" :class="[type!=''?'gh-button-'+type:'',btnsize]">
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
		},
    computed:{
      btnsize(){
        return this.size?'gh-button-'+this.size:'';
      }
    }
	}
</script>

<style>

</style>
