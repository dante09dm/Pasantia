<template>
  <div>
    <h2 class="text-center mb-2" >Fecha</h2>
    <Fecha> </Fecha>
    <h2 class="text-center mt-6 mb-6" >Horario</h2>
    <Horario></Horario>
    <Formulario></Formulario>

    
    
      <!--En esta vista se debe realizar el turnero-->
   
      
  </div>
</template>
<script>
import Fecha from '@/components/ejemplos/Fecha.vue';
import Horario from '@/components/ejemplos/Horario.vue';
import Formulario from '@/components/ejemplos/Formulario.vue';

export default {
  components: {
      Fecha,
      Horario,
      Formulario,
  },
  data() {
      return {
          title: 'Turnos'
      }
  },

}
</script>