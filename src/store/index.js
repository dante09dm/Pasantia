import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    token: null,
    domicilios: null,
    user: '',
  },
  getters: {
    isAuthenticated(state) {
      return state.user != '';
    },

    user(state) {
      return state.user;
    },

    domicilios(state) {
      return state.domicilios;
    }
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },

    setUser(state, user) {
      state.user = user;
    },

    setDomicilios(state, domicilios){
      state.domicilios = domicilios;
    },
    logout() {
      state.removeItem('token')
      localStorage.removeItem("logUser")
    },

    clearToken(state) {
      state.token = null;
      localStorage.removeItem("token");
    },

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
    getToken({commit}){
      if(localStorage.getItem('token')){
        commit('setToken', localStorage.getItem('token'))
      }else{
        commit('setToken', null)
      }
    },
    async getDomicilios({commit}, domicilios ){
      try {
        const res = await fetch('http://localhost:8083/getDomicilios', {
          methods: 'POST',
          headers: { 'Content-Type': 'aplication/json' },
          body: JSON.stringify(domicilios)
        })
        const json = await res.json()
        commit('setDomicilios',json.data);
      } catch(error){
        console.log('Error: ', error)
      }
    },
/*     async getContactos({ commit }, contacto) {
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
    }, */
    cerrarSesion({ commit }, user){
      commit('logout', user)
    }
  },

});


 

