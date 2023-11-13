import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Volkswagen from "@/views/Volkswagen.vue";
import Audi from "@/views/Audi.vue";
import BMW from "@/views/BMW.vue";
import MercedesBenz from "@/views/MercedesBenz.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/folder/Inbox'
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/FolderPage.vue')
  },
  {
    path: '/volkswagen',
    name: 'Volkswagen',
    component: () => import('@/views/Volkswagen.vue')
  },
  {
    path: '/Audi',
    name: 'Audi',
    component: () => import('@/views/Audi.vue')
  },
  {
    path: '/BMW',
    name: 'BMW',
    component: () => import('@/views/BMW.vue')
  },
  {
    path: '/mercedesbenz',
    name: 'MercedesBenz',
    component: () => import('@/views/MercedesBenz.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
