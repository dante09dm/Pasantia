import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    token: null,
    users: [],
    authUser: false,
  },
  getters: {
    isAuthenticated(state) {
      return state.token != null;
    },

    users(state) {
      return state.users;
    }
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },
    setAuthUser(state, payload) {
      state.authUser = payload
    },
    setUser(state, payload){
      state.users = payload;
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
    cargaUser: async function ({ commit }) {
      try {
        const response = await axios
          .get("https://my-json-server.typicode.com/Emanuelm26/HomeSwitchHome/data")
          .then(response => (this.users = response))
          .catch(error => console.log(error))
          commit('setUsers', users)
      } catch (e) {
        console.log(e);
      }
    }
  },
  modules: {

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

});
