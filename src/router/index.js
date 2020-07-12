import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:"/city"
  },
  {
    path:"/login",
    name:"login",
    component:()=>import("@/views/Login.vue"),
},
{
  path:"/films",
  name:"films",
  component:()=>import("@/views/Film.vue"),
},
{
  path:"/cinemadetail",
  name:"cinemadetail",
  component:()=>import("@/views/cinemadetail.vue"),
},
{
  path:"/city",
  name:"city",
  component:()=>import("@/views/City.vue"),
},
  {
    path:"/main",
    name:"main",
    component:()=>import("@/views/Main.vue"),
    children:[
      {
        path:"movie",
        name:"movie",
        component:()=>import("@/views/Movie.vue"),
    },
    {
      path:"cinema",
      name:"cinema",
      component:()=>import("@/views/Cinema.vue"),
  },
  {
    path:"mine",
    name:"mine",
    component:()=>import("@/views/Mine.vue"),
  },
  {
  path:"news",
  name:"news",
  component:()=>import("@/views/News.vue"),
  },
    ]
  }
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router
