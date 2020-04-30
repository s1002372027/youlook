<template>
  <div id="app" style="padding-left: 1.25rem;">
	  <gh-button type="primary" size="medium">按钮</gh-button>
	  <gh-input type="text" border="bottom"></gh-input>
	  <gh-checkbox :label="{
		  float:'right',
		  label:'选择'
	  }"></gh-checkbox>
	  <gh-radio name="1" :label="{
	  		  float:'right',
	  		  label:'选择'
	  }"></gh-radio>
	  <gh-radio name="1" :label="{
	  		  float:'right',
	  		  label:'选择'
	  }"></gh-radio>
	  <gh-radio name="1" :label="{
	  		  float:'right',
	  		  label:'选择'
	  }"></gh-radio>
	  <gh-select></gh-select>
	  <gh-select></gh-select>
	  <gh-date-picker type="daterange"></gh-date-picker>
		<!-- <datePicker></datePicker> -->
  </div>
</template>

<script>

export default {
 
  name: 'app',
  data () {
    return {

    }
  },
  components:{
	 
  }
}
</script>

<style lang="scss">

</style>
