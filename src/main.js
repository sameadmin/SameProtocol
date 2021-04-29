import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueClipboard from 'vue-clipboard2'
Vue.use( VueClipboard )

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

import animated from 'animate.css'
Vue.use(animated)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
