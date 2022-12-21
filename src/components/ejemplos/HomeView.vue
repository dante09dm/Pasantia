<template>
  <div>
    <v-container>
      <v-row>

        <Card titulo="Mi perfil" />

      </v-row>
    </v-container>
  </div>

</template>

<script>

// Importo la Card
import Card from '@/components/card.vue'

export default {
  name: 'Home',
  //se registra como componente
  components: {
    Card,
  },
  data() {
    return {

    }
  },
  computed: {
  },

}
</script>
