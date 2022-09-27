import Vue from 'vue'
import VueRouter from 'vue-router'
import AdministracionDeCategorias from '../views/AdministracionDeCategorias.vue'
import AdministracionEmergenciasMedicas from '../views/AdministracionEmergenciasMedicas.vue'
import EmergenciasMedicas from '../views/EmergenciasMedicas.vue'
import Login from '../views/Login.vue'
import PreAfiliacion from '../views/PreAfiliacion.vue'
import Dashboard from '../views/Dashboard.vue'
import Modificacion from '../views/Modificacion.vue'
import EditPhone from '../views/EditPhone.vue'
import EditAddress from '../views/EditAddress.vue'
import EditEmail from '../views/EditEmail.vue'


Vue.use(VueRouter)

const routes = [

  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/EditPhone',
    name: 'EditPhone',
    component: EditPhone
  },
  {
    path: '/EditAddress',
    name: 'EditAddress',
    component: EditAddress
  },
  {
    path: '/EditEmail',
    name: 'EditEmail',
    component: EditEmail
  },

  {
    path: '/Modificacion',
    name: 'Modificacion',
    component: Modificacion
  },

  {
    path: '/PreAfiliacion',
    name: 'PreAfiliacion',
    component: PreAfiliacion
  },

  {
    path: '/Dashboard/',
    name: 'Dashboard',
    component: Dashboard,
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
  {
    path: '/EmergenciasMedicas',
    name: 'EmergenciasMedicas',
    component: EmergenciasMedicas
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/*  router.beforeEach((to, from, next) => {
  //Cuando un usuario no esta logeado solo tendra acceso a las publicPages
  const publicPages = ['login'];
  const authRequired =  publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');
  if (authRequired && !loggedIn){
    return next('/login');
  }

  next();

}) */

export default router
