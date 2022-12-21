<template v-slot:activator="{ on, attrs }">
  <v-btn class="text-center mt-15"
  color="primary"
    dark
    x-large
    v-bind="attrs"
    v-on="on"
  >
    Seleccionar
  </v-btn>


</template>


<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>