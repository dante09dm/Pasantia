<template>
  <div class="content">
    <v-expansion-panels v-model="panel">
      <v-expansion-panel :elevation="0" class="border">
        <v-expansion-panel-header color="grisSencha">
            <h3 class="azulSencha--text font-weight-thin text-center">{{titulo}}</h3>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <GridTipoSencha @limpiarDetalle="limpiarDetalle" 
                          @trajoDetalle="envioDetalle($event)" 
                          v-if="content == 'grid'"/>

          <GridEM @limpiarDetalle="limpiarDetalle" 
                  @trajoDetalle="envioDetalle($event)" 
                  @emAntigua="emAntigua"
                  :emergenciasmedicas="emergenciasmedicas"
                  v-if="content == 'gridEmergenciasMedicas'"/>

          <FormDetalleEM :limpiaDetalle="limpiaDetalle" 
                         :detalle="detalle" 
                         :antigua="antigua"
                         v-if="content == 'formDetalleEM'"/>

          <FormCategorias v-if="content == 'FormCategorias'"/>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
  import GridTipoSencha from '@/components/grids/GridEMTipoSencha.vue'
  import GridEM from '@/components/grids/GridEmergenciasMedicas.vue'
  import FormDetalleEM from '@/components/forms/FormDetalleEM.vue'
  import FormCategorias from '@/components/forms/FormCategorias.vue'
  export default {
    name: 'ExpansionPanel',
    
    components:{
      GridTipoSencha,
      GridEM,
      FormDetalleEM,
      FormCategorias,
    },
    data(){
      return{
        panel: 0,
        disabled: false,
        readonly: false,
      }
    },
    methods:{
      envioDetalle(data){
        this.$emit('hayDetalle', data);
      },
      limpiarDetalle(){
        this.$emit('limpiaDetalle');
        this.$emit('limpiaFamiliares');
      },
      emAntigua(){
        this.$emit('emAntigua');
      }
    },
    props:['titulo', 'content', 'detalle', 'limpiaDetalle', 'emergenciasmedicas', 'antigua']
  };
</script>
