<template>
	<div>
   <v-data-table
    :headers="headers"
    :items="desserts"
    class="elevation-0 border-top"
    hide-default-footer
    no-data-text="No se encontraron nuevas Pre-Emergencias Médicas"
    dense
    loading-text="Cargando Información..."
    height="125"
    fixed-header
    :items-per-page="-1"
    calculate-widths
    mobile-breakpoint="500"
   >
   <template v-slot:top>
    <v-toolbar class="border-top">
    <v-spacer></v-spacer>
    <v-btn color="primary" @click="cargarEM">
      <v-icon>mdi-reload</v-icon>           
    </v-btn>
  </v-toolbar>
</template>



<template v-slot:item="{ item }">
  <tr class="text-center">
    <td @click="rowClicked(item)">{{item.pem_nroafi}}</td>

    <td @click="rowClicked(item)">{{item.tud_tipo}}</td>

    <td @click="rowClicked(item)">
      <span v-if="item.pem_atrib === 'M'">SI</span>
      <span v-else>-</span>
    </td>

    <td @click="rowClicked(item)">
      <span v-if="item.pem_estado === 'B'">BAJA</span>
      <span v-if="item.pem_estado === 'A'">ALTA</span>
    </td>

    <td @click="rowClicked(item)">{{formatDate("dd/mm/yyyy", item.pem_fecalta)}}</td>

    <td @click="rowClicked(item)">
      <span v-if="item.pem_fecbaja !== '1900-01-01 00:00:00'">
        {{formatDate("dd/mm/yyyy", item.pem_fecbaja)}}
      </span>
      <span v-else>-</span>
    </td>

    <td @click="rowClicked(item)">{{formatDate("dd/mm/yyyy", item.pem_fecha_ingreso)}}</td>

    <td @click="rowClicked(item)">
      <span v-if="item.pem_consultorio === 'S'">SI</span>
      <span v-if="item.pem_consultorio === 'N'">NO</span>
    </td>

    <td @click="rowClicked(item)">$ {{item.pem_monto}}</td>

    <td>
      <v-icon class="mr-2" @click="AntesDeAprobar(item)"color="success">
        mdi-check
      </v-icon>
    </td>
</tr>
</template>

</v-data-table>
</div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'
import { mapMutations } from 'vuex'
import { mapState } from 'vuex'
export default {
 name: 'GridEMTipoSencha',
 data: () => ({
  dialogDelete: false,
  load: true,
  headers: [
  {
    text: 'Afiliado',
    align: 'center',
    value: 'pem_nroafi',
    class: 'border-top', divider: 'true'
  },
  { text: 'Tip. Afiliación', value: 'tud_tipo',
  class: 'border-top', align: 'center', divider: 'true'},
  { text: 'Modificacion', value: 'pem_atrib',
  class: 'border-top', align: 'center', divider: 'true'},
  { text: 'Estado', value: 'pem_estado',
  class: 'border-top', align: 'center', divider: 'true'},
  { text: 'Alta', value: 'pem_fecalta',
  class: 'border-top', align: 'center', divider: 'true'},
  { text: 'Baja', value: 'pem_fecbaja',
  class: 'border-top', align: 'center', divider: 'true'},
  { text: 'Ingreso', value: 'pem_fecha_ingreso',
  class: 'border-top', align: 'center', divider: 'true'},
  { text: 'Consultorio', value: 'pem_consultorio',
  class: 'border-top', align: 'center', divider: 'true'},
  { text: 'Monto', value: 'pem_monto',
  class: 'border-top', align: 'center', divider: 'true'},
  { text: '', value: 'actions', sortable: false,
  class: 'border-top', align: 'center', divider: 'true'},
  ],
  desserts: [],
  editedIndex: -1,
  editedItem: {
    pem_id: 0,
    pem_nroafi: 0,
    pem_tud_id: 0,
    tud_tipo: '',
    pem_estado: '',
    pem_fecha_ingreso: '',
    pem_fecalta: '',
    pem_fecbaja: '',
    pem_atrib: '',
    pem_consultorio: '',
  },
  defaultItem: {
    pem_id: 0,
    pem_nroafi: 0,
    pem_tud_id: 0,
    tud_tipo: '',
    pem_estado: '',
    pem_fecha_ingreso: '',
    pem_fecalta: '',
    pem_fecbaja: '',
    pem_atrib: '',
    pem_consultorio: '',
  },
}),
 watch: {
  dialog (val) {
    val || this.close()
  },
  dialogDelete (val) {
    val || this.closeDelete()
  },
},

created () {
  this.initialize()
},

methods: {
  formatDate (format, date) {
    return formatDate(format, date);
  },
  initialize () {
    this.desserts = []
  },
  rowClicked(item){
      var data= {pem_id: item.pem_id,
                 nroafi: item.pem_nroafi};
      var vue = this;
      var url = process.env.VUE_APP_API + `/PreEM/Detalle`;
      $.ajax({
          url: url,
          type: 'POST',
          dataType: 'JSON',
          data: data,
          success:function(response){ 
              vue.$emit('trajoDetalle', response);
          }
      });
  },
  editItem (item) {
    this.editedIndex = this.desserts.indexOf(item)
    this.editedItem = Object.assign({}, item)
    this.dialog = true
  },

  deleteItem (item) {
    this.editedIndex = this.desserts.indexOf(item)
    this.editedItem = Object.assign({}, item)
    this.dialogDelete = true
  },

  deleteItemConfirm () {
    this.desserts.splice(this.editedIndex, 1)
    this.closeDelete()
  },

  close () {
    this.dialog = false
    this.$nextTick(() => {
      this.editedItem = Object.assign({}, this.defaultItem)
      this.editedIndex = -1
    })
  },

  closeDelete () {
    this.dialogDelete = false
    this.$nextTick(() => {
      this.editedItem = Object.assign({}, this.defaultItem)
      this.editedIndex = -1
    })
  },

  save () {
    if (this.editedIndex > -1) {
      Object.assign(this.desserts[this.editedIndex], this.editedItem)
    } else {
      this.desserts.push(this.editedItem)
    }
    this.close()
  },
  cargarEM(){
    var vue = this;
    var usuario = window.location.search.substr(1).split("=");
    var serve = process.env.VUE_APP_PDF;
    var url = serve + 'api/api_usuario.php/usuario/' + usuario[1];

    $.ajax({
      url: url,
      type: 'GET',
      success:function(response){ 
      //Hago esto porque el beforemount de la app se esta ejecutando después
        var host = process.env.VUE_APP_API;
        var url2 = `${host}/PreEM`;

        var tramiteSit = process.env.VUE_APP_TRAMITE_SIT;

        var data = {usu: response.body.idViejo,
                    ts: tramiteSit}
        $.ajax({
          url: url2,
          type: 'POST',
          dataType: 'JSON',
          data: data,
          success:function(data){ 
            vue.desserts = data;
            vue.$emit("limpiarDetalle");
          }
        });
      }
    });
  },
  AntesDeAprobar(item){
    //Busca los Pre-EM y los guarda en el state para poder enviarlos en la Aprobación
      var data = {pem_id: item.pem_id,
                  antigua: 'false'};
      var vue= this;
      var url = process.env.VUE_APP_API  + `/PreEM/PreFamiliares`;
          $.ajax({
              url: url,
              type: 'POST',
              dataType: 'JSON',
              data: data,
              success:function(response){ 
                  vue.$store.familiares = response;
                  vue.aprobarEM(item);
              }
          });
  },
  aprobarEM(item){
      var data = {pem_id : item.pem_id,
                  nroafi : item.pem_nroafi,
                  familiares: this.$store.familiares,
                  usuario: this.$store.usuario.idViejo
                };
      var vue = this;
      var url = process.env.VUE_APP_API + `/EmergenciasMedicas/Insertar`;
      $.ajax({
          url: url,
          type: 'POST',
          dataType: 'JSON',
          data: data,
          success:function(response){ 
              if(response.id > 0){
                toast('Carga Exitosa!', '', 'success')
                vue.cargarEM();
                vue.$emit('limpiarDetalle');

              }
          }
      });
  },
},
beforeMount(){
  this.cargarEM();
}
}
</script>

