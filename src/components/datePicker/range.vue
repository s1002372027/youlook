<template>
  <div class="picaker-daterange">
    <div class="picaker-start" v-if="dateStart.isshow.isshow">
      <!-- 年份选择 -->
      <!-- <div class="picaker-years" v-if="dateStart.isshow.year">
        <div class="picaker-date-title">
          <span class="prevYear" @click="dateStart.year=(dateStart.year/10-1)*10">
            &lt;&lt;
          </span>
          <span class="ym-title">
            <span>
              {{startYears[0]}} 年 - {{startYears[startYears.length-1]}} 年
            </span>
          </span>
          <span class="nextMonth" @click="dateStart.year=(dateStart.year/10+1)*10">
            &gt;&gt;
          </span>
        </div>
        <div class="picaker-years-box">
          <span v-for="item in startYears" @click.stop="activeYear(item)">{{item}} </span>
        </div>
      </div> -->


      <!-- 月份选择 -->
      <!-- <div class="picaker-months" v-if="dateStart.isshow.month">
        <div class="picaker-date-title">
          <span class="prevYear" @click="dateStart.year=dateStart.year-1">
            &lt;&lt;
          </span>
          <span class="ym-title">
            <span @click.stop="showYears">
              {{dateStart.year}} 年
            </span>
          </span>
          <span class="nextMonth" @click="dateStart.year=dateStart.year+1">
            &gt;&gt;
          </span>
        </div>
        <div class="picaker-month-box">
          <span v-for="(item,index) in dateStart.months" @click.stop="activeMonth(index)">{{item}} </span>
        </div>
      </div> -->
      <!-- 日期选择 -->
      <div class="picaker-date" v-if="dateStart.isshow.date">
        <div class="picaker-date-title">
          <span class="prevYear" @click="dateStart.year=dateStart.year-1">
            &lt;&lt;
          </span>
          <span class="prevMonth" @click="prevMonth('dateStart')">
            &lt;
          </span>
          <span class="ym-title">
            <span>
              {{dateStart.year}} 年
            </span>
            <span>
              {{dateStart.month<10?"0"+dateStart.month:dateStart.month}} 月
            </span>
          </span>
          <span class="nextMonth" @click="nextMonth('dateStart')">
            &gt;
          </span>
          <span class="nextMonth" @click="dateStart.year=dateStart.year+1">
            &gt;&gt;
          </span>
        </div>
        <div class="picaker-week">
          <span v-for="item in dateStart.weeks">{{item}} </span>
        </div>
        <div class="picaker-date-box">
          <p v-for="i in 6">
            <span @click.stop="activeDate(item)" :class="{'font-color':item.month!=dateStart.month,'date-active':item.month==dateStart.month&&item.date==dateStart.date}"
              v-for="item in startDates.slice((i-1)*7, (i-1)*7+7)">
              {{item.date}} </span>
          </p>
        </div>
      </div>
    </div>
    <!-- 时间区间 -->
    <div class="picaker-end" v-if="dateEnd.isshow.isshow">
      <!-- 年份选择 -->
      <!-- <div class="picaker-years" v-if="dateEnd.isshow.year">
        <div class="picaker-date-title">
          <span class="prevYear" @click="dateEnd.year=(dateEnd.year/10-1)*10">
            &lt;&lt;
          </span>
          <span class="ym-title">
            <span>
              {{endYears[0]}} 年 - {{endYears[endYears.length-1]}} 年
            </span>
          </span>
          <span class="nextMonth" @click="dateEnd.year=(dateEnd.year/10+1)*10">
            &gt;&gt;
          </span>
        </div>
        <div class="picaker-years-box">
          <span v-for="item in endYears" @click.stop="activeYear(item)">{{item}} </span>
        </div>
      </div> -->
      <!-- 月份选择 -->
      <!-- <div class="picaker-months" v-if="dateEnd.isshow.month">
        <div class="picaker-date-title">
          <span class="prevYear" @click="dateEnd.year=dateEnd.year-1">
            &lt;&lt;
          </span>
          <span class="ym-title">
            <span @click.stop="showYears">
              {{dateEnd.year}} 年
            </span>
          </span>
          <span class="nextMonth" @click="dateEnd.year=dateEnd.year+1">
            &gt;&gt;
          </span>
        </div>
        <div class="picaker-month-box">
          <span v-for="(item,index) in dateEnd.months" @click.stop="activeMonth(index)">{{item}} </span>
        </div>
      </div> -->
      <!-- 日期选择 -->
      <div class="picaker-date" v-if="dateEnd.isshow.date">
        <div class="picaker-date-title">
          <span class="prevYear" @click="dateEnd.year=dateEnd.year-1">
            &lt;&lt;
          </span>
          <span class="prevMonth" @click="prevMonth('dateEnd')">
            &lt;
          </span>
          <span class="ym-title">
            <span>
              {{dateEnd.year}} 年
            </span>
            <span>
              {{dateEnd.month<10?"0"+dateEnd.month:dateEnd.month}} 月
            </span>
          </span>
          <span class="nextMonth" @click="nextMonth('dateEnd')">
            &gt;
          </span>
          <span class="nextMonth" @click="dateEnd.year=dateEnd.year+1">
            &gt;&gt;
          </span>
        </div>
        <div class="picaker-week">
          <span v-for="item in dateEnd.weeks">{{item}} </span>
        </div>
        <div class="picaker-date-box">
          <p v-for="i in 6">
              <span @click.stop="activeDate(item)" :class="{'font-color':item.month!=dateEnd.month,'date-active':item.year==activeDateVal[1].year&&item.month==activeDateVal[1].month&&item.date==activeDateVal[1].date}"
              v-for="item in endDates.slice((i-1)*7, (i-1)*7+7)">
              {{item.date}}</span>
          </p>

        </div>
      </div>
    </div>
  </div>


</template>

<script>
  import moment from "moment"
  export default {
    name: "ghSelect",
    data() {
      return {
        dateStart:{
          isshow: {
            year: false,
            month: false,
            date: true,
            isshow: true
          },
          weeks: ["一", "二", "三", "四", "五", "六", "日"],
          months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
          year: new Date().getFullYear(),
          month: new Date().getMonth() + 1,
          date: new Date().getDate(),
          dateValue: ""
        },
        dateEnd:{
          isshow: {
            year: false,
            month: false,
            date: true,
            isshow: true
          },
          weeks: ["一", "二", "三", "四", "五", "六", "日"],
          months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
          year: new Date().getFullYear(),
          month: new Date().getMonth() + 1,
          date: new Date().getDate(),
          dateValue: ""
        },
        clickMnu:0
      }
    },
    props: {
      format: {
        type: String
      }
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
          if(this.type=="daterange"){
            this.isshow.date = true
            this.isshow.isshow = true
          }else{
            this.isshow[this.type] = true
            this.isshow.isshow = true
          }

        }
      },
      /* showYears() {
        this.isshow.date = false
        this.isshow.month = false
        this.isshow.year = true
      },
      showMonths() {
        this.isshow.date = false
        this.isshow.month = true
      },
      activeYear(val) {
        if (this.type == 'year') {
          this.getDateValue()
        } else {
          this.year = val
          this.isshow.year = false
          this.isshow.month = true
        }
      },
      activeMonth(val) {
        if (this.type == 'month') {
          this.getDateValue()
        } else {
          this.month = val + 1
          this.isshow.month = false
          this.isshow.date = true
        }
      }, */
      activeDate(val) {
        this.month = val.month
        this.date = val.date
        this.getDateValue()
      },
      prevMonth(type) {
        this[type].month = this[type].month - 1
        if (this[type].month <= 0) {
          this[type].month = 12
          this[type].year = this[type].year - 1
        }
      },
      nextMonth(type) {
        this[type].month = this[type].month + 1
        if (this[type].month >= 12) {
          this[type].month = 1
          this[type].year = this[type].year + 1
        }
      },
      getDateValue() {
        this[type].isshow.year = false
        this[type].isshow.month = false
        this[type].isshow.date = false
        this[type].isshow.isshow = false
        let dateObj = {
              year: this[type].year,
              month: this[type].month,
              date: this[type].date
            }
        let format=this.format?this.format:"YYYY-MM-DD"
        let dateVal=this[type].year+"-"+this[type].month+"-"+this[type].date

        let dateValue = moment(dateVal).format(format)
        this.dateValue = dateValue
        this.$emit("change",dateObj )
      },
      inputBlur() {
        let e = e || event
        let date = new Date(e.target.value)
        if (e.target.value != "") {
          if (date == "Invalid Date") {
            this.dateValue = moment({
              year: this.year,
              month: this.month-1,
              date: this.date
            }).format(this.format?this.format:"YYYY-MM-DD")
          } else {
            let date = new Date(this.dateValue)
            this.year = date.getFullYear()
            this.month = date.getMonth()+1
            this.date = date.getDate()
          }
        }


        this.$emit("blur", this.dateStart.dateValue)
      },
      inputFocus() {
        this.$emit("blur", this.dateStart.dateValue)
      }
    },
    computed: {
      startYears() {
        let year = [];
        let yFloor = Math.floor(this.dateStart.year / 10) * 10
        for (let i = yFloor; i <= yFloor + 10; i++) {
          year.push(i)
        }
        return year
      },
      startDates() {
        let thisMonth = new Date(this.dateStart.year, this.dateStart.month, 0).getDate()
        let prevMnum = new Date(this.dateStart.year, this.dateStart.month - 1, 0).getDate()
        let dates = []
        for (let i = prevMnum - this.startOneDateWeek + 2; i <= prevMnum; i++) {
          dates.push({
            month: this.dateStart.month - 1,
            date: i
          })
        }
        for (let i = 1; i <= thisMonth; i++) {
          dates.push({
            month: this.dateStart.month,
            date: i
          })
        }
        for (let i = 1; i <= 43 - thisMonth - this.startOneDateWeek; i++) {
          dates.push({
            month: this.dateStart.month + 1,
            date: i
          })
        }

        return dates
      },
      startOneDateWeek() {
        let oneDateWeek = new Date(this.dateStart.year, this.dateStart.month - 1, 1).getDay()
        return oneDateWeek == 0 ? 7 : oneDateWeek
      },
      endYears() {
        let year = [];
        let yFloor = Math.floor(this.dateEnd.year / 10) * 10
        for (let i = yFloor; i <= yFloor + 10; i++) {
          year.push(i)
        }
        return year
      },
      endDates() {
        let thisMonth = new Date(this.dateEnd.year, this.dateEnd.month, 0).getDate()
        let prevMnum = new Date(this.dateEnd.year, this.dateEnd.month - 1, 0).getDate()
        let dates = []

        for (let i = prevMnum - this.endOneDateWeek + 2; i <= prevMnum; i++) {
          dates.push({
            month: this.dateEnd.month - 1,
            date: i
          })
        }
        for (let i = 1; i <= thisMonth; i++) {
          dates.push({
            month: this.dateEnd.month,
            date: i
          })
        }
        for (let i = 1; i <= 43 - thisMonth - this.endOneDateWeek; i++) {
          dates.push({
            month: this.dateEnd.month + 1,
            date: i
          })
        }
        return dates
      },
      endOneDateWeek() {
        let oneDateWeek = new Date(this.dateEnd.year, this.dateEnd.month - 1, 1).getDay()
        return oneDateWeek == 0 ? 7 : oneDateWeek
      },
      activeDateVal(){
        if(this.dateStart.dateValue!=""){
          var dateStart = new Date(this.dateStart.dateValue)
        }else{
          var dateStart = new Date()
        }
        let yearStart = dateStart.getFullYear()
        let monthStart = dateStart.getMonth()+1
        let dayStart = dateStart.getDate()
        if(this.dateEnd.dateValue!=""){
          var dateEnd = new Date(this.dateEnd.dateValue)
        }else{
          var dateEnd = new Date()
        }
        let yearEnd = dateEnd.getFullYear()
        let monthEnd = dateEnd.getMonth()+1
        let dayEnd = dateEnd.getDate()
        console.log([
          {year:yearStart,month:monthStart,date:dayStart},
          {year:yearEnd,month:monthEnd,date:dayEnd}
        ])
        return [
          {year:yearStart,month:monthStart,date:dayStart},
          {year:yearEnd,month:monthEnd,date:dayEnd}
        ]
      }

    },
    watch: {

    },
  }
</script>
<style lang="scss" scoped="scoped">

  .picaker-daterange {
    .picaker-start{
      background-color: #FFFFFF;
      padding: 10px;
      position: absolute;
      border: 1px solid #cccccc;
      width: 245px;
      height: 272px;
      left: 0;
      top: 40px;
    }
    .picaker-end{
      background-color: #FFFFFF;
      padding: 10px;
      position: absolute;
      border: 1px solid #cccccc;
      width: 245px;
      height: 272px;
      left: 266px;
      top: 40px;
    }
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
    span {
      cursor: pointer;
      font-size: 14px;
      font-family: "宋体";
    }
  }

</style>
