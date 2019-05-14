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
    },
    {
      path: '/',
      component: Home,
      name: '导航一',
      iconCls: 'el-icon-message',//图标样式class
      children: [
          { path: '/main', component: Main, name: '主页', hidden: true },
          { path: '/form', component: Form, name: 'Form' },
          { path: '/table', component: Table, name: 'Table' },
          { path: '/user', component: user, name: '列表' },
      ]
  },
  ]
})
