import Vue from 'vue'
import App from './App.vue'
import { initNav } from './initNav.js'

new Vue({
  el: '#app',
  render: h => h(App)
})


initNav();
