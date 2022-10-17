<template>
    <div>
        <v-container>
            <v-card tile outlined>
                <v-card-title class="d-flex ma-0">
                    <h5> Mis domicilios de contacto </h5>
                    <v-avatar class="ml-5" color="orange" size="25">
                        <span class="white--text">
                            {{ Object.keys(user.contacto).length }}
                        </span>
                    </v-avatar>
                    <Dialogo icon="mdi-plus" content="address" titulo="Nuevo domicilio" />
                </v-card-title>
                <v-divider></v-divider>
                <v-card-actions v-for="item in user.contacto.domicilios" :key="item.name">
                    <div>
                        <div class="text--primary">
                            {{item.calle}} {{item.nro}} {{item.piso}} {{item.dpto}}
                        </div>
                        <div class="text--secondary">
                            {{item.cod_postal}} {{item.localidad}} {{ item.provincia}}
                        </div>
                        <div class="text--secondary">
                            {{item.type_dom}}
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
import { mapGetters } from 'vuex';
import Dialogo from '@/components/panels/Dialogo.vue';
export default {
    name: 'EditAddress',

    components: {
        Dialogo,
    },


    data() {
        return {

        }
    },
    computed: {
        ...mapGetters(['user', ''])
    },
    props: ['title', 'cantidad']
}

</script>