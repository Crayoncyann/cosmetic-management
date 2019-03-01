import Vue from 'vue'
import Router from 'vue-router'

import Page404 from '@/views/404'
import Login from '@/views/login'
import Home from '@/views/home'
// 订单信息
import Count from '@/views/orderInfo/count'
import Complete from '@/views/orderInfo/complete'
import Uncomplete from '@/views/orderInfo/uncomplete'
// 用户信息
// 产品
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
        { path: 'count', component: Count, name: '统计', hidden: true },
        { path: 'complete', component: Complete, name: '已完成', hidden: true },
        { path: 'uncomplete', component: Uncomplete, name: '未完成', hidden: true },
      ]
    }
  ]
})
