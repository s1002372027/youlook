import Vue from 'vue'
import App from './App.vue'
import './assets/css/ghui.scss'
import common from "./assets/js/common.js"
import components from "./components/index.js"

Vue.use(components)
Vue.prototype.common=common
new Vue({
  el: '#app',
  render: h => h(App)
})
