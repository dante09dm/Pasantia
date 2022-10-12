import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    token: null,
    domicilios: [],
    telefonos: [],
    emails: [],
    user: '',
  },
  getters: {
    isAuthenticated(state) {
      return state.user != ''
    },

    user(state) {
      return state.user
    },

    domicilios(state) {
      return state.domicilios
    }
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload
    },

    setUser(state, user) {
      state.user = user
    },

    setDomicilios(state, domicilios) {
      state.domicilios = domicilios
    },

    setTelefonos(state, telefonos) {
      state.telefonos = telefonos
    },

    setEmails(state, emails) {
      state.emails = emails
    },

    logout(state) {
      window.location.href = "/login"
      localStorage.removeItem('logUser')
      state.token = null
      state.user = ''
    },

  },

  /*     async getUser({ commit }, user) {
        try {
          const res = await axios('http://10.1.1.19:8084/getAfiliado', {
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
   */

  actions: {
    //llamar a API
    async getUser({ commit }, user) {
      let url = 'http://10.1.1.19:8084/getAfiliado';
      let data = { "nroafi": user };

      axios({
        method: 'post', url: url, withCredentials: false, data: JSON.stringify(data)
      })
        .then(function (response) {
          commit('setUser', response)
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    async getDomcilios({ commit }, domicilios) {
      let url = 'http://10.1.1.19:8084/getDomicilioAfiliado'
      let data = { "domicilio": domicilios }
      axios({ method: 'POST', url, withCredentials: false, data: JSON.stringify(data) })
        .then(function (response) {

          commit('setDomicilios', response)
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    async getTelefonos({ commit }, telefonos) {
      let url = 'http://10.1.1.19:8084/getTelefonoAfiliado'
      let data = { "telefono": telefonos }
      axios({ method: 'POST', url, withCredentials: false, data: JSON.stringify(data) })
        .then(function (response) {

          commit('setTelefonos', response)
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    async getEmails({ commit }, emails) {
      let url = 'http://10.1.1.19:8084/getEmailAfiliado'
      let data = { "email": emails }
      axios({ method: 'POST', url, withCredentials: false, data: JSON.stringify(data) })
        .then(function (response) {

          commit('setEmails', response)
        })
        .catch(function (error) {
          console.log(error);
        });
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




