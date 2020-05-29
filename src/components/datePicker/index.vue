<template>
  <div class="gh-date-picker">
    <div style="display: inline-block;">
      <div class="date-picker-inner" ref="year" v-if="hiddenInput!='year'">
        <div class="gh-date-input">
          <input type="text" v-model="yearValue">
          <i class="iconfont icon-triangle_down_fill"></i>
        </div>
        <div v-show="isShow.year" class="gh-date-select">
          <ul>
            <li class="itemList" v-for="(item,index) in list.year" :class="{'active':yearActive==index}" @click="active('yearActive',index)" :tabindex="item">
              {{item}}
            </li>
          </ul>
        </div>
      </div>
      <div class="date-picker-inner" ref="month" v-if="type!='year'&&hiddenInput!='month'">
        <div class="gh-date-input">
          <input type="text" v-model="monthValue">
          <i class="iconfont icon-triangle_down_fill"></i>
        </div>
        <div v-show="isShow.month" class="gh-date-select">
          <ul>
            <li class="itemList" v-for="(item,index) in list.month" :class="{'active':monthActive==index}" @click="active('monthActive',index)" :tabindex="item">
              {{item}}
            </li>
          </ul>
        </div>
      </div>
      <div class="date-picker-inner" ref="day" v-if="type!='year'&&type!='month'&&hiddenInput!='day'">
        <div class="gh-date-input">
          <input type="text" v-model="dayValue">
          <i class="iconfont icon-triangle_down_fill"></i>
        </div>
        <div v-show="isShow.day" class="gh-date-select">
          <ul>
            <li class="itemList" v-for="(item,index) in list.day" :class="{'active':dayActive==index}" @click="active('dayActive',index)" :tabindex="item">
              {{item}}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <date-range :hiddenInput="hiddenInput" v-if="type=='daterange'" ></date-range>
  </div>
</template>

<script>
  import dateRange from './dateRange.vue';
  export default {
    name: "ghDatePicker",
    data() {
      return {
        yearActive:null,
        monthActive:null,
        dayActive:null,
        yearValue: "",
        monthValue: "",
        dayValue: "",
        isShow: {
          year: false,
          month: false,
          day: false,
        },
        list: {
          year: [],
          month: [],
          day: [],
        }
      }
    },
    props: {
      type: {
        type: String,
      },
      hiddenInput:{
        type: String,
      },
      format: {
        type: String
      },
      setDateVal: {
        type: Object,
        default: function() {
          return {
            year: null,
            month: null,
            day: null
          }
        }
      }
    },
    created() {
      var _this = this
      document.addEventListener('click', function(event) {
        const e = event || window.event
        for (let key in _this.$refs) {
          if (_this.$refs[key] && _this.$refs[key].contains(e.target)) {
            for (let key1 in _this.isShow) {
              if (key1 != key) {
                _this.isShow[key1] = false
              }
            }

            if (e.target.tagName == "LI") {
              _this.selected(key, e.target.innerText)
            } else {
              _this.isShowList(key, _this.$refs[key])
            }

          }
        }

      });
      this.getDate()
      this.setDate()
    },
    methods: {
      getDate() {
        let datenew = new Date()
        this.yearValue = this.setDateVal.year ? this.setDateVal.year : datenew.getFullYear()
        this.monthValue = this.setDateVal.month ? this.setDateVal.month : datenew.getMonth() + 1
        this.dayValue = this.setDateVal.day ? this.setDateVal.day : datenew.getDate()
      },
      setDate() {
        for (let y = 1970; y <= 2099; y++) {
          this.list.year.push(y)
        }
        for (let m = 1; m <= 12; m++) {
          this.list.month.push(m)
        }
        for (let d = 1; d <= 31; d++) {
          this.list.day.push(d)
        }
      },
      isShowList(type, obj) {
        this.isShow[type] = !this.isShow[type]
        let val = obj.getElementsByTagName("input")[0].value
        if (obj.querySelector("[tabindex='" + val + "']")) {
          obj.querySelector("[tabindex='" + val + "']").focus()
        }

      },
      active(type,index){
          this[type]=index
      },
      selected(key, val) {
        this[key + "Value"] = val
        this.isShow[key] = false
      }
    },
    computed:{
      dateValue(){

        let val={
          year:parseInt(this.yearValue),
          month:this.type!='year'?parseInt(this.monthValue):0,
          day:this.type!='year'&&this.type!='month'?parseInt(this.dayValue):0
        }
        return val
      },
      dateRangeValue(){
        return this.$children[0].dateValue
      }
    },
    components: {
      dateRange
    },
  }
</script>

<style>
</style>
