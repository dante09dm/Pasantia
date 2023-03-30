import Vue from 'vue'
import Vuex from 'vuex'

// Manejar los estados del turnero en este archivo

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    fecha: '',
    hora: ''
  },

  getters: {
    fecha(state) {
      return state.fecha
    },
    hora(state) {
      return state.hora
    }
  },
  mutations: {
    setFecha(state, fecha) {
      state.fecha = fecha
    },
    setHora(state, hora) {
      state.hora = hora
    }
  },

  actions: {
    //llamados a API

    guardarFecha({ commit }, fecha) {
      commit('setFecha', fecha)
    },
    guardarHora({ commit }, hora) {
      commit('setHora', hora)
    },


  },
});




