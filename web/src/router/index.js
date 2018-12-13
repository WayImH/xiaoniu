import Vue from 'vue'
import Router from 'vue-router'
import reg from '@/page/reg'
import login from '@/page/login'
import index from '@/page/index'
import list from '@/page/list'
import detail from '@/page/detail'
import fav from '@/page/fav'
import order from '@/page/order'
import user from '@/page/user'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/reg',
      name: 'reg',
      component: reg
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/fav',
      name: 'fav',
      component: fav
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/order',
      name: 'order',
      component: order
    }
  ]
})
