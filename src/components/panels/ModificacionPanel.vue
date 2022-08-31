<template>
    <v-container fluid>
        <v-card>
            <v-card-title class="ml-10" >Modificacion de Datos</v-card-title>
            <v-divider></v-divider>
            <div>
                <v-tabs v-model="tab" align-with-title>
                    <v-tabs-slider></v-tabs-slider>
                    <v-tab v-for="item in items" :key="item">
                        {{  item  }}
                    </v-tab>
                </v-tabs>

                <v-tabs-items v-model="tab">
                    <v-tab-item v-for="item in items" :key="item">
                        Contenido de cada item
                    </v-tab-item>
                </v-tabs-items>
            </div>
            <FormDatosBasicos />

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

export default {
    components:
    {
        FormDatosBasicos
    },
    data() {
        return {
            tab: null,
            items: ['Datos de Afiliado', 'Datos de Contacto', 'Familiares',],

        }
    },
}
</script>