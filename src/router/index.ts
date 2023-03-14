import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('../views/Favorites.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductPage.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Cart.vue')
    },    
  ]
})

export default router