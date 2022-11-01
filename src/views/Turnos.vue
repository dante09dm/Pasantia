<template>
  <div>
      <!--En esta vista se debe realizar el turnero-->
      <Fecha></Fecha>
      <Horario></Horario>
  </div>
</template>
<script>
import Fecha from '@/components/ejemplos/Fecha.vue';
import Horario from '@/components/ejemplos/Horario.vue';

export default {
  components: {
      Fecha,
      Horario,
  },
  data() {
      return {
          title: 'Turnos'
      }
  },

}
</script>