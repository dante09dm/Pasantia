<template>
    <v-card outlined class="text-center">
        <v-card-title class="d-flex ma-0">
            <h5>
                Mis datos profesionales
            </h5>
            <Dialogo icon="mdi-file-document-plus" titulo="Actualizar informacion profesional" content="prof" />
        </v-card-title>
        <v-divider></v-divider>
        <v-card-title class="d-flex justify-center ma-5 text-center">
            <div>
                <h5 v-if="data">No hay datos registrados en el sistema</h5>
            </div>
        </v-card-title>
        <v-card-actions class="d-flex">
        </v-card-actions>
    </v-card>
</template>
<script>
import Dialogo from '@/components/panels/Dialogo.vue';
export default {
    data() {
        return {
            data: true,
        };
    },
    components:
    {
        Dialogo
    }
}
</script>