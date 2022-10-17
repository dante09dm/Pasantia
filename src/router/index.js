import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import PreAfiliacion from '../views/PreAfiliacion.vue'
import Dashboard from '../views/Dashboard.vue'
import Notificaciones from '../views/Notificaciones.vue'
import EditPhone from '../views/editarContactos/EditPhone.vue'
import EditAddress from '../views/editarContactos/EditAddress.vue'
import EditEmail from '../views/editarContactos/EditEmail.vue'
import Boletas from '../views/Boletas.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
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
    path: '/PreAfiliacion',
    name: 'PreAfiliacion',
    component: PreAfiliacion
  },

  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/Boletas',
    name: 'Boletas',
    component: Boletas,
  },
  {
    path: '/Notificaciones',
    name: 'Notificaciones',
    component: Notificaciones,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  //Cuando un usuario no esta logeado solo tendra acceso a las publicPages
  const publicPages = ['login'];
  const authRequired = publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('logUser');
  if (authRequired && !loggedIn) {
    return next('login');
  }
  next();

})
export default router
