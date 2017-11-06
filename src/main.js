import Vue from 'vue'
import VueResource from 'vue-resource'
import store from './store.js'
import router from './router.js'
import App from './App'
import './ie.polyfills.js'

Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
