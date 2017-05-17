import VueRouter from 'vue-router'
import Home from '../pages/home.vue'
import Mobile from '../pages/mobile.vue'
import DetailPage from '../pages/detail.vue'
import PcPage from '../pages/pc.vue'

const routes = [
  { path: '/', component: Mobile },
  { path: '/detail/:id', component: DetailPage },
  { path: '/pc', component: PcPage }
]

const router = new VueRouter({
  routes 
})

export default router