<template>
  <div class="panelSencha">
  <v-container style="padding: 1rem;">
    <v-row>
      <v-col cols="12" md="5" class="my-column d-flex">
            <label for="" class="mr-4">Nro. de Afiliado:</label>
              <v-text-field
                      outlined
                      dense
                      class="input-text-sencha"
                      id="nroafi"
                      v-model="nroafi"
                      @keyup.enter="solicitarEM"
                      onkeypress="return soloNumeros(event)"
              ></v-text-field>
      </v-col>

      <v-col cols="12" md="2" class="my-column">
          <v-btn color="primary" id="buscarAfiliado" click="solicitarEM">
            <i class="fas fa-search mr-3" style="font-size: 1rem;"></i>
            <span>Buscar</span>  
          </v-btn>
      </v-col>

      <v-col cols="12" md="5" class="my-column d-flex justify-end">
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="solicitarPadron" class="justify-end">
            <i class="fas fa-search mr-3" style="font-size: 1rem;"></i>
            <span>Generar Padrón</span>  
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <ExpansionPanel @hayDetalle="detalle = $event"
            @limpiaDetalle="limpiaDetalle = !limpiaDetalle"
          titulo="Emergencias Médicas" 
          :emergenciasmedicas="emergenciasmedicas"
          @emAntigua="emAntigua"
          content="gridEmergenciasMedicas" class="mb-2"/>
    <ExpansionPanel :limpiaDetalle="limpiaDetalle"
                    :antigua="antigua"
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
      nroafi: null,
      limpiaDetalle: false,
      emergenciasmedicas:[],
      antigua: false,
    }
  },
  created(){
    // adan 05/08/22
    this.integracionBusqueda()

    // aca creamos un evento que queda a la espera de ser ejecutado desde el 
    // buscador de afiliados del SICA
    window.top.addEventListener("BusquedaAfiliadoDocker", function(evt) {
        this.nroafi = evt.detail;
        this.solicitarEM();
    }.bind(this), false);
  },
  methods:{
    integracionBusqueda(){
      if (typeof window.top.vistasCargadas != "undefined") {
        if( window.top.vistasCargadas.indexOf(process.env.BASE_URL) === -1)  
          window.top.vistasCargadas.push(process.env.BASE_URL);      
      }
      if (!isNaN(window.top.afiliadoActual)) {
        this.nroafi = window.top.afiliadoActual;
        this.solicitarEM();
      }
    }, 
    solicitarEM(){
      this.detalle = [];
      var url = process.env.VUE_APP_API + '/EmergenciasMedicas/PorAfiliado';
      var data = {nroafi: parseInt(this.nroafi)};
      var vue = this;
      
      $.ajax({
        url: url,
        type: 'POST',
        dataType: 'JSON',
        data: data,
        success: function(response) {
          if(response.length == 0){
            toast('', 'No se encontraron registros de emergencias médicas para este afiliado', 'info');
          }
          vue.emergenciasmedicas = response;
        }
      });
    },
    emAntigua(){
      this.antigua = true;
    },
    solicitarPadron(){
      var url = process.env.VUE_APP_API;
      url = url + "/Padron";
      window.open(url);
    }
  }
};
</script>