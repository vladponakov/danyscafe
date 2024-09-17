import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Menu from '../views/Menu.vue'
import Cateringmeny from '../views/Cateringmeny.vue'
import Kontakt  from '../views/Kontakt.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/menu',
      name: 'Menu',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Menu.vue')
    },
    {
      path: '/cateringmeny',
      name: 'Cateringmeny',
      component: () => import('../views/Cateringmeny.vue')
    },
    {
      path: '/kontakt',
      name: 'Kontakt',
      component: () => import('../views/Kontakt.vue')
    }
  ]
})

export default router
