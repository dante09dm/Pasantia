<template>
    <div>
        <v-app-bar app class="overflow-hidden" absolute color="primary" dark>
            <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Caja de Psicologos de la Provincia de Buenos Aires</v-toolbar-title>
        </v-app-bar>
        <v-navigation-drawer app temporary v-model="drawer">
            <v-list>
                <v-list-item class="px-2">

                        <v-list-item two-line>
                            <v-list-item-avatar>
                                <img :src=user.avatar>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title>{{user.last_name}} {{user.first_name}}</v-list-item-title>
                                <v-list-item-subtitle>{{user.email}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>

                </v-list-item>
                <v-list-item-group mandatory @click="toggle" v-model="group">
                    <v-list-item :to="item.route" v-for="item in items" :key="item.title">
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
            <template v-slot:append>
                <div class="pa-2">
                    <v-btn block dark>
                        cerrar sesion
                    </v-btn>
                </div>
            </template>
        </v-navigation-drawer>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            group: null,
            drawer: true,
            items: [
                { title: 'Iniciar sesion', icon: 'mdi-account', route: '/login' },
                { title: 'Perfil', icon: 'mdi-view-dashboard', route: '/dashboard' },
                { title: 'Tramites', icon: 'mdi-text-box-edit', route: '/modificacion' },
            ],

        }

    },
    computed: {
        ...mapGetters(['user'])
    },



}
</script>