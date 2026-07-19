import { createRouter, createWebHistory } from 'vue-router'
import { HomePage } from '@/pages/HomePage'
import { YourProjectPage } from '@/pages/YourProjectPage'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/your-project',
      name: 'your-project',
      component: YourProjectPage,
    },
  ],
})

export default router
