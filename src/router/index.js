import Vue from 'vue'
import VueRouter from 'vue-router'

import Turnos from '../views/Turnos.vue'
import Menu from '../views/Menu.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Turnos',
    component: Turnos, 
    
  },
  {
    path: '*',
    name: 'Turnos',
  },
  {
    path: '*',
    name: 'Menu',
  },
 
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


