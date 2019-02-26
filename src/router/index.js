import Vue from 'vue'
import Router from 'vue-router'

import Page404 from '@/views/404'
import Login from '@/views/login'
import Home from '@/views/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: '404',
      component: Page404
    },
    {
      path: '/',
      name: '登录',
      component: Login
    },
    {
      path: '/home',
      name: '主页',
      component: Home,
      children: [

      ]
    }
  ]
})
