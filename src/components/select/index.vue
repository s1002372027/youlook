<template>
	<div ref="select" class="gh-select" @click="isShowList" tabindex="-1">
		<div class="gh-select-input">
			<input type="text" :data-value="value" v-model="text">
			<i class="iconfont icon-triangle_down_fill"></i>
		</div>
		<div v-show="isShow" class="gh-select-box">
			<ul>
				<li v-for="item in searchSelect" :data-index="item.value" class="gh-selelct-list">
					{{item.label}}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: "ghSelect",
		data() {
			return {
				isShow: false,
				value: "",
				text: "",
				selectList: [{
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
				searchSelect: []
			}
		},
		props: {
			type: {
				type: String,
			}
		},
		created() {
			var _this = this
			document.addEventListener('click', function(event) {
				const e = event || window.event
				if (_this.$refs.select && !_this.$refs.select.contains(e.target)) {
					_this.isShow = false
				}
			});
			this.searchSelect = this.selectList
		},
		methods: {
			isShowList(event) {
				if (event.target.tagName == "INPUT") {
					this.isShow = !this.isShow
				} else if (event.target.tagName == "LI") {
					this.value = event.target.dataset.index
					this.text = event.target.innerText
					this.isShow = !this.isShow
				}
			},
		},
		watch: {
			text(newValue, oldValue) {
				let data = this.selectList
				this.searchSelect = data.filter((value) => {
					return value.label.includes(newValue)
				})
			}
		},
	}
</script>
<style lang="scss" scoped="scoped">

</style>
