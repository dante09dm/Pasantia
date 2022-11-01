<template>
    <div>
        <v-app-bar app flat class="overflow-hidden" dark color="primary">
            <v-app-bar-nav-icon v-if="$vuetify.breakpoint.mdAndDown" @click="drawer = !drawer" />
            <v-spacer></v-spacer>

        </v-app-bar>
        <v-navigation-drawer app dark color="primary" v-model="drawer">
            <v-sheet color="primary" flat>
                <v-img class="ma-3" src="@/assets/Logo-bt-06.png" />
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
                    <v-btn block dark>
                        cerrar sesion
                    </v-btn>
                </div>
            </template>
        </v-navigation-drawer>
    </div>
</template>
<script>


export default {
    data() {
        return {
            group: null,
            toggle: false,
            drawer: true,
            items: [
                { title: 'Turnos', icon: 'mdi-ticket-account', route: '/' },
            ],

        }

    },
    computed: {

    },
    methods: {


    },

}
</script>