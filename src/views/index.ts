import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import Volkswagen from "@/views/Volkswagen.vue";
import Audi from "@/views/Audi.vue";
import BMW from "@/views/BMW.vue";
import MercedesBenz from "@/views/MercedesBenz.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/volkswagen',
    name: 'Volkswagen',
    component: Volkswagen
  },
  {
    path: '/audi',
    name: 'Audi',
    component: Audi
  },
  {
    path: '/bmw',
    name: 'BMW',
    component: BMW
  },
  {
    path: '/mercedesbenz',
    name: 'MercedesBenz',
    component: MercedesBenz
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
