<template>
	<div>
   <v-data-table
    :headers="headers"
    :items="desserts"
    class="elevation-0 border-top"
    hide-default-footer
    no-data-text="No se encontraron categorías"
    dense
    loading-text="Cargando Información..."
    height="250"
    fixed-header
    calculate-widths
    :items-per-page="-1"
    mobile-breakpoint="500"
   >   
<template v-slot:item="{ item }">
  <tr class="text-center">
    <td>{{item.tcu_descr}}</td>

    <td>$ {{item.cudc_monto}}</td>

    <td>{{formatDate("dd/mm/yyyy", item.cudc_desde)}}</td>
    <td>{{formatDate("dd/mm/yyyy", item.cudc_hasta)}}</td>

    <td>
        <i class="fas fa-pencil-alt" @click="editarCategoria(item)" color="success"></i>
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
 name: 'GridCategorias',
 data: () => ({
  dialogDelete: false,
  load: true,
  headers: [
  {
    text: 'Categoría',
    align: 'start',
    value: 'tcu_descr',
    class: 'border-top', align: 'center', divider: 'true'
  },
  { text: 'Monto', value: 'cudc_monto',
  class: 'border-top', align: 'center', divider: 'true'},
  { text: 'Desde', value: 'cudc_desde',
   class: 'border-top', align: 'center', divider: 'true'},

   { text: 'Hasta', value: 'cudc_hasta',
   class: 'border-top', align: 'center', divider: 'true'},

  { text: '', value: 'actions', sortable: false,
  class: 'border-top', align: 'center', divider: 'true'},
  ],
  desserts: [],
  editedIndex: -1,
  editedItem: {
    tcu_descr: 0,
    cudc_tcu_id: 0,
    cudc_id: 0,
    cudc_monto: 0,
    cudc_desde: '',
    cudc_hasta: '',
  },
  defaultItem: {
    tcu_descr: 0,
    cudc_tcu_id: 0,
    cudc_id: 0,
    cudc_monto: 0,
    cudc_desde: '',
    cudc_hasta: '',
  },
}),
 watch: {
  dialog (val) {
    val || this.close()
  },
  dialogDelete (val) {
    val || this.closeDelete()
  },
  refreshCategorias(val){
    this.TraerCategorias();
  }
},

created () {
  this.initialize()
},

methods: {
  editarCategoria(item){
    this.$emit('editarCategoria', item);
  },
  formatDate (format, date) {
    return formatDate(format, date);
  },
  initialize () {
    this.desserts = []
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
  TraerCategorias(){
      var vue= this;
      var url = process.env.VUE_APP_API  + `/CategoriasUDEC/Montos`;
      axios.get(url).then(function(response){
        vue.desserts = response.data;
      });
  },
},
beforeMount(){
  this.TraerCategorias();
},props:["refreshCategorias"]
}
</script>

