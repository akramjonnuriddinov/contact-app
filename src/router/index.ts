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
        component: HomeView,
      },
    ],
  },
  {
    path: '/add',
    component: () => import('@/layouts/AddLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('@/pages/AddView.vue'),
      },
      {
        name: 'edit',
        path: '/edit/:id',
        component: () => import('@/pages/EditView.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
