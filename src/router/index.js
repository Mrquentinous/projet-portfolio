import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../homeView.vue'
import pageError from '../pageError.vue'





const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/:catchAll(.*)',
        component: pageError,
      }
    ]
  })
  
  export default router