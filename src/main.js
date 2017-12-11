import Vue from 'vue'
import App from './App.vue'
import './common/css/reset.scss'
new Vue({
  el: '#app',
  render: h => h(App)
});
var remHtml = document.querySelector('html');
var remWidth = remHtml.getBoundingClientRect().width;
remHtml.style.fontSize = remWidth/10 + 'px';
