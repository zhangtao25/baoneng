export default [
  {
    path:'/main/home',
    component:()=>import('../views/home')
  },
  {
    path:'page1',
    component:()=>import('../views/page1')
  },
  {
    path:'page2',
    component:()=>import('../views/page2')
  }
]