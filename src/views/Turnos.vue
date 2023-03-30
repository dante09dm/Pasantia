<template>
  <div>
    <Dialog ref="refDialog" :titulo="titulo" :widthDialog="ancho"></Dialog>
    <v-row>
      <v-col cols="12" md="6">
        <h2 class="text-center mb-2">Fecha</h2>
        <Fecha />
      </v-col>
      <v-col cols="12" md="6">
        <h2 class="text-center mt-6 mb-6">Horario</h2>
        <Horario />
      </v-col>
    </v-row>
    <v-row class="mt-5 justify-center">
      <v-btn @click="lanzarDialog" :disabled="(fecha == '' || hora == '')" outlined class="ml-2 pa-5" color="primary">
        <v-icon class="mr-1">mdi-ticket-outline</v-icon>
        aceptar seleccion
      </v-btn>
    </v-row>

  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Fecha from '@/components/ejemplos/Fecha.vue';
import Horario from '@/components/ejemplos/Horario.vue';
import Dialog from '@/components/ejemplos/Dialog.vue';

export default {
  components: {
    Fecha,
    Horario,
    Dialog,
  },
  data() {
    return {
      title: 'Turnos',
      ancho: '',
      titulo: '',
    }
  },
  methods: {
    lanzarDialog() {
      this.ancho = 600
      this.titulo = "Solicitar turno"
      this.$refs.refDialog.abrirDialogo()
    }
  },
  computed: {
    ...mapGetters(['fecha', 'hora']),
  }

}
</script>