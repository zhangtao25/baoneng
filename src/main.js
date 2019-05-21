import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 装载element ui
import ele from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ele);

// 装载vue裁剪组件
import VueCropper from 'vue-cropper';
Vue.use(VueCropper);

window.gApp = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

