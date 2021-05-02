import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () => import ("../views/Inicio.vue")
  },
  {
    path: '/discos/:nombre',
    name: 'Disco',
    component: () => import ("../views/Disco.vue")
  },
  {
    path: '/:pathMatch(.*)',
    name: 'notFound',
    component: () => import ('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
