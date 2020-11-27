import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
Vue.use(VueRouter)
 const router=new VueRouter({
   routes:[
     {
       path:'/about',
       component:About
     },
     {
       path:"/home",
       component:Home
     },
     {
       path:'/',
       redirect:Home
     }
   ]
 })
 export default router