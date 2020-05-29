<template>
  <div id="app" style="padding: 1.25rem;background-color: #DDDDDD;">
 <!--   <gh-button size="mini">按钮</gh-button>
    <gh-input type="text" border="bottom"></gh-input>

    <gh-form ref="aa" :rules="data">
      <gh-form-item prop="name">
        <template v-slot:label>
          用户名：
        </template>
        <template v-slot:input>
          <gh-input v-model="form.name" type="text" border="bottom"></gh-input>
        </template>
      </gh-form-item>
      <gh-form-item prop="phone">
        <template v-slot:label>
          phone：
        </template>
        <template v-slot:input>
          <gh-input v-model="form.phone" disabled type="text" border="bottom"></gh-input>
        </template>
      </gh-form-item>
      <gh-form-item prop="code">
        <template v-slot:label>
          code：
        </template>
        <template v-slot:input>
          <gh-input v-model="form.code" readonly type="text" border="bottom"></gh-input>
        </template>
      </gh-form-item>
      <gh-form-item>
        <template v-slot:label>
          code：
        </template>
        <template v-slot:input>
          <gh-button type="primary" size="medium" @click.native="submit">按钮</gh-button>
        </template>
      </gh-form-item>
    </gh-form>
    <gh-dialog title="弹框标题" :isShow.sync="isShow" :before-close="handleClose" :is-title="false">
      <div>
        内容区域
      </div>
      <div slot="footer">
        <gh-button>取消</gh-button>
        <gh-button>确定</gh-button>
      </div>
    </gh-dialog>
    <button @click="isShow=true">弹框</button> -->
    <!-- <gh-checkbox v-model="value" :label="{
		  float:'right',
		  label:'选择',
      value:1
	  }"></gh-checkbox>
    <gh-checkbox v-model="value" :label="{
      float:'right',
      label:'选择',
      value:2
    }"></gh-checkbox>
    <gh-checkbox v-model="value" :label="{
      float:'right',
      label:'选择',
      value:3
    }"></gh-checkbox>
	  <gh-radio name="1" v-model="value" :disabled="false" :label="{
	  		  float:'right',
	  		  label:'选择',
          value:1
	  }" @change="change"></gh-radio>
	  <gh-radio name="1" v-model="value" disabled :label="{
	  		  float:'right',
	  		  label:'选择',
          value:2
	  }" @change="change"></gh-radio>
	  <gh-radio name="1" v-model="value" disabled :label="{
	  		  float:'right',
	  		  label:'选择',
          value:3
	  }" @change="change"></gh-radio>



    <gh-row type="flex" justify="center">
      <gh-col col="gh-col-mx-9 gh-col-sm-1 gh-col-md-6 gh-col-lg-2 gh-col-xl-2 hidden-lg-and-up" gutter="20"></gh-col>
      <gh-col col="gh-col-mx-3 gh-col-sm-9 gh-col-md-6 gh-col-lg-2 gh-col-xl-8 hidden-xl-only" gutter="20"></gh-col>
    </gh-row>
    <gh-row>
      <gh-col col="gh-col-mx-9 gh-col-sm-1 gh-col-md-6 gh-col-lg-2 gh-col-xl-2 hidden-lg-and-down" gutter="20"></gh-col>
      <gh-col col="gh-col-mx-3 gh-col-sm-9 gh-col-md-6 gh-col-lg-2 gh-col-xl-8 hidden-lg-only" gutter="20"></gh-col>
    </gh-row>
    <gh-link type="primary" :underline="true" >防守对方的</gh-link>-->
   <!-- <gh-select :selectList="selectList" @change="selectchange" :isSearch="true" ></gh-select>
    <gh-select :selectList="selectList1"></gh-select> -->
  <!-- <gh-date-picker type="daterange" hiddenInput="year" ref="date"></gh-date-picker>
    <button @click="getdate">获取时间</button> -->
   <!-- <gh-time-picker  ref="date"></gh-time-picker> -->
   <!-- <button @click="getdate">获取时间</button> -->
   <datePicker></datePicker>
   <input type="text" @change="changeValue" />
  </div>

</template>

<script>
  export default {

    name: 'app',
    data() {
      return {
        isShow: false,
        value: 2,
        form: {
          name: "",
          phone: "",
          code: ""
        },
        data: {
          name: {
            type: "string",
            required: true,
            validator: (rule, value) => {
              return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/.test(value)
            },
            message: "账号长度最小6位，并包含数字和字母！"
          },
          phone: {
            type: "number",
            validator: (rule, value) => {
              return /^1[3456789]\d{9}$/.test(value)
            },
            message: "电话号码不正确！"
          },
          code: {
            type: "string",
            required: true,
            message: "请输入验证码！"
          }
        },
        selectList:[{
            value: 1,
            label: "选项一"
          },
          {
            value: 2,
            label: "选项二"
          },
          {
            value: 3,
            label: "选项三"
          }
         ],
         selectList1:[]
      }
    },
    mounted() {

    },
    methods: {
      changeValue(){
        console.log(111)
      },
      getdate(){
        console.log(this.$refs.date.dateValue)
      },
      selectchange(data){
        console.log(data)
      },
      change(data) {
        console.log(data)
      },
      submit() {
        this.$refs.aa.validator(this.form).then((res) => {
          console.log(res)
        }).catch((err) => {
          console.log(err)
        })
      },
      handleClose(done) {
        done()
      }
    },

    components: {

    }
  }
</script>

<style lang="scss">

</style>
