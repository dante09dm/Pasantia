import Vue from 'vue'
import Vuex from 'vuex'
import afiliados from './afiliados'
/*
Mail y contraseña para test
de login correcto

eve.holt@reqres.in
cityslicka
*/
  
Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    token: null,
    authUser: false,
  },
  getters: {
      isAuthenticated(state){
        return state.token != null;
      }
  },
  mutations: {
    setToken(state, payload){
      state.token = payload;
    },
    setAuthUser(state){
      state.authUser = payload
    },

    
    /*     
    El siguiente metodo es solo 
    para probar la autenticacion sin
    necesidad de token 
    */
    changeAuthUser(state){
      state.authUser = !state.authUser
    },



    clearToken(state){
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  actions: {
    //llamada asincronica a API

  },
  modules: {
    afiliados,
  },
  /*
   
  login(email, password) {
    const user = { email, password };
    axios
      .post(url, this.user, config)
      .then((response) => {
        if (response.status == 200) {
          console.log(response)
        }
      })
      .catch((error) => {
        console.log(error)
      });
  },
*/
  /*   setToken(state, payload) {
    state.token = payload
  },
    setUser(state, payload) {
    state.users.name = payload.name
      state.users.email = payload.email
  
  },
    logout() {
    localStorage.removeItem('token')
      location.reload()
  
      */
    
          //cuando tenga acceso a la API 
          /*     
           async login({ commit }, user) {
             try {
               const res = await fetch('http://api', {
                 methods: 'POST',
                 headers: { 'Content-Type': 'aplication/json' },
                 body: JSON.stringify(user)
               })
               const userDB = await res.json()
               commit('setToken', userDB.data.token)
               localStorage.setItem('token', userDB.data.token)
             } catch (error) {
               console.log('Error: ', error)
             }
           }
          */

  });
