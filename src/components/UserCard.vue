<template>
    <v-card class="pa-3 text-center">
        <div class="mx-auto">
            <v-avatar size="128" >
                <v-img :src=user.avatar></v-img>
            </v-avatar>
            <v-fab-transition>
              <v-btn
                color="secondary"
                small
                fab
                dark
                fixed
                @click="cambiarImg"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-fab-transition>
        </div>
        <v-card-title class="d-flex justify-center ma-5 text-center">
            <div>
                <h3>Afiliado nº {{ user.nro_af }}</h3>
                <div>{{ user.last_name }} {{ user.first_name}}</div>
            </div>
        </v-card-title>
        <v-card-text class="d-flex">
            <v-simple-table>
                <template v-slot:default>
                  <tbody>
                        <tr v-for="item in desserts" :key="item.name">
                            <td>{{ item }}</td>
                            <td>{{ item }}</td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-card-text>
    </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: "UserCard",

    data() {
        return {
            nro_afi: null,
            desserts: [

            ],
        }
    },

    computed: {
        ...mapGetters(['user'])
    },
    methods: {
        ...mapActions(['getUser']),
        cambiarImg(){
            

        }
    }
}

</script>