<template>
    <div>
        <v-container>
            <v-card>
                <v-card-title class="d-flex ma-0">
                    <h5> Domicilio de contacto {{ Object.keys(domicilios).length }}</h5>
                    
                    <v-avatar class="ml-5" color="orange" size="25">
                        <span class="white--text">
                        </span>
                    </v-avatar>
                    <Dialogo cargaContent="address" titulo="Nuevo domicilio" />
                </v-card-title>
                <v-divider></v-divider>
                <v-card v-for="item in user.contacto.domicilios" :key="item.name">
                    <v-card-actions>
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
                        <v-icon color="primary">mdi-chevron-right</v-icon>
                    </v-card-actions>
                </v-card>
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
        ...mapGetters(['user', 'domicilios'])
    },
    props: ['title', 'cantidad']
}

</script>