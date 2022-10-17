<template>
    <v-card outlined class="text-center">
        <v-card-title class="d-flex ma-0">
            <div>
                <h5>Mis Datos</h5>
            </div>
            <Dialogo icon="mdi-account-edit" content="actualizar" titulo="Actualizar tu perfil" />
        </v-card-title>
        <v-divider></v-divider>
        <div class="mt-5 d-flex justify-center">
            <v-avatar size="120">
                <v-img v-if="user.data.afiliado[0].foto" :src="`data:image/png;base64,${user.data.afiliado[0].foto}`" />
                <v-img v-else src="@/assets/blank-user-profile.png" />
            </v-avatar>
        </div>
        <v-card-title class="d-flex justify-center ma-5 text-center">
            <div>
                <h3>
                    Tu Nº de Afiliado:
                    {{ user.data.afiliado[0].nroafi }}
                </h3>
                <h5>{{ user.data.afiliado[0].nombres }} {{ user.data.afiliado[0].apellido }}
                </h5>
                <h5>Tu nivel: {{user.data.afiliado[0].nivel}}</h5>

            </div>
        </v-card-title>
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex';
import Dialogo from '@/components/panels/Dialogo.vue'


export default {
    name: "UserCard",
    components: {
        Dialogo
    },

    data() {
        return {

        }
    },

    computed: {
        ...mapGetters(['user'])

    },
    methods: {

    },

}
</script>