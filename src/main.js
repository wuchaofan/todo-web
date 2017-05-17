import Vue from 'vue'
import App from './App.vue'
import VueResource  from 'vue-resource'
import VueRouter from 'vue-router'
import router from  './router/router'
import 'font-awesome/css/font-awesome.min.css'
import Vuex from 'vuex'
import store from './store'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuex)

Vue.http.headers.common['Authorization'] = 'token none'
Vue.http.headers.common['Travis-API-Version'] = '3'

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
