import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Save from '@/views/save'
import Stake from '@/views/stake'
import Governance from '@/views/governance'
import Stats from '@/views/stats'
import Redeem from '@/views/redeem'
import Samecoinadmin from '@/views/samecoinadmin'

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
    },
    {
      path: '/samecoinadmin',
      name: 'samecoinadmin',
      component: Samecoinadmin
    }
  ]
})
