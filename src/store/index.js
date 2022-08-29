import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
/*
var config = {
  headers: {
    "Content-Type": "aplication/json"
  }
}
var serve = process.env.ENDPOINT_PATH;
var url = serve + '/api/login';
*/

export default new Vuex.Store({
  state: {
    token: '',
    email: '',
    password: '',
  },
  mutations: {
  },
  actions: {
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
