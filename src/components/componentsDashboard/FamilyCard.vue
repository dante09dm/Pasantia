<template>
    <v-card outlined class="text-center">
        <v-card-title class="d-flex ma-0">
            <h5>
                Mis familiares registrados
            </h5>
            <Dialogo icon="mdi-account-plus" content="family" titulo="Nuevo familiar" />
        </v-card-title>
        <v-divider></v-divider>
        <v-card-title class="d-flex justify-center ma-5 text-center">
            <div v-if="familiares == 0">
                <h5>
                    No hay familiares ingresados en el sistema
                </h5>
            </div>
        </v-card-title>
        <v-card-actions class="d-flex">
            <!--      content       -->
        </v-card-actions>
    </v-card>
</template>

<script>

import { mapGetters } from 'vuex'
import Dialogo from '@/components/panels/Dialogo.vue';


export default {
    name: "FamilyCard",
    components: {
        Dialogo,
    },

    data() {
        return {
            familiares: []
        }
    },

    computed: {

        ...mapGetters(['user', 'isAuthenticated'])
    }
}
</script>