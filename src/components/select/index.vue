<template>
  <div  ref="select" :class="{'select-disabled':disabled}"  class="gh-select" @click="isShowList" tabindex="-1" >
    <div class="gh-select-input">
      <input type="text" :data-value="value" v-model="text" :readonly="!isSearch" :disabled="disabled" >
      <i class="iconfont icon-triangle_down_fill"></i>
    </div>
    <transition name="slide-fade">
      <div v-show="isShow" class="gh-select-box">
        <ul v-if="searchSelect.length>0">
          <li v-for="item in searchSelect" :data-index="item.value" class="gh-selelct-list">
            {{item.label}}
          </li>
        </ul>
        <div v-else class="select-no">
            暂无数据
        </div>
      </div>
    </transition>
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
        searchSelect: []
      }
    },
    props: {
      selectList: {
        type: Array
      },
      isSearch:{
        type:Boolean,
        default:false
      },
      disabled:{
        type:Boolean,
        default:false
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
        if(!this.disabled){
          if (event.target.tagName == "INPUT") {
            this.isShow = !this.isShow
          } else if (event.target.tagName == "LI") {
            this.value = event.target.dataset.index
            this.text = event.target.innerText
            this.isShow = !this.isShow

          }else{
            this.isShow = !this.isShow
          }

        }

      }
    },
    watch: {
      text(newValue, oldValue) {
        let data = this.selectList
        this.searchSelect = data.filter((value) => {
          return value.label.includes(newValue)
        })
      },
      value(newValue, oldValue){
        this.$emit("change",{value:this.value,text:this.text})
      }
    },
  }
</script>
<style lang="scss" scoped="scoped">
  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all .5s ease;
  }

  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 1.0);
  }

  .slide-fade-enter,
  .slide-fade-leave-to

  /* .slide-fade-leave-active for below version 2.1.8 */
    {
    transform: translateY(10px);
    opacity: 0;
  }
</style>
