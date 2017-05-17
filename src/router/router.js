import VueRouter from 'vue-router'
import Home from '../pages/home.vue'
import Mobile from '../pages/mobile.vue'
import DetailPage from '../pages/detail.vue'

const routes = [
  { path: '/', component: Mobile },
  { path: '/detail/:id', component: DetailPage },
  { path: '/pc', component: Home }
]

const router = new VueRouter({
  routes 
})

export default router