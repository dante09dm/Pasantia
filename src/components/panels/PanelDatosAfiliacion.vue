<template>
    <v-card class="border">
        <v-card-title >
            Opcion de Afiliación
        </v-card-title>
        <v-divider></v-divider>
        <v-card-actions>
            <FormDatosAfiliacion />
        </v-card-actions>
    </v-card>
</template>

<script>
import FormDatosAfiliacion from '../forms/FormDatosAfiliacion.vue';


export default {
    components: {
        FormDatosAfiliacion
    },
    data: () => ({

    }),

}
</script>