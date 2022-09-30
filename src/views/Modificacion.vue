<template>
    <div>
        <v-row>
            <v-col>
                <v-card flat>
                    <v-card-title>
                        <h4>
                            Modificacion de datos de afiliado: {{ this.last_name }}, {{ this.first_name }}
                        </h4>
                    </v-card-title>
                    <v-tabs v-model="tab">
                        <v-tabs-slider></v-tabs-slider>
                        <v-tab v-for="item in items" :key="item.id">
                            {{ item.tab }}
                        </v-tab>
                    </v-tabs>

                        <v-tabs-items class="pa-2" v-model="tab">
                            <v-tab-item v-for="item in items" :key="item.id">
                                <component v-bind:is="item.content"></component>
                            </v-tab-item>
                        </v-tabs-items>

                    <div>
                        <v-btn class="ma-3" color="error">Validar campos</v-btn>
                        <v-btn class="ma-3" color="info">Actualizar datos</v-btn>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import PanelDatosBasicos from '../components/panels/PanelDatosBasicos.vue'
import PanelDatosProfesionales from '../components/panels/PanelDatosProfesionales.vue'
import PanelDatosAfiliacion from '../components/panels/PanelDatosAfiliacion.vue'
import { mapGetters } from 'vuex'


export default {
    components:
    {
        PanelDatosBasicos,
        PanelDatosProfesionales,
        PanelDatosAfiliacion,
    },
    data() {
        return {
            tab: null,
            items: [
                { id: 1, tab: 'Datos Basicos', content: 'PanelDatosBasicos' },
                { id: 2, tab: 'Datos de Familiares', content: 'PanelFamiliares' },
                { id: 3, tab: 'Datos de Afiliacion', content: 'PanelDatosAfiliacion' },
            ],
        }
    },
    mounted(){
    },
    computed: {
        ...mapGetters(['user'])
    },
    methods: {

    }
} 
</script>