<template>
    <v-dialog v-model="isActive" transition="dialog-bottom-transition" :fullscreen="$vuetify.breakpoint.mobile"
        :width="widthDialog">
        <v-card>
            <v-app-bar flat color="white">
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn v-bind="attrs" v-on="on" icon @click.outside="cerrarDialogo"
                            @keydown.esc="cerrarDialogo">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </template>
                    <span>Cerrar</span>
                </v-tooltip>
                <v-toolbar-title>{{ titulo }}</v-toolbar-title>
            </v-app-bar>
            <v-card-text>
                <Formulario />
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import Formulario from './Formulario.vue'
import { mapActions, mapGetters } from 'vuex'

export default {

    components: {
        Formulario
    },
    data() {
        return {
            isActive: false
        }
    },
    props: ['titulo', 'widthDialog'],
    computed: {
        ...mapGetters(['fecha', 'hora']),
    },
    methods: {
        ...mapActions(['guardarFecha', 'guardarHora']),

        cerrarDialogo() {
            // cierra el dialogo y elimina las variables almacenadas temporalmente
            // en el store
            if (this.hora) {
                this.guardarHora('')
            }
            //se vacia el store itemEdit
            if (this.fecha) {
                this.guardarHora()
            }
            this.isActive = false
        },
        abrirDialogo() {
            this.isActive = true
        }

    },
}

</script>