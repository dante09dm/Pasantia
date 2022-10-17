<template>
    <div>
        <v-container>
            <v-card tile outlined>
                <v-card-title class="d-flex ma-0">
                    <h5>Contacto telefonico</h5>
                    <v-avatar class="ml-5" color="orange" size="25">
                        <span class="white--text">
                            {{ Object.keys(user.contacto.telefonos).length }}
                        </span>
                    </v-avatar>
                    <Dialogo icon="mdi-plus" content="phone" titulo="Nuevo numero" />
                </v-card-title>
                <v-divider></v-divider>

                <v-card-actions v-for="item in user.contacto.telefonos" :key="item.name">
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
                    <v-btn small color="error" outlined fab>
                        <v-icon>mdi-trash-can-outline</v-icon>
                    </v-btn>
                    <v-btn color="primary" small outlined fab>
                        <v-icon>mdi-pencil-outline</v-icon>
                    </v-btn>
                </v-card-actions>
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