
<template>
  <div>
    <h2 class="text-center mt-4 mb-6" >Seleccionar Horario</h2>
  <v-row

    justify="space-around"
    align="center"
  >
    <v-time-picker
      v-model="picker"
      :landscape="$vuetify.breakpoint.smAndUp"
      ampm-in-title
    ></v-time-picker>
  </v-row>
</div>
</template>



<script>
  export default {
    data () {
      return {
        picker: null,
      }
    },
  }
</script>
