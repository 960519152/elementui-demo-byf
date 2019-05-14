import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Tx from '@/components/Tx'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '主页',
      component: Home,
      children: [
        { path: '/Tx', component: Tx, name: '测试' },
      ]
    }
  ]
})
