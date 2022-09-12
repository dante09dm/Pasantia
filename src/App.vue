<template>
  <v-app>
    <v-app-bar app class="overflow-hidden"
    absolute
    color="primary"
      dark
      fixed
      >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Caja de Psicologos de la Provincia de Buenos Aires</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer app
      v-model="drawer"
      absolute
      temporary
      >
      <v-list
        nav
        dense
        v-slot="{ active, toggle}"
      >
        <v-list-item-group mandatory
          :color="active ?'primary' : 'secondary'"
          @click="toggle"
          v-model="group"
        >
          <v-list-item
            v-if="active"
            >
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item
          v-if="active"
          >
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view class="app" />
    </v-main>
  </v-app>
</template>

<style lang="sass">
  @import '@/scss/variables.scss'
</style>

<script>
import Toolbar from '@/components/toolbars/Toolbar.vue'

export default {
  name: 'App',
  data: () => ({
      drawer: false,
      group: null,
    }),

  components: {
    Toolbar,

  },
  beforeCreate() {

    // adan 05/08/22
    // forzamos el dominio para no tenere problemas con el CORS
    /*     document.domain = 'cajapsipba.org.ar';
    
        var usuario = window.location.search.substr(1).split("=");
        var vue = this;
    
        var serve = process.env.VUE_APP_PDF;
        var url = serve + 'api/api_usuario.php/usuario/' + usuario[1];
    
        $.ajax({
          url: url,
          type: 'GET',
          success: function (response) {
            vue.$store.usuario = response.body;
          }
        }); */
  },

};
</script>
