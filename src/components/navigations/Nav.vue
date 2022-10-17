<template>
    <div>
        <v-app-bar app flat class="overflow-hidden" dark color="primary">
            <v-app-bar-nav-icon v-if="$vuetify.breakpoint.mdAndDown" @click="drawer=!drawer" />
            <v-toolbar-title>Caja de Psicologos</v-toolbar-title>
            <v-spacer></v-spacer>

        </v-app-bar>
        <v-navigation-drawer app dark color="primary" v-model="drawer">
            <v-sheet color="primary" flat height="56">
            </v-sheet>
            <v-list>
                <v-list-item-group @click="toggle" v-model="group">
                    <v-list-item :to="item.route" v-for="item in items" :key="item.title">
                        <v-list-item-icon class="d-flex flex-column" color="primary">
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
            <template v-slot:append>
                <div class="pa-2">
                    <v-btn v-if="isAuthenticated" @click="cerrarSesion" block dark>
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
                { title: 'Notificaciones', icon: 'mdi-bell', route: '/notificaciones' },
                { title: 'Perfil', icon: 'mdi-view-dashboard', route: '/dashboard' },
                { title: 'Boletas', icon: 'mdi-printer', route: '/Boletas' },
                { title: 'Turnos', icon: 'mdi-ticket-account', route: '/Turnos' },
            ],
        }

    },
    computed: {
        ...mapGetters(['user', 'isAuthenticated'])
    },
    methods: {
        ...mapActions(['cerrarSesion'])

    },

}
</script>