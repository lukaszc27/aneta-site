import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },

  {
    path: '/classes/1',
    name: 'Class1',
    component: () => import('../views/classes/1.vue')
  },
  {
    path: '/classes/2',
    name: 'Class2',
    component: () => import('../views/classes/2.vue')
  },
  {
    path: '/classes/3',
    name: 'Class3',
    component: () => import('../views/classes/3.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
