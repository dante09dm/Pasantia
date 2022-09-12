<template>
    <v-container>
        <v-layout row wrap align-center>
            <v-card width="600" elevation="2">
                <div align="center" valign="center">
                    <v-img class="ma-5" max-width="288" src="../assets/logo_caja_nuevo.png" />
                </div>
                <div class="ma-5">
                    <v-form v-model="valid">
                        <v-text-field outlined ref="emailFocus" v-model="user" label="Usuario" />
                        <v-text-field outlined v-model="password" :value="password" label="Contraseña"
                            :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'" @click:append="value = !value"
                            :type="value ? 'password' : 'text'" :rules="[rules.password]" @input="_ => password = _">
                        </v-text-field>
                    </v-form>
                    <div class="mt-2">
                        <v-btn dark type="submit" @click="persist" block elevation="2" color="primary">Acceder</v-btn>
                    </div>
                </div>
                <v-divider></v-divider>
                <v-card-actions class="ma-1">
                    <v-card-text>
                        Olvidó su <a>Contraseña?</a>
                    </v-card-text>
                </v-card-actions>
            </v-card>
        </v-layout>
    </v-container>
</template>

<script>
import { mapState } from 'vuex';
import store from '../store';


export default {
    name: 'Login2',

    data: () =>
    ({

        user: '',
        password: '',
        error: false,

        valid: true,
        value: true,
        rules: {
            required: value => !!value || "Requerida.",
            password: value => {
                const pattern = /^(?=.*[a-z])(?=.{6,})/;
                //const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;
                return (
                    //pattern.test(value) || "Min. 8 caracteres con al menos una letra mayuscula, un número y un caracter especial."
                    pattern.test(value) || "Min. 6 caracteres en minusculas."
                );
            }
        },
    }),
    create() {

    },
    mounted() {
        this.$refs.emailFocus.focus();
        if (localStorage.user) {
            this.user = localStorage.user;
        }
        if (localStorage.password) {
            this.password = localStorage.password;
        }
    },
    computed: mapState(['authUser']),
    watch: {

    },

    methods: {
        persist() {
            localStorage.user = this.user;
            localStorage.password = this.password;
            if (localStorage.user == "Emanuel" && localStorage.password == "donato") {
                store.commit('changeAuthUser')
                console.log(store.state.authUser)
                this.$router.push('/dashboard')
            };
        }
    }

}
</script>