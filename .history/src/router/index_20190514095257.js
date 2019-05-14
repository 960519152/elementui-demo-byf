import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
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
      iconCls: 'el-icon-platform-eleme',
      children: [
        { path: '/Tx', component: Tx, name: '菜单1' },
        { path: '/Tes', component: Tes, name: '菜单2' }
      ]
    },
    {
      path: '/',
      name: 'HelloWorld',
      leaf: true,//只有一个节点
      component: Home,
      iconCls: 'el-icon-s-home',
      children: [
        { path: '/HelloWorld', component: HelloWorld, name: '单独的' },
      ]
    }
  ]
})
