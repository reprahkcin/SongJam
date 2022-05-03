import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('@/views/Main.vue')
  }
]

const router = createRouter({
  mode: 'history',
  linkExactActiveClass: 'fw-bold',
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
