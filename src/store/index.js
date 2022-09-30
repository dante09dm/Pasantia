import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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

    setDomicilios(state, domicilios) {
      state.domicilios = domicilios;
    },
    logout(state) {
      window.location.href = "/login"
      localStorage.removeItem('logUser')
      state.user = ''
    },

    clearToken(state) {
      state.token = null;
      localStorage.removeItem("token");
    },

    clearUser(state) {
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
    getToken({ commit }) {
      if (localStorage.getItem('token')) {
        commit('setToken', localStorage.getItem('token'))
      } else {
        commit('setToken', null)
      }
    },

    cerrarSesion({ commit }, user) {
      commit('logout', user)
    }
  },

});




