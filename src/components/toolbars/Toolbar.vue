<template>
  <div>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="model">
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark color="#00a0df" elevation="4">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Portal de afiliados</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
  </div>



</template>

<script>

export default {
  data() {
    return {
      drawer: null,
      items: [
        { text: 'Home', icon: 'mdi-view-dashboard' },
        { text: 'Inbox', icon: 'mdi-inbox' },
        { text: 'About', icon: 'mdi-forum' },
      ],
      model: "1",
    };
  },
}

</script>