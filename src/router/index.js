import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/pc20tk-link/',
    component: () => import(/* webpackChunkName: "akizukibig" */ '../views/LCD.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes
})

export default router
