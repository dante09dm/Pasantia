<template>
    <div>
        <v-app-bar app class="overflow-hidden" permanent dark color="primary">

            <v-app-bar-nav-icon @click="drawer=!drawer">
                <v-icon v-if="drawer">mdi-chevron-left</v-icon>
            </v-app-bar-nav-icon>
            <v-toolbar-title>Caja de Psicologos</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn v-if="isAuthenticated" @click.prevent="cerrarSesion" outlined >cerrar session</v-btn>
        </v-app-bar>

        <v-navigation-drawer app dark color="primary" v-model="drawer">
            <v-list nav>
                <v-list-item class="px-2">
                    <v-list-item>
                        <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
                    </v-list-item>
                </v-list-item>
                <v-list-item-group mandatory @click="toggle" v-model="group">
                    <v-list-item :to="item.route" v-for="item in items" :key="item.title">
                        <v-list-item-icon clor="primary">
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
            <template v-slot:append>
                <div class="pa-2">
                    <v-btn @click="cerrarSesion" block dark>
                        cerrar sesion
                    </v-btn>
                </div>
            </template>
        </v-navigation-drawer>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    data() {
        return {
            group: null,
            toggle: false,
            drawer: true,
            items: [
                { title: 'Iniciar sesion', icon: 'mdi-account', route: '/login' },
                { title: 'Perfil', icon: 'mdi-view-dashboard', route: '/dashboard' },
                { title: 'Tramites', icon: 'mdi-text-box-edit', route: '/modificacion' },
            ],
        }

    },
    computed: {
        ...mapGetters(['user', 'isAuthenticated']),
    },
    methods: {
        ...mapActions(['cerrarSesion'])

    },



}
</script>