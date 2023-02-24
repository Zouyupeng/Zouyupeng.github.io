import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: () => import('@/layout/SwitchIndex.vue'),
      redirect: '/',
      children: [
        {
          path: '/',
          name: 'HomePage',
          meta: {
            title: 'Oceanknight'
          },
          component: () => import('@/views/HomePage.vue')
        }
      ]
    }
  ]
})

export default router
