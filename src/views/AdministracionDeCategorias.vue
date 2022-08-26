<template>
  <div class="panelSencha">
    <ExpansionPanel :limpiaDetalle="limpiaDetalle" 
                    titulo="Administración De Categorías" 
                    content="FormCategorias" />
  </div>
</template>


<script>
import ExpansionPanel from '@/components/panels/ExpansionPanel.vue'

export default {
  name: 'AdministracionDeCategorias',
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