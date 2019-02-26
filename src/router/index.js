import Vue from 'vue'
import Router from 'vue-router'

import Page404 from '@/views/404'
import Login from '@/views/login'

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
      component: Login,
      children: [

      ]
    }
  ]
})

// const page404 = r => require.ensure([], () => r(require('@/views/404')), '404')
// const Home = r => require.ensure([], () => r(require('@/views/home')), 'home')
// const Login = r => require.ensure([], () => r(require('@/views/login')), 'login')

// export default [
//   {
//     path: '*',
//     component: page404
//   },
//   {
//     path: '/',
//     component: App,
//     children: [
//       {
//         path: '/login',
//         component: Login,
//         name: '登录',
//         hidden: true
//       }
//       {
//         path: '/home',
//         component: Home,
//         name: '主页',
//         hidden: true
//       }
//     ]
//   }
// ]
