import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 装载element ui
import ele from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ele);

window.gApp = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

