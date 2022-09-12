<template>
    <v-row>
        <v-col>
            <v-tabs v-model="tab">
                <v-tabs-slider></v-tabs-slider>
                <v-tab v-for="(item, index) in items" :key="index">
                    {{ item.tab }}
                </v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab">
                <v-tab-item v-for="(item, i) in items" :key="index">
                    <component v-bind:is="item.content"></component>
                </v-tab-item>
            </v-tabs-items>
        </v-col>
    </v-row>




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
    props: ['titulo']
}

</script>