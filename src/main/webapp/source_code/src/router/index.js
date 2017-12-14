import Vue from 'vue'
import Router from 'vue-router'

import Login from '*/Login/Login'
import AdminHome from '*/Admin'
import AdminIndex from '*/Segment/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Admin',
      component: AdminHome,
      children: [
        {
          path: '/',
          name: 'Index',
          component: AdminIndex
        }
      ]
    }
  ]
})
