<template>
    <div>
        <v-row>
            <v-col cols="12" lg="12" md="12">
                <v-card class="mx-auto mt-10" max-width="900" elevation="2">
                    <v-container>
                        <v-row>
                            <v-col class="d-flex aling-center justify-center">
                                <v-img min-width="250" class="ma-5" max-width="250"
                                    src="../assets/logo_caja_nuevo.png" />
                            </v-col>
                        </v-row>
                    </v-container>

                    <v-form class="ma-5 pa-5" v-model="valid" @submit.prevent="almacenarLocal">
                        <v-text-field ref="userFocus" v-model="user" label="Usuario" />
                        <v-text-field class="mt-2" v-model="password" :value="password" label="Contraseña"
                            :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'" @click:append="value = !value"
                            :type=" value ? 'password' : 'text' " :rules="[rules.password]" @input="_ => password = _">
                        </v-text-field>
                    </v-form>
                    <div class="ma-5 ">
                        <v-btn x-large type="submit" @click="persist" block elevation="2" color="primary">Ingresar
                        </v-btn>
                    </div>

                    <v-card-actions>
                        <v-card-text>
                            Olvidó su <a>Contraseña?</a>
                        </v-card-text>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>


<script>
import store from "../store";

export default {
    name: 'Login',

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
    beforeCreate() {

    },
    mounted() {
        this.$refs.userFocus.focus();
        if (localStorage.user) {
            this.user = localStorage.user;
        }
        if (localStorage.password) {
            this.password = localStorage.password;
        }
    },
    computed: {

    },

    methods: {
        persist() {
            localStorage.user = this.user;
            localStorage.password = this.password;
            if (localStorage.user == "Emanuel" && localStorage.password == "donato") {
                store.commit('changeAuthUser')
                this.$router.push('/dashboard')
            } else {
                this.$router.push('/login')
            };
        },
    }

}
</script>