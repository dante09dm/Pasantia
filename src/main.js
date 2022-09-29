import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'

//Se permiten las credenciales
axios.defaults.withCredentials = true
axios.defaults.headers['Content-Type']='aplication/json';
// axios.defaults.headers['Authorization']=$store.get;

//Emanuel 30/08/22
/* var token = JSON.parse(localStorage.getItem('token'));
var url = process.env.ENDPOINT_PATH + '/login';
if(token){
  window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}
 */
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
