<template>
	<div class="gh-select" @click.stop>
		<div class="gh-select-input">
			<input type="text" :data-value="value" v-model="text" @focus.stop="isShowList">
			<i class="iconfont icon-triangle_down_fill"></i>
		</div>
		<div v-show="isShow" class="gh-select-box">
			<ul>
				<li v-for="item in searchSelect" class="gh-selelct-list" @click.stop="selected(item)">
					{{item.label}}
				</li>	
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: "ghSelect",
		data(){
			return {
				isShow:false,
				value:"",
				text:"",
				selectList:[{
					value:1,
					label:"选项一"
				},
				{
					value:2,
					label:"选项二"
				},
				{
					value:3,
					label:"选项三"
				}],
				searchSelect:[]
			}
		},
		props: {
			type: {
				type: String,
				default: "text"
			},
			border: {
				type: String
			}

		},
		created(){
			var _this=this
			document.addEventListener('click', function(){
				_this.isShow=false
			});
			this.searchSelect=this.selectList
		},
		methods:{
			selected(data){
				this.value=data.value
				this.text=data.label
				this.isShow=false
			},
			isShowList(){
				this.isShow=true
			}
		},
		watch: {
			text(newValue, oldValue) {	
				let data=this.selectList
				this.searchSelect = data.filter((value)=>{
					return value.label.includes(newValue)
				})
			}
		},
	}
</script>
<style lang="scss" scoped="scoped">
	
</style>
