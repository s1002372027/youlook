<template>
  <div class="gh-date-picker">
    <span>——</span>
    <div style="display: inline-block;">
      <div class="date-picker-inner" ref="year">
        <div class="gh-year-input">
          <input type="text" v-model="yearValue">
          <i class="iconfont icon-triangle_down_fill"></i>
        </div>
        <div v-show="isShow.year" class="gh-date-select">
          <ul>
            <li class="itemList" v-for="item in list.year" :tabindex="item">
              {{item}}
            </li>
          </ul>
        </div>
      </div>
      <div class="date-picker-inner" ref="month">
        <div class="gh-month-input">
          <input type="text" v-model="monthValue">
          <i class="iconfont icon-triangle_down_fill"></i>
        </div>
        <div v-show="isShow.month" class="gh-date-select">
          <ul>
            <li class="itemList" v-for="item in list.month" :tabindex="item">
              {{item}}
            </li>
          </ul>
        </div>
      </div>
      <div class="date-picker-inner" ref="day">
        <div class="gh-month-input">
          <input type="text" v-model="dayValue">
          <i class="iconfont icon-triangle_down_fill"></i>
        </div>
        <div v-show="isShow.day" class="gh-date-select">
          <ul>
            <li class="itemList" v-for="item in list.day" :tabindex="item">
              {{item}}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <date-range v-if="type=='daterange'"></date-range>
  </div>
</template>

<script>
  export default {
    name: "ghDateRange",
    data() {
      return {
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
      this.setDate()
      this.getDate()
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
    computed: {
      dateValue() {
        let val = {
          year:parseInt(this.yearValue),
          month:parseInt(this.monthValue),
          day:parseInt(this.dayValue)
        }
        return val
      }
    }
  }
</script>

<style scoped="scoped">
  .gh-date-picker {
    border: 0;
  }
</style>
