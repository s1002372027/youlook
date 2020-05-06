<template>
  <div id="app" style="padding: 1.25rem;">
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
    <gh-row>
      <gh-col col="gh-col-mx-9 gh-col-sm-1 gh-col-md-6 gh-col-lg-2 gh-col-xl-2 hidden-lg-and-up" gutter="20"></gh-col>
      <gh-col col="gh-col-mx-3 gh-col-sm-9 gh-col-md-6 gh-col-lg-2 gh-col-xl-8 hidden-xl-only" gutter="20"></gh-col>
    </gh-row>
    <gh-row>
      <gh-col col="gh-col-mx-9 gh-col-sm-1 gh-col-md-6 gh-col-lg-2 gh-col-xl-2 hidden-lg-and-down" gutter="20"></gh-col>
      <gh-col col="gh-col-mx-3 gh-col-sm-9 gh-col-md-6 gh-col-lg-2 gh-col-xl-8 hidden-lg-only" gutter="20"></gh-col>
    </gh-row>
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
