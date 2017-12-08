// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MuseUI from 'muse-ui'
import router from './router'
import Axios from 'axios'
import VeeValidate from 'Vee-validate'

import 'muse-ui/dist/muse-ui.css'
import 'vue2-animate/dist/vue2-animate.min.css'

Vue.config.productionTip = false
Vue.use(MuseUI)
Vue.use(VeeValidate)
Vue.prototype.$http = Axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
