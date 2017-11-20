import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import New from '@/components/New'
import Trailer from '@/components/Trailer'
import Detail from '@/components/Detail'
import my from '@/components/my'
import login from '@/components/login'
import register from '@/components/register'
import cart from '@/components/cart'
// import Order from '@/components/Order'


Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
      	{
      		path: 'new',
		      name: 'New',
		      component: New,
      	},
      	{
      		path: 'trailer',
		      name: 'Trailer',
		      component: Trailer,
      	},

      ]
    },
    {
      path: '/detail/:fid/:ftype',//动态路由传参
      name: 'Detail',
      component: Detail
    },
    {
      path: '/my',//动态路由传参
      name: 'my',
      component: my
    },
     {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
     {
      path: '/cart',
      name: 'cart',
      component: cart
    },

  ]
})
