<template>
  <div class="gh-date-picker">
    <div style="display: inline-block;">
      <div class="date-picker-inner" ref="hour">
        <div class="gh-date-input">
          <input type="text" v-model="hourValue">
          <i class="iconfont icon-triangle_down_fill"></i>
        </div>
        <div v-show="isShow.hour" class="gh-date-select">
          <ul>
            <li class="itemList" v-for="item in list.hour" :tabindex="item">
              {{item}}
            </li>
          </ul>
        </div>
      </div>
      <div class="date-picker-inner" ref="minute" v-if="type!='hour'">
        <div class="gh-date-input">
          <input type="text" v-model="minuteValue">
          <i class="iconfont icon-triangle_down_fill"></i>
        </div>
        <div v-show="isShow.minute" class="gh-date-select">
          <ul>
            <li class="itemList" v-for="item in list.minute" :tabindex="item">
              {{item}}
            </li>
          </ul>
        </div>
      </div>
      <div class="date-picker-inner" ref="second" v-if="type!='hour'&&type!='minute'">
        <div class="gh-date-input">
          <input type="text" v-model="secondValue">
          <i class="iconfont icon-triangle_down_fill"></i>
        </div>
        <div v-show="isShow.second" class="gh-date-select">
          <ul>
            <li class="itemList" v-for="item in list.second" :tabindex="item">
              {{item}}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <date-range v-if="type=='daterange'" ></date-range>
  </div>
</template>

<script>
  export default {
    name: "ghDatePicker",
    data() {
      return {
        hourValue: "",
        minuteValue: "",
        secondValue: "",
        isShow: {
          hour: false,
          minute: false,
          second: false,
        },
        list: {
          hour: [],
          minute: [],
          second: [],
        }
      }
    },
    props: {
      type: {
        type: String,
      },
      format: {
        type: String
      },
      setDateVal: {
        type: Object,
        default: function() {
          return {
            hour: null,
            minute: null,
            second: null
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
        this.hourValue = this.setDateVal.hour ? this.setDateVal.hour : datenew.getHours()
        this.minuteValue = this.setDateVal.minute ? this.setDateVal.minute : datenew.getMinutes()
        this.secondValue = this.setDateVal.second ? this.setDateVal.second : datenew.getSeconds()
      },
      setDate() {
        for (let h = 0; h <= 23; h++) {
          h=h<10?"0"+h:h
          this.list.hour.push(h)
        }
        for (let m = 1; m <= 60; m++) {
          m=m<10?"0"+m:m
          this.list.minute.push(m)
        }
        for (let d = 1; d <= 60; d++) {
          d=d<10?"0"+d:d
          this.list.second.push(d)
        }
      },
      isShowList(type, obj) {
        this.isShow[type] = !this.isShow[type]
        let val = obj.getElementsByTagName("input")[0].value
        for (let i = 0; i < obj.querySelectorAll("[tabindex]").length; i++) {
          this.common.removeClass(obj.querySelectorAll("[tabindex]")[i], "active")
        }
        if (obj.querySelector("[tabindex='" + val + "']")) {
          this.common.addClass(obj.querySelector("[tabindex='" + val + "']"), "active")
          obj.querySelector("[tabindex='" + val + "']").focus()

        }

      },
      selected(key, val) {
        this[key + "Value"] = val
        this.isShow[key] = false
      }
    },
    computed:{
      dateValue(){

        let val={
          hour:parseInt(this.hourValue),
          minute:this.type!='hour'?parseInt(this.minuteValue):0,
          second:this.type!='hour'&&this.type!='minute'?parseInt(this.secondValue):0
        }
        return val
      },
      dateRangeValue(){
        return this.$children[0].dateValue
      }
    },
    components: {
    },
  }
</script>

<style>
</style>
