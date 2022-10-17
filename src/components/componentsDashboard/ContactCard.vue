<template>
    <v-card outlined>
        <v-card-title class="text-center">
            <div>
                <h5>Mis datos de contacto</h5>
                {{ domicilio.data }}
            </div>
            <Fab />
        </v-card-title>
        <v-divider></v-divider>
        <!--        <div>
            <v-list three-line>
                <v-row>
                    <v-col cols="2" md="2">
                        <v-list-item-icon>
                            <v-icon class="ml-5" color="green">
                                mdi-phone
                            </v-icon>
                        </v-list-item-icon>
                    </v-col>
                    <v-col cols="10" md="10">
                        <v-list-item v-for="item in " :key="item.name">
                            <v-list-item-content>
                                <v-list-item-title>({{item.cod_pais}}) {{item.prefix}}-{{item.num}}
                                </v-list-item-title>
                                <v-list-item-subtitle>{{item.type_cont}}</v-list-item-subtitle>
                                <v-list-item-subtitle>{{item.type_tel}}</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-action></v-list-item-action>
                        </v-list-item>
                    </v-col>
                </v-row>

                <v-divider inset></v-divider>
                <v-row>
                    <v-col cols="2" md="2">
                        <v-list-item-icon>
                            <v-icon class="ml-5" color="red">
                                mdi-map-marker
                            </v-icon>
                        </v-list-item-icon>
                    </v-col>
                    <v-col cols="10" md="10">
                        <v-list-item v-for="item in user.contacto.domicilios" :key="item.name">
                            <v-list-item-content>
                                <v-list-item-title>{{item.calle}} {{item.nro}} {{item.piso}} {{item.dpto}}
                                </v-list-item-title>
                                <v-list-item-subtitle>{{item.cod_postal}} {{item.localidad}} {{ item.provincia}}
                                </v-list-item-subtitle>
                                <v-list-item-subtitle>{{item.type_dom}}</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-action></v-list-item-action>
                        </v-list-item>
                    </v-col>
                </v-row>
                <v-divider inset></v-divider>
                <v-row>
                    <v-col cols="2" md="2">
                        <v-list-item-icon>
                            <v-icon class="ml-5" color="indigo">
                                mdi-email
                            </v-icon>
                        </v-list-item-icon>
                    </v-col>
                    <v-col cols="10" md="10">
                        <v-list-item v-for="item in user.contacto.email" :key="item.name">
                            <v-list-item-content>
                                <v-list-item-title>{{item.mail}}
                                </v-list-item-title>
                                <v-list-item-subtitle>{{item.type_e}}</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-action></v-list-item-action>
                        </v-list-item>
                    </v-col>
                </v-row>
            </v-list>
        </div> -->
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import Fab from '@/components/navigations/Fab.vue'

export default {
    name: "ContactCard",
    components: {
        Fab
    },
    created() {
        console.log()
    },
    data() {
        return {
            cant_email: 0,
            cant_domicilio: 0,
            cant_telefono: 0,
        }
    },
    computed: {
        ...mapGetters(['domicilio'])
    },
    methods: {
    }
}
</script>