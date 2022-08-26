<template>
    <v-container fluid>
        <v-layout align-center justify-center>
            <v-card width="500" elevation="2">
                <div align="center" valign="center">
                    <v-img class="ma-7" max-heigth="85" max-width="288" src="../assets/logo_caja_nuevo.png" />
                </div>
                <v-spacer></v-spacer>
                <div class="pa-10">
                    <v-form v-model="valid" @submit.prevent="login">
                        <v-text-field v-model="email" label="Email" />
                        <v-text-field v-model="password" type="current-password" :value="password" label="Contraseña"
                            :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'" @click:append="() => (value = !value)"
                            :type="value ? 'password' : 'text'" :rules="[rules.password]" @input="_ => password = _">
                        </v-text-field>
                    </v-form>
                    <div class="pt-2">
                        <v-btn type="submit" block elevation="2" color="primary">Acceder</v-btn>
                    </div>
                </div>
                <v-divider></v-divider>
                <v-card-actions class="pa-1">
                    <v-card-text>
                        Olvidó su <a>Contraseña?</a>
                    </v-card-text>
                </v-card-actions>
            </v-card>
        </v-layout>
    </v-container>
</template>

<script>

import store from "../store/index.js";

export default {
    name: 'Login',

    data: () =>
    ({
        email: '',
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

    mutations: {
        async login() {
            try {
                await store.login(this.email, this.password);
                this.$router.push('dashboard')
            } catch (error) {
                this.error = true;
            }
            console.log(this.email);
            console.log(this.password);
        }
        /*         process() {
                    this.$v.$touch();
                    if (this.$v.$invalid) {
                        return false;
                    }
                    var config = {
                        headers: {
                            "Content-Type": "aplication/json"
                        }
                    }
                    var serve = process.env.VUE_APP_PDF;
                    var url = serve + 'login/user';
                    axios
                        .post(url, this.user, config)
                        .then((response) => {
                            if (response.status == 200) {
                                console.log(response)
                            }
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                } */
    },
}
</script>