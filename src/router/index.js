import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import mainRouterConfig from './main-router-config'

export default new Router({
  routes: [
    {
      path:'/login',
      component:()=>import('../views/login')
    },
    {
      path:'/main',
      component:()=>import('../views/main'),
      children: mainRouterConfig
    }
  ]
})
