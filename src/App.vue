<template>
  <v-app>
      <Nav v-if="isAuthenticated" />
    <v-main>
      <router-view class="app" />
    </v-main>
  </v-app>
</template>

<style lang="sass">
  @import '@/scss/variables.scss'
</style>

<script>
import Nav from '@/components/navigations/Nav.vue'  
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'App',
  data: () => ({
    }),

  components: {
    Nav,

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
  computed:{
    ...mapGetters(['user', 'isAuthenticated'])
  },
  methods:{
    ...mapActions(['cerrarSesion'])
  }

}
</script>
