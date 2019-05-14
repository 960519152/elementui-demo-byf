import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Tx from '@/components/Tx'
import Tes from '@/components/Tes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '主要菜单',
      component: Home,
      children: [
        { path: '/Tx', component: Tx, name: '菜单1' },
        { path: '/Tes', component: Tes, name: '菜单2' }
      ]
    },
    {
      path: '/',
      name: '主要菜单',
      component: Home,
      children: [
        { path: '/Tx', component: Tx, name: '菜单1' },
        { path: '/Tes', component: Tes, name: '菜单2' }
      ]
    },
  ]
})
