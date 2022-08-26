import Vue from 'vue'
import VueRouter from 'vue-router'
import AdministracionDeCategorias from '../views/AdministracionDeCategorias.vue'
import AdministracionEmergenciasMedicas from '../views/AdministracionEmergenciasMedicas.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import Modificacion from '../views/Modificacion.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/Login',
    name:'Login',
    component: Login
  },

  {
    path: '/Modificacion',
    name:'Modificacion',
    component: Modificacion
  },

 
  {
    path: '/Register',
    name:'Register',
    component: Register
  },

  {
    path: '/Dashboard',
    name:'Dashboard',
    component: Dashboard
  },

  {
    path: '/AdministracionDeCategorias',
    name: 'AdministracionDeCategorias',
    component: AdministracionDeCategorias
  },

  {
    path: '/AdministracionEmergenciasMedicas',
    name: 'AdministracionEmergenciasMedicas',
    component: AdministracionEmergenciasMedicas
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/* router.beforeEach((to, from, next) => {
  //Cuando un usuario no esta logeado solo tendra acceso a las publicPages
  const publicPages = ['/login'];
  const authRequired = ! publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn){
    return next('/login');
  }

  next();

}) */

export default router
