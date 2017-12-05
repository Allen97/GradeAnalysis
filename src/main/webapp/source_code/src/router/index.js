import Vue from 'vue'
import Router from 'vue-router'

import Login from '*/Login'

Vue.use(Router)

// const asyncLoad = url => import(url)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
