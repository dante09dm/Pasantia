<template>
  <div>
    <h2 class="text-center mb-2" >Seleccionar fecha</h2>
    <Fecha> </Fecha>
    <h2 class="text-center mt-4 mb-6" >Seleccionar Horario</h2>
    <Horario></Horario>
    <h2 class="text-center mt-4 mb-6"> asdasd boton </h2>
    
    
      <!--En esta vista se debe realizar el turnero-->
   
      
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