import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    token: null,
    user: '',
    domicilio: '', 
  },
  getters: {
    isAuthenticated(state) {
      return state.user != '';
    },

    user(state) {
      return state.user;
    },
    contacto(state) {
      return state.contacto;
    }
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },

    setUser(state, user) {
      state.user = user;
    },
    setContacto(state, contacto) {
      state.contacto = contacto;
    },
    logout(state, user) {
      state.user = ""
      localStorage.removeItem("logUser")
      window.location.href = "/login"
    },

    clearToken(state) {
      state.token = null;
      localStorage.removeItem("token");
    },
    /*     
    El siguiente metodo es para
    probar la autenticacion sin
    necesidad de token
    (borrar al implementar jwt) 
    */

    clearUser(state){
      state.user = {};
      localStorage.removeItem("logUser")
    }


  },
  //llamada asincronica a API
  actions: {
    async getUser({ commit }, user) {
      try {
        const res = await fetch('https://my-json-server.typicode.com/Emanuelm26/HomeSwitchHome/db', {
          methods: 'POST',
          headers: { 'Content-Type': 'aplication/json' },
          body: JSON.stringify(user)
        })
        const json = await res.json()
        commit('setUser', json.data)
      } catch (error) {
        console.log('Error: ', error)
      }
    },
    async getContactos({ commit }, contacto) {
      try {
        const res = await fetch('https://my-json-server.typicode.com/Emanuelm26/sortear/db', {
          methods: 'POST',
          headers: { 'Content-Type': 'aplication/json' },
          body: JSON.stringify(contacto)
        })
        const json = await res.json()
        commit('setContacto', json.data)
      } catch (error) {
        console.log('Error: ', error)
      }
    },
    cerrarSesion({ commit }, user){
      commit('logout', user)
    }
  },

});


 

