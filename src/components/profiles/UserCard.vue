<template>
    <v-card class="text-center">
        <v-card-title class="d-flex ma-0">
            <h5>
                Tus Datos
            </h5>
        </v-card-title>
        <v-divider></v-divider>
        <div width="128" class="mx-auto mt-5">
            <v-fab-transition>
                <v-btn
                    color="orange"
                    small
                    fab
                    dark
                    fixed>
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </v-fab-transition>
            <v-avatar size="128">
                <v-img
                    :src=user.avatar
                    >
                </v-img>
            </v-avatar>
        </div>
        <v-card-title class="d-flex justify-center ma-5 text-center">
            <div>
                <h3>Nº: {{ user.nro_af }}</h3>
                <div>{{ user.last_name }} {{ user.first_name }}</div>
                <div>{{ user.nivel}}</div>
            </div>
        </v-card-title>
        <v-card-actions class="d-flex">
<!--             <v-simple-table>
                   <template v-slot:default>
                    <tbody>
                        <tr v-for="(item, key) in user" :key="item.name">
                            <td>{{ item }}</td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table> -->
        </v-card-actions>
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "UserCard",
    components:{
    },

    data() {
        return {
        }
    },

    computed: {
        ...mapGetters(['user', 'isAuthenticated'])

    },
    methods: {

    },
    created(){
        
    }
}

</script>