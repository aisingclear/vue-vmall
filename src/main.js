import Vue from 'vue'
import App from './App.vue'
import './common/css/reset.scss'
import router from './router/router.js'
// rem屏幕适配
import './common/js/rem.js'
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

