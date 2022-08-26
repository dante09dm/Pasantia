<template>
  <div class="panelSencha">
    <ExpansionPanel @hayDetalle="detalle = $event"
                    @limpiaDetalle="limpiaDetalle = !limpiaDetalle"
                    titulo="Emergencias Médicas" 
                    content="grid" class="mb-2"/>
    <ExpansionPanel :limpiaDetalle="limpiaDetalle" 
                    :detalle="detalle" titulo="Detalle De Afiliación" 
                    content="formDetalleEM" />
  </div>
</template>
<script>
import ExpansionPanel from '@/components/panels/ExpansionPanel.vue'

export default {
  name: 'EmergenciasMedicas',
  components: {
    ExpansionPanel
  },
  data(){
    return{
      detalle : [],
      limpiaDetalle: false,
    }
  }
};
</script>