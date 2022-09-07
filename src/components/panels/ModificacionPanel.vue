<template>
    <v-container fluid>
        <v-card>
            <v-card-title class="ml-10">Modificacion de Datos</v-card-title>
            <v-divider></v-divider>
            <div>
                <v-tabs v-model="tab" align-with-title>
                    <v-tabs-slider></v-tabs-slider>
                    <v-tab v-for="(item, index) in items" :key="index">
                        {{  item.tab  }}
                    </v-tab>
                </v-tabs>

                <v-tabs-items v-model="tab">
                    <v-tab-item v-for="item in items">
                        <component v-bind:is="item.content"></component>
                    </v-tab-item>
                </v-tabs-items>
            </div>

            <v-divider></v-divider>
            <v-card-actions class="d-flex justify-end mb-6">
                <v-btn class="ma-3" color="secondary">Borrar campos</v-btn>
                <v-btn class="ma-3" color="info">Actualizar datos</v-btn>
            </v-card-actions>

        </v-card>
    </v-container>
</template>

<script>

import FormDatosBasicos from '../forms/FormDatosBasicos.vue';
import FormContact from '../forms/FormContact.vue';
import FormFamiliares from '../forms/FormFamiliares.vue';

export default {
    components:
    {
        FormDatosBasicos,
        FormContact,
        FormFamiliares,
    },
    data() {
        return {
            tab: null,
            items: [
                { tab: 'Datos de Afiliado', content: 'FormDatosBasicos' },
                { tab: 'Datos de Contacto', content: 'FormContact' },
                { tab: 'Familiares', content: 'FormFamiliares' },
            ],
        }
    },
    props:['titulo']
} 
</script>