import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    token: null,
    user: {},
    authUser: false,
  },
  getters: {
    isAuthenticated(state) {
      return state.token != null;
    },

    user(state) {
      return state.user;
    }
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },
    setAuthUser(state, payload) {
      state.authUser = payload
      localStorage.getItem("user")
    },
    setUser(state, user) {
      state.user = user;
    },
    logout() {
      localStorage.removeItem('token')
      this.$router.push('/login')
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
    changeAuthUser(state) {
      state.authUser = !state.authUser;
    },


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
  },
});

 

