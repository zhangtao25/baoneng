import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/login',
      component:()=>import('./views/login')
    },
    {
      path:'/main',
      component:()=>import('./views/main'),
      children:[
        {
          path:'page1',
          component:()=>import('./views/page1')
        },
        {
          path:'page2',
          component:()=>import('./views/page2')
        }
      ]
    }
  ]
})
