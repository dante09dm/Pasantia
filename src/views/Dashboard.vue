<template>
    <div>
        <v-container fluid>
            <v-card class="Dashboard ma-10">
                <v-container>
                    <v-card-title class="text-h4">Bienvenido/a/x {{ $store.state.afiliados.Items[id].first_name }} {{ $store.state.afiliados.Items[id].last_name }} </v-card-title>
                    <v-divider></v-divider>
                    <v-row class="mb-6">
                        <v-col>
                            <v-avatar class="ma-5" size="130">
                                <img alt="afiliado" :src="$store.state.afiliados.Items[id].avatar" >
                            </v-avatar>
                        </v-col>
                        <v-col>
                            <v-card-subtitle>
                                <h2>
                                    Nombre y apellido:
                                </h2>
                                <h4>
                                    {{ $store.state.afiliados.Items[id].first_name }} {{ $store.state.afiliados.Items[id].last_name }}
                                </h4>
                            </v-card-subtitle>
                            <v-card-subtitle>
                                <h2>E-mail: </h2>
                                <h4>
                                {{ $store.state.afiliados.Items[id].email }}
                            </h4></v-card-subtitle>
                        </v-col>
                    </v-row>
                    <v-divider></v-divider>
                    <v-btn class="ma-5">Modificar Datos</v-btn>
                </v-container>
            </v-card>
        </v-container>

    </div>

</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
    name: "Dashboard",

    data() {
        return {
            id: 4,
        }
    },
    created() {
        this.cargaItems();
    },
    methods: {

        ...mapActions('afiliados', ['cargaItems']),

    },
    computed: {
        ...mapGetters('afiliados', ['Items'])
    },

}


</script>