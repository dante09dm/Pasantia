<template>
  <div>
    <v-app-bar app
      dark
      color="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn icon v-if="$store.state.authUser">
        <v-icon>mdi-export</v-icon>
      </v-btn>

    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img ></v-img>
        </v-list-item-avatar>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
          </v-list-item-title>
          <v-list-item-subtitle> {{   }} </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item v-for="(item, i) in items_i" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <template v-if="$store.state.authUser" v-slot:append>
        <div class="ma-2">
          <v-btn block elevation="2" @click="changeAuthUser()" color="secondary">
            CERRAR SESION
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  components: {
  },
  methods:{
    ...mapState(['authUser'])
  },

  data() {
    return {
      drawer: null,
      items_i: [
        { text: 'Home', icon: 'mdi-home' },
        { text: 'Dashboard', icon: 'mdi-view-dashboard' },
        { text: 'Tramites online', icon: 'mdi-text-box-edit' },
        { text: 'Notificaciones', icon: 'mdi-bell'}
      ],
    };

  },
  create() {
  },

}

</script>

