import Vue from 'vue'
import App from './App.vue'
import './assets/css/ghui.scss'
import components from "./components/index.js"

Vue.use(components)
new Vue({
  el: '#app',
  render: h => h(App)
})
