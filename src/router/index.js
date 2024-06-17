import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import TecnologiasView from '../views/TecnologiasView.vue'
import ProyectosView from '../views/ProyectosView.vue'

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
      component: AboutView
    },
    {
      path: '/tecnologias',
      name: 'tecnologias',
      component: TecnologiasView
    },
    {
      path:'/proyectos',
      name:'proyectos',
      component: ProyectosView
    }
  ]
})

export default router
