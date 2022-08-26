<template>
  <div class="content">
    <v-expansion-panels v-model="panel">
      <v-expansion-panel :elevation="0" class="border">
        <v-expansion-panel-header color="grisSencha" disable-icon-rotate hide-actions>
            <h3 class="azulSencha--text font-weight-thin text-center">{{titulo}}</h3>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <GridFamiliaresACargo :familiares="familiares" v-if="content == 'grid'"/>
          <GridCategorias :refreshCategorias="refreshCategorias"
                          @editarCategoria="editarCategoria($event)"
                          v-if="content == 'gridCategorias'"/>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
  import GridFamiliaresACargo from '@/components/grids/GridFamiliaresACargoTipoSencha.vue'
  import GridCategorias from '@/components/grids/GridCategorias.vue'

  export default {
    name: 'Panel',
    components:{
      GridFamiliaresACargo,
      GridCategorias
    },
    data(){
      return{
        panel: 0,
        disabled: false,
        readonly: false,
      }
    },
    methods:{
      editarCategoria(item){
        this.$emit('editarCategoria', item);
      },
    },
    props:['titulo', 'content', 'familiares', 'refreshCategorias']
  };
</script>
