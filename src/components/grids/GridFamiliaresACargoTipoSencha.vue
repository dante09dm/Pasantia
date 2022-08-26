<template>
	<div>
	<v-data-table
    	:headers="headers"
    	:items="desserts"
    	class="elevation-0 border-top"
    	hide-default-footer
    	no-data-text="No se encontraron Familiares A Cargo"
      dense
      loading-text="Cargando Información..."
      height="128"
      :items-per-page="-1"
      fixed-header
      calculate-widths
      mobile-breakpoint="500"
  	>
    
      <template v-slot:item="{ item }">
        <tr class="text-center">
          <td>{{item.nombre}}</td>
          <td>{{item.tfa_desflia}}</td>
          <td>{{item.sexo}}</td>
          <td>{{formatDate("dd/mm/yyyy", item.fam_fecnacim)}}</td>
          <td>{{item.documento}}</td>
          <td>{{item.pfem_cm}}</td>
          <td>{{item.pfem_profesion}}</td>
        </tr>
      </template>
  </v-data-table>
	</div>
</template>

<script>
  export default {
  	name: 'GridEMTipoSencha',
    data: () => ({
      dialogDelete: false,
      load: true,
      headers: [
        {
          text: 'Nombre',
          align: 'start',
          value: 'nombre', align: 'center', divider: 'true'
        },
        { text: 'Parentesco', value: 'tfa_desflia', align: 'center', divider: 'true'},
        { text: 'Sexo', value: 'sexo', align: 'center', divider: 'true'},
        { text: 'Fec. Nacimiento', value: 'fam_fecnacim', align: 'center', divider: 'true'},
        { text: 'Documento', value: 'documento', align: 'center', divider: 'true'},
        { text: 'C.M.', value: 'pfem_cm', align: 'center', divider: 'true'},
        { text: 'Profesión', value: 'pfem_profesion', align: 'center', divider: 'true'},
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
      familiares(val){
        this.desserts = val;
      },
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
      formatDate(format, date){
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
    },props:['familiares']
  }
</script>

