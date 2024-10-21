import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import HomeView from '@/pages/HomeView.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        component: HomeView
      }
    ]
  },
  {
    path: '/add',
    component: () => import('@/layouts/AddLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('@/pages/AddContact.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
