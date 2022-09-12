import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default ({
    namespaced: true,

    state: {
        Items: [],
    },
    getters: {
        Items(state) {
            return state.Items;
        },

    },
    mutations: {
        cargaItems(state, data) {
            state.Items = data;
        }
    },
    actions: {
        cargaItems: async function ({ commit }) {
            try {
                const response = await axios
                    .get("https://my-json-server.typicode.com/Emanuelm26/HomeSwitchHome/data")
                     commit('cargaItems', response.data)
                    .then(response => (this.Items = response.data))
                    .catch(error => console.log(error))
            } catch (e) {
                console.log(e);
            }
        }
    },
    modules: {

    },
});
