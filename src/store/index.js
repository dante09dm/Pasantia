import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    token: null,
    domicilio: '',
    telefono: '',
    email: '',
    user: '',
  },
  getters: {
    isAuthenticated(state) {
      return state.user != ''
    },

    user(state) {
      return state.user
    },

    domicilio(state) {
      return state.domicilio
    },

    email(state) {
      return state.email
    },

    telefono(state) {
      return state.telefono
    },
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload
    },

    setUser(state, user) {
      state.user = user
    },

    setDomicilio(state, domicilio) {
      state.domicilio = domicilio
    },

    setTelefono(state, telefono) {
      state.telefono = telefono
    },

    setEmail(state, email) {
      state.email = email
    },

    logout(state) {
      window.location.href = "/login"
      localStorage.removeItem('logUser')
      state.token = null
      state.user = ''
    },

  },

  actions: {
    //llamar a API
    /*     async getUser({ commit }, user) {
          let url = 'http://10.1.1.16:8084/getAfiliado';
          let data = { "nroafi": 18 };
    
          axios({
            method: 'post',
            url: url,
            withCredentials: false,
            data: JSON.stringify(data),
          })
            .then(function (response) {
              commit('setUser', response)
            })
            .catch(function (error) {
              console.log(error);
            });
        }, */


    async getDomcilios({ commit }, domicilios) {
      let url = 'http://10.1.1.16:8084/getDomicilioAfiliado'
      let data = { "nroafi": 18 }
      axios({
        method: 'post',
        url: url,
        withCredentials: false,
        data: JSON.stringify(data)
      })
        .then(function (response) {

          commit('setDomicilio', response)
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    /*
        async getTelefonos({ commit }, telefonos) {
          let url = 'http://10.1.1.16:8084/getTelefonoAfiliado'
          let data = { "nroafi": 18 }
          axios({ method: 'post', url: url, withCredentials: false, data: JSON.stringify(data) })
            .then(function (response) {
    
              commit('setTelefono', response)
            })
            .catch(function (error) {
              console.log(error);
            });
        },
        async getEmails({ commit }, emails) {
          let url = 'http://10.1.1.16:8084/getEmailAfiliado'
          let data = { "nroafi": 18 }
          axios({ method: 'post', url: url, withCredentials: false, data: JSON.stringify(data) })
            .then(function (response) {
    
              commit('setEmail', response)
            })
            .catch(function (error) {
              console.log(error);
            });
        }, */

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




