<template>
  <div class="date-picker" ref="picaker" @click="showDate">
    <div class="picaker-container">
      <div class="picaker-inner">
        <input type="text" @change="changeValue" v-model="dateValue" />
      </div>
      <div class="picaker-date-flex" v-if="isshow.isshow">
        <!-- 年份选择 -->
        <div class="picaker-years" v-if="isshow.year">
          <div class="picaker-date-title">
            <span class="prevYear" @click="year=(year/10-1)*10">
              &lt;&lt;
            </span>
            <span class="ym-title">
              <span>
                {{years[0]}} 年 - {{years[years.length-1]}} 年
              </span>
            </span>
            <span class="nextMonth" @click="year=(year/10+1)*10">
              &gt;&gt;
            </span>
          </div>
          <div class="picaker-years-box">
            <span v-for="item in years" @click.stop="activeYear(item)">{{item}} </span>
          </div>
        </div>
        <!-- 月份选择 -->
        <div class="picaker-months" v-if="isshow.month">
          <div class="picaker-date-title">
            <span class="prevYear" @click="year=year-1">
              &lt;&lt;
            </span>
            <span class="ym-title">
              <span>
                {{year}} 年
              </span>
            </span>
            <span class="nextMonth" @click="year=year+1">
              &gt;&gt;
            </span>
          </div>
          <div class="picaker-month-box">
            <span v-for="(item,index) in months" @click.stop="activeMonth(index)">{{item}} </span>
          </div>
        </div>
        <!-- 日期选择 -->
        <div class="picaker-date" v-if="isshow.date">
          <div class="picaker-date-title">
            <span class="prevYear" @click="year=year-1">
              &lt;&lt;
            </span>
            <span class="prevMonth" @click="prevMonth">
              &lt;
            </span>
            <span class="ym-title">
              <span @click.stop="showYears">
                {{year}} 年
              </span>
              <span @click.stop="showMonths">
                {{month<10?"0"+month:month}} 月
              </span>
            </span>
            <span class="nextMonth" @click="nextMonth">
              &gt;
            </span>
            <span class="nextMonth" @click="year=year+1">
              &gt;&gt;
            </span>
          </div>
          <div class="picaker-week">
            <span v-for="item in weeks">{{item}} </span>
          </div>
          <div class="picaker-date-box">
            <p v-for="i in 6">
              <span @click.stop="activeDate(item)" :class="{'font-color':item.month!=month,'date-active':item.month==month&&item.date==date}"
                v-for="item in dates.slice((i-1)*7, (i-1)*7+7)">
                {{item.date}} </span>
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "ghSelect",
    data() {
      return {
        isshow: {
          year: false,
          month: false,
          date: false,
          isshow: false
        },
        weeks: ["一", "二", "三", "四", "五", "六", "日"],
        months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        date: new Date().getDate(),

      }
    },
    props: {


    },
    created() {

    },
    mounted() {
      let _this = this

      document.addEventListener('click', function(event) {
        const e = event || window.event
        if (_this.$refs.picaker && !_this.$refs.picaker.contains(e.target)) {
          _this.isshow.year = false
          _this.isshow.month = false
          _this.isshow.date = false
          _this.isshow.isshow = false
        }
      });
    },
    methods: {
      showDate() {
        if (!this.isshow.isshow) {
          this.isshow.date = true
          this.isshow.isshow = true
        }
      },
      showYears() {
        this.isshow.date = false
        this.isshow.year = true
      },
      showMonths() {
        this.isshow.date = false
        this.isshow.month = true
      },
      activeYear(val) {
        this.year = val
        this.isshow.year = false
        this.isshow.month = true
      },
      activeMonth(val) {
        this.month = val + 1
        this.isshow.month = false
        this.isshow.date = true
      },
      activeDate(val) {
        this.month = val.month
        this.date = val.date
        this.isshow.month = false
        this.isshow.date = false
        this.isshow.isshow = false
      },
      prevMonth() {
        this.month = this.month - 1
        if (this.month <= 0) {
          this.month = 12
          this.year = this.year - 1
        }
      },
      nextMonth() {
        this.month = this.month + 1
        if (this.month >= 12) {
          this.month = 1
          this.year = this.year + 1
        }
      },
      changeValue() {
        console.log(this.dateValue)
      }
    },
    computed: {
      years() {
        let year = [];
        let yFloor = Math.floor(this.year / 10) * 10
        for (let i = yFloor; i <= yFloor + 10; i++) {
          year.push(i)
        }
        return year
      },
      dates() {
        let thisMonth = new Date(this.year, this.month, 0).getDate()
        let prevMnum = new Date(this.year, this.month - 1, 0).getDate()
        let dates = []

        for (let i = prevMnum - this.oneDateWeek + 2; i <= prevMnum; i++) {
          dates.push({
            month: this.month - 1,
            date: i
          })
        }
        for (let i = 1; i <= thisMonth; i++) {
          dates.push({
            month: this.month,
            date: i
          })
        }
        for (let i = 1; i <= 43 - thisMonth - this.oneDateWeek; i++) {
          dates.push({
            month: this.month + 1,
            date: i
          })
        }
        return dates
      },
      oneDateWeek() {
        let oneDateWeek = new Date(this.year, this.month - 1, 1).getDay()
        return oneDateWeek == 0 ? 7 : oneDateWeek
      },
      dateValue: {
        get() {
          let dateValue = this.year + "-" + (this.month < 10 ? '0' + this.month : this.month) + "-" + (this.date < 10 ?
            '0' + this.date : this.date)
          return dateValue
        },
        set(val){
          console.log(val)
        }
      },

    },
    watch: {

    },
  }
</script>
<style lang="scss" scoped="scoped">
  .date-picker {
    .picaker-container {
      position: relative;

      .picaker-inner {
        width: 13.75rem;
        border: 1px solid #cccccc;
        border-radius: 5px;

        input {
          padding: 7px 9px;
          border-radius: 5px;
          font-size: 16px;
          border: 0px;
          width: 100%;
          box-sizing: border-box;
        }
      }

      .picaker-date-flex {
        background-color: #FFFFFF;
        padding: 10px;
        position: absolute;
        border: 1px solid #cccccc;
        width: 245px;
        height: 272px;

        .picaker-date-title {
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          padding-bottom: 10px;
          border-bottom: 1px solid #eeeeee;

          .prevYear:hover,
          .prevMonth:hover,
          .nextMonth:hover,
          .nextMonth:hover {
            color: #FF0000;
          }

          .ym-title {
            span:hover {
              color: #FF0000;
            }
          }
        }

        .picaker-week {
          overflow: hidden;
          border-bottom: 1px solid #EEEEEE;

          span {
            float: left;
            width: 35px;
            height: 35px;
            text-align: center;
            line-height: 35px;
          }
        }

        .picaker-years-box {
          overflow: hidden;

          span {
            float: left;
            text-align: center;
            line-height: 60px;
            width: 80px;
            height: 60px;

            &:hover {
              color: #FF0000;
            }
          }
        }

        .picaker-month-box {
          overflow: hidden;

          span {
            float: left;
            text-align: center;
            line-height: 60px;
            width: 80px;
            height: 60px;

            &:hover {
              color: #FF0000;
            }
          }
        }

        .picaker-date-box {
          p {
            overflow: hidden;

            span {
              float: left;
              width: 35px;
              height: 35px;
              text-align: center;
              line-height: 35px;
              transition: all 0.5s;

              &:hover {
                background-color: #CCCCCC;
              }
            }

            .date-active {
              background-color: red;
              color: #fff;
            }

            .font-color {
              color: #cccccc;
            }
          }

        }
      }

      span {
        cursor: pointer;
        font-size: 14px;
        font-family: "宋体";
      }
    }
  }
</style>
