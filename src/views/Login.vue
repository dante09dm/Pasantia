<template>
    <div>
        <v-container grid-list-md>
            <Alerta v-if="error" type="error" msg="Usuario o contraseña incorrectos." />
            <v-row>
                <v-col cols="12" lg="12" md="12">
                    <v-card outlined class="mx-auto pt-5" max-width="600">
                        <v-container>
                            <v-row>
                                <v-col class="d-flex aling-center justify-center">
                                    <v-img min-width="250" class="ma-5" max-width="250"
                                        src="@/assets/logo_caja_nuevo.png" />
                                </v-col>
                            </v-row>
                        </v-container>
                        <v-form class="ma-5 pa-5" v-model="valid" @submit.prevent="">
                            <v-text-field ref="userFocus" v-model="nroafi" required label="nº afiliado" />
                            <v-text-field @keyup.enter="login" class="mt-2" v-model="password" :value="password"
                                label="Contraseña" :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                                @click:append="value = !value" :type=" value ? 'password' : 'text' "
                                @input="_ => password = _">
                            </v-text-field>
                        </v-form>
                        <div class="ma-5 ">
                            <v-btn x-large block type="submit" @click.persist="login" elevation="2" color="primary">
                                Ingresar
                            </v-btn>
                        </div>
                        <v-card-actions>
                            <v-card-text>
                                <v-row justify="center">
                                    <v-dialog persistent v-model="dialog" max-width="400">
                                        <template v-slot:activator="{ on, attrs}">
                                            <v-btn color="primary" text v-bind="attrs" v-on="on">Olvido su
                                                contraseña?
                                            </v-btn>
                                        </template>
                                        <v-card>

                                            <v-card-title>
                                                ¿Desea recuperar su contraseña?

                                            </v-card-title>
                                            <v-divider></v-divider>
                                            <v-card-text class="mt-5">
                                                Se enviará un email a la direccion registrada en el sistema.
                                            </v-card-text>
                                            <v-card-actions>
                                            </v-card-actions>
                                            <v-card-actions>
                                                <v-spacer></v-spacer>
                                                <v-btn color="primary" @click.native="dialog = false">
                                                    Si, recuperar!
                                                </v-btn>
                                                <v-btn color="error" outlined @click.native="dialog = false">No,
                                                    cancelar
                                                </v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-dialog>
                                </v-row>
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
import Dialogo from '@/components/panels/Dialogo.vue';

export default {
    name: 'Login',
    components: {
        Alerta,
        Dialogo,
    },

    data() {
        return {
            dialog: false,
            nroafi: '18',
            password: '123456',
            error: false,
            valid: true,
            value: true,
        }
        /*        rules: {
                   nroafi: value => {
                       const pattern = /^(?=.*[0-9])(?=.{0})/;
                       return (
                           pattern.test(value) || "Ingrese solo numeros."
                       );
       
                   },
       
                   password: value => {
                       const pattern = /^(?=.*[a-z])(?=.{6,})/;
       
                       return (
       
                           pattern.test(value) || "Min. 6 caracteres en minusculas."
                       );
                   }
               }, */
    },


    mounted() {
        this.$refs.userFocus.focus();
    },
    computed: {
        ...mapGetters(['user', 'isAuthenticated']),
    },

    methods: {
        ...mapActions(['getUser', 'cerrarSesion', 'getContacto']),

        login() {
            if (this.nroafi == "18" && this.password == "123456") {
                this.getUser()
                localStorage.setItem("logUser", JSON.stringify({ "nroafi": this.nroafi, "password": this.password }))
                this.$router.push('/dashboard')
            }
            else {
                this.expand = !this.expand
                this.error = !this.error
            }
        }
    }

}
</script>