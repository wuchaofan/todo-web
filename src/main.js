import Vue from 'vue'
import App from './App.vue'
import VueResource  from 'vue-resource'
import VueRouter from 'vue-router'
import router from  './router/router'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.headers.common['Authorization'] = 'token tGJYgsYWPSXq1yBYDvmqtg'
Vue.http.headers.common['Travis-API-Version'] = '3'

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
