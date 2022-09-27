<template>
    <v-card>
        <v-card-title class="text-center">
            <div>
                <h5>Datos de contacto</h5>
            </div>
            <v-spacer></v-spacer>
            <v-speed-dial top right absolute slide-y-reverse-transition direction="bottom">
                <template v-slot:activator>
                    <v-btn color="primary" dark fab right>
                        <v-icon>
                            mdi-pencil
                        </v-icon>
                    </v-btn>
                </template>
                <router-link style="text-decoration: none" to="/EditPhone">
                    <v-btn fab dark small color="green">
                        <v-icon>mdi-phone</v-icon>
                    </v-btn>
                </router-link>
                <router-link style="text-decoration: none" to="/EditAddress">
                <v-btn fab dark small color="indigo">
                    <v-icon>mdi-map-marker</v-icon>
                </v-btn>
                </router-link>
                <router-link style="text-decoration: none" to="/EditEmail">
                    <v-btn fab dark small color="red">
                        <v-icon>mdi-email</v-icon>
                    </v-btn>
                </router-link>
            </v-speed-dial>
        </v-card-title>
        <v-divider></v-divider>
        <div>
            <v-list three-line>
                <v-row>
                    <v-col cols="2" md="2">
                        <v-list-item-icon>
                            <v-icon class="ml-5" color="indigo">
                                mdi-phone
                            </v-icon>
                        </v-list-item-icon>
                    </v-col>
                    <v-col cols="10" md="10">

                        <v-list-item v-for="item in user.contacto.telefonos" :key="item.name">
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
                            <v-icon class="ml-5" color="indigo">
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
        </div>
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "ContactCard",
    data() {
        return {
        }
    },

    computed: {
        ...mapGetters(['user', 'isAuthenticated'])
    },
    methods: {

    }


}
</script>