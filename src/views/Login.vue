<template>
    <div>
        <v-container class="justify-center aling-center">
            <v-row>
                <v-col cols="12" lg="12" md="12">
                    <v-card class="mx-auto" max-width="600" elevation="2">
                        <Alerta v-if="error" type="error" msg="Usuario o contraseña incorrectos." />
                        <v-container>
                            <v-row>
                                <v-col class="d-flex aling-center justify-center">
                                    <v-img min-width="250" class="ma-5" max-width="250"
                                        src="../assets/logo_caja_nuevo.png" />
                                </v-col>
                            </v-row>
                        </v-container>
                        <v-form class="ma-5 pa-5" v-model="valid" @submit.prevent="almacenarLocal">
                            <v-text-field ref="userFocus" v-model="nro_afi" :rules="[rules.nro_afi]" required
                                label="nº afiliado" />
                            <v-text-field @keyup.enter="persist" class="mt-2" v-model="password" :value="password"
                                label="Contraseña" :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                                @click:append="value = !value" :type=" value ? 'password' : 'text' "
                                :rules="[rules.password]" @input="_ => password = _">
                            </v-text-field>
                        </v-form>
                        <div class="ma-5 ">
                            <v-btn x-large block type="submit" @click="persist" elevation="2" color="primary">Ingresar
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
        </v-container>
    </div>
</template>


<script>
import { mapActions, mapGetters } from 'vuex';
import Alerta from '@/components/alerts/Alertas.vue';

export default {
    name: 'Login',
    components: {
        Alerta,
    },

    data: () =>
    ({
        nro_afi: '91218',
        password: 'donato',
        error: false,
        valid: true,
        value: true,
        rules: {
            nro_afi: value => {
                const pattern = /^(?=.*[0-9])(?=.{0})/;
                return (
                    pattern.test(value) || "Ingrese solo numeros."
                );

            },

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
    },
    computed: {
        ...mapGetters(['user', 'isAuthenticated'])
    },

    methods: {
        ...mapActions(['getUser', 'cerrarSesion', 'getContacto']),

        persist() {
            if (this.nro_afi == "91218" && this.password == "donato") {
                this.getUser()
                localStorage.setItem("logUser", JSON.stringify({ "user": this.nro_afi, "password": this.password }))
                this.$router.push('/dashboard')
                this.error = false
            }
        }
    }

}
</script>