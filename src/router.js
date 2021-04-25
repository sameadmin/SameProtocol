/*
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/!* webpackChunkName: "about" *!/ './views/About.vue')
    }
  ]
})
*/
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Save from '@/views/save'
import Stake from '@/views/stake'
import Governance from '@/views/governance'
import Stats from '@/views/stats'
import Redeem from '@/views/redeem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Save',
      name: 'Save',
      component: Save
    },
    {
      path: '/Stake',
      name: 'Stake',
      component: Stake
    },
    {
      path: '/Governance',
      name: 'Governance',
      component: Governance
    },
    {
      path: '/Stats',
      name: 'Stats',
      component: Stats
    },
    {
      path: '/Redeem',
      name: 'Redeem',
      component: Redeem
    }
  ]
})
