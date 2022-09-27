<template>
    <div>
        <v-container>
            <v-card>
                <v-card-title class="d-flex ma-0">
                    <h5>Contacto telefonico</h5>
                    <v-avatar class="ml-5" color="orange" size="25">
                        <span class="white--text">
                            {{ Object.keys(user.contacto.telefonos).length }}
                        </span>
                    </v-avatar>
                    <Dialogo cargaContent="phone" titulo="Nuevo numero"/>
                </v-card-title>
                <v-divider></v-divider>

                <v-card v-for="item in user.contacto.telefonos" :key="item.name">
                    <v-card-actions>
                        <div>
                            <div class="text--primary">
                                ({{item.cod_pais}}) {{item.prefix}}-{{item.num }}
                            </div>
                            <div class="text--secondary">
                                {{item.type_cont}}
                            </div>
                            <div class="text--secondary">
                            </div>
                        </div>
                        <v-spacer></v-spacer>
                        <v-icon color="primary">mdi-chevron-right</v-icon>
                    </v-card-actions>
                </v-card>
            </v-card>

        </v-container>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Dialogo from '@/components/panels/Dialogo.vue';

export default {
    name: 'EditPhone',

    components: {
        Dialogo,
    },


    data() {
        return {
            dialog: false,
            cod_pais: 54,
            prefix: 221,
            num: 5433182,
            type_cont: "PARTICULAR",
            type_tel: "CELULAR"
        };
    },
    computed: {
        ...mapGetters(['user', 'contacto'])
    },
    methods: {


    },
    props: ['title', 'cantidad']

}

</script>