import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Tx from '@/components/Tx'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        { path: '/Tx', component: Tx, name: '测试' },
      ]
    },
    // {
    //   path: '/',
    //   name: 'Tx',
    //   component: Tx
    // }
  ]
})
