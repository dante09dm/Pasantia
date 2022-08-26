<template>
  <v-app>
      <Toolbar/>

<!--     <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-main>
      <router-view class="app" fluid />
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

  components: {
    Toolbar,
  },
  /*   beforeCreate() {
  
      // adan 05/08/22
      // forzamos el dominio para no tenere problemas con el CORS
      document.domain = 'cajapsipba.org.ar';
  
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
      });
    } */
};
</script>
