<template>
	<div class="gh-date-picker">
		<div style="display: inline-block;">
			<div class="date-picker-inner" @click.stop style="width: 6.25rem;">
				<div class="gh-year-input">
					<input type="text" v-model="yearValue" @focus.stop="isShowList('year')">
					<i class="iconfont icon-triangle_down_fill"></i>
				</div>
				<div v-show="isShow.year" class="gh-date-select">
					<ul>
						<li class="itemList" v-for="item in list.year" :tabindex="item" @click="yearSelected(item)">
							{{item}}
						</li>
					</ul>
				</div>
			</div>
			<div class="date-picker-inner" @click.stop style="width: 6.25rem;">
				<div class="gh-month-input">
					<input type="text" v-model="monthValue" @focus.stop="isShowList('month')">
					<i class="iconfont icon-triangle_down_fill"></i>
				</div>
				<div v-show="isShow.month" class="gh-date-select">
					<ul>
						<li class="itemList" v-for="item in list.month" :tabindex="item" @click="monthSelected(item)">
							{{item}}
						</li>
					</ul>
				</div>
			</div>
			<div class="date-picker-inner" @click.stop style="width: 6.25rem;">
				<div class="gh-month-input">
					<input type="text" v-model="dayValue" @focus.stop="isShowList('day')">
					<i class="iconfont icon-triangle_down_fill"></i>
				</div>
				<div v-show="isShow.day" class="gh-date-select">
					<ul>
						<li class="itemList" v-for="item in list.day" :tabindex="item" @click="daySelected(item)">
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
	import dateRange from './dateRange.vue';
	export default {
		name: "ghDatePicker",
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
			}

		},
		created() {
			var _this = this
			document.addEventListener('click', function() {
				_this.isShow.year = false
				_this.isShow.month = false
				_this.isShow.day = false
			});
			this.getDate()
			this.setDate()
		},
		methods: {
			getDate() {
				var date = new Date()
				console.log(date);
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
			isShowList(type) {
				this.isShow[type] = true
			},
			yearSelected(val) {
				this.yearValue = val
				this.isShow.year = false
			},
			monthSelected(val) {
				this.monthValue = val
				this.isShow.month = false
			},
			daySelected(val) {
				this.dayValue = val
				this.isShow.day = false
			},
		},
		components: {
			dateRange
		},
	}
</script>

<style>
</style>
