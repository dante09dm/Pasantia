<template>
  <v-app>
    <v-main>

      <!-- 
        Componente para la navegacion en el portal
      -->
      <Navigator v-if="auth"></Navigator>


      <!-- Accede a las vistas definidas en router
        -->
      <router-view class="app" />


    </v-main>


  </v-app>
</template>

<style lang="sass">
  @import '@/scss/variables.scss'
</style>

<script>
import Navigator from '@/components/navigations/Nav.vue'

export default {
  name: 'App',
  data: () => ({
    auth: true,
  }),

  components: {
    Navigator,
  },
  beforeCreate() {
  },

  computed: {

  },
  methods: {

  }

}
</script>
