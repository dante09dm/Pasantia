<template>
    <v-card>
        <v-card-title class="d-flex ma-0">
            <div>
                <h5>Datos de contacto
                </h5>
                <!-- {{Object.keys(user.telefonos).length}} -->
            </div>
            <v-spacer></v-spacer>
            <v-speed-dial
                v-model="fab"
                top
                right
                absolute
                slide-y-reverse-transition
                direction="bottom"
                >
                <!--     <div>
                    <v-btn
                    fab
                    absolute
                    right
                    class="pa-2"
                    color="primary">
                    <v-icon> mdi-pencil</v-icon>
                </v-btn>
            </div> -->
                <template v-slot:activator>
                    <v-btn
                        v-model="fab"
                        color="primary"
                        dark
                        fab
                        right>
                        <v-icon>
                            mdi-pencil
                        </v-icon>
                    </v-btn>
                </template>
                <v-btn @click="" fab dark small color="green">
                    <v-icon>mdi-phone</v-icon>
                    
                </v-btn>
                <v-btn fab dark small color="indigo">
                    <v-icon>mdi-map-marker</v-icon>
                </v-btn>
                <v-btn fab dark small color="red">
                    <v-icon>mdi-email</v-icon>
                </v-btn>
            </v-speed-dial>
            </v-card-title>
            <v-divider></v-divider>
            <v-list>
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon color="primary">
                            mdi-phone
                        </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            +{{ user.telefonos[0].cod_pais}}-({{ user.telefonos[0].prefix}}) {{ user.telefonos[0].num}}
                        </v-list-item-title>
                        <v-list-item-subtitle>{{user.telefonos[0].type_cont}}</v-list-item-subtitle>
                    </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-action></v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title> +{{ user.telefonos[1].cod_pais}}-({{ user.telefonos[1].prefix}}) {{
                    user.telefonos[1].num}}</v-list-item-title>
                    <v-list-item-subtitle>{{user.telefonos[1].type_cont}}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-divider inset></v-divider>
            <v-list-item>
                <v-list-item-icon>
                    <v-icon color="primary">
                        mdi-map-marker
                    </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>
                        ({{user.domicilios[0].cod_postal}}) {{ user.domicilios[0].provincia}}, {{
                        user.domicilios[0].localidad}} Calle: {{user.domicilios[0].calle}}, nro:
                        {{user.domicilios[0].nro}} {{user.domicilios[0].piso}} {{user.domicilios[0].dpto}}
                    </v-list-item-title>
                    <v-list-item-subtitle>{{user.telefonos[0].type_cont}}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-action></v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        ({{user.domicilios[1].cod_postal}}) {{ user.domicilios[1].provincia}}, {{
                        user.domicilios[1].localidad}} Calle: {{user.domicilios[1].calle}}, nro:
                        {{user.domicilios[1].nro}} {{user.domicilios[1].piso}} {{user.domicilios[1].dpto}}
                    </v-list-item-title>
                    <v-list-item-subtitle>{{user.telefonos[1].type_cont}}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-divider inset></v-divider>
            <v-list-item>
                <v-list-item-icon>
                    <v-icon color="primary">
                        mdi-email
                    </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>
                        {{user.email}}
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>


        </v-list>
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "ListCard",
    data() {
        return {

            cantTel: 0,
            cantDom: 0,
            cantEmail: 0
        }
    },

    computed: {
        ...mapGetters(['user'])
    },

}
</script>