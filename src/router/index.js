import { createRouter, createWebHistory } from 'vue-router';
import cv from '../components/cv.vue'
const routes = [
    { path: '/cv', components: cv },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;