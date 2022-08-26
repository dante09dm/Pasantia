<template>
<div>
<v-toolbar class="border-top" v-if="!detalleDisabled">
    <v-spacer></v-spacer>
    <v-btn color="primary" :disabled="fileDisabled" @click="abreFicha" class="text-h6">
      <i class="fas fa-file-pdf"></i>         
    </v-btn>
 </v-toolbar>
<v-form ref="form" style="padding: 1rem;" v-if="estado == 'A'" >
	<v-row  v-if="!detalleDisabled">
		<v-col cols="12" md="6" class="my-column">
			<label for="">Email:</label>
			<v-text-field
					disabled
        			outlined
        			dense
        			class="input-text-sencha"
        			v-model="params.email"
      		></v-text-field>
		</v-col>
		<v-col cols="12" md="2" class="my-column">
			<label for="">Teléfono:</label>
			 <v-text-field
			 		disabled
        			outlined
        			dense
        			class="input-text-sencha"
        			v-model="params.telefono"
      		></v-text-field>
		</v-col>
		<v-col cols="12" md="2" class="my-column">
			<label for="">Teléfono Prof.:</label>
			<v-text-field
					disabled
        			outlined
        			dense
        			class="input-text-sencha"
        			v-model="params.telefonoProf"
      		></v-text-field>
		</v-col>
		<v-col cols="12" md="2" class="my-column">
			<label for="">Celular:</label>
			<v-text-field
					disabled
        			outlined
        			dense
        			class="input-text-sencha"
        			v-model="params.celular"
      		></v-text-field>
		</v-col>
	</v-row>

	<v-row v-if="!detalleDisabled">
		<v-col cols="12" md="6" class="my-column">
			<label for="">Domicilio:</label>
			 <v-text-field
			 		disabled
        			outlined
        			dense
        			class="input-text-sencha"
        			v-model="params.domicilio"
      		></v-text-field>
		</v-col>

		<v-col cols="12" md="6" class="my-column">
			<label for="">Domicilio Profesional:</label>
			<v-text-field
					disabled
        			outlined
        			dense
        			class="input-text-sencha"
        			v-model="params.domicilioProf"
      		></v-text-field>
		</v-col>
	</v-row>

	<v-row v-if="!detalleDisabled">
		<v-col cols="12" md="4" class="my-column">
			<label for="">Cobertura Médica:</label>
			<v-text-field
					disabled
        			outlined
        			dense
        			class="input-text-sencha"
        			v-model="params.pem_cobMedica"
      		></v-text-field>
		</v-col>
		<v-col cols="12" md="4" class="my-column">
			<label for="">Profesión:</label>
			<v-text-field
					disabled
        			outlined
        			dense
        			class="input-text-sencha"
        			v-model="params.pem_profesion"
      		></v-text-field>
		</v-col>
		<v-col cols="12" md="4" class="my-column">
			<label for="">Deportes:</label>
			<v-text-field
					disabled
        			outlined
        			dense
        			class="input-text-sencha"
        			v-model="params.pem_deportes"
      		></v-text-field>
		</v-col>
	</v-row>
	<v-row>
		<v-col cols="12" md="12">
			<Panel :familiares="familiares" 
					titulo="Familiares a Cargo" 
					content="grid"/>
		</v-col>
	</v-row>
 </v-form>


 <v-form style="padding: 1rem;" v-if="estado == 'B'">
	<v-row>
		<v-col cols="12" md="12" class="my-column">
			<label for="">Motivo de la Baja:</label>
			<v-text-field
					disabled
        			outlined
        			dense
        			class="input-text-sencha"
        			v-model="params.pem_motivoBaja"
      		></v-text-field>
		</v-col>
	</v-row>

	
	<v-row>
		<v-col cols="12" md="12" class="my-column">
			<label for="">Observaciones:</label>
			<v-textarea
          		disabled
        		outlined
          		auto-grow
          		rows="8"
          		row-height="18"
          		class="input-textarea-sencha"
        		v-model="params.pem_observacionesBaja"
          	></v-textarea>
		</v-col>
	</v-row>
 </v-form>
</div>
</template>

<script>
import Panel from '@/components/panels/Panel.vue'
export default{
	name: 'FormDetalleEM',
	components:{
		Panel
	},
	data(){
		return{
			estado:'A',
			fileDisabled: true,
			params: {
				email: '',
				telefono: '',
				telefonoProf: '',
				celular: '',
				domicilio: '',
				domicilioProf: '',
				pem_deportes: '',
				pem_cobMed: '',
				pem_profesion:'',
				pem_observacionesBaja: '',
				pem_motivoBaja: ''
			},
			familiares:[],
			detalleDisabled: false
		}
	},
	watch:{
		detalle(val){	
			this.limpia();
			if(val !== '' && val.length > 0){
				this.params = val[0];
				this.estado = val[0].pem_estado;
				this.fileDisabled = false;
			}
			this.buscarFamiliares();
		},
		limpiaDetalle(){
			this.limpia();
		},
		antigua(val){
			this.detalleDisabled = false;
			if(val == true) this.detalleDisabled = true;
		}
	},
	methods:{
		limpia(){
			this.fileDisabled = true;
			this.detalleDisabled = false;
			this.familiares = [];
			this.params = {
				email: '',
				telefono: '',
				telefonoProf: '',
				celular: '',
				domicilio: '',
				domicilioProf: '',
				pem_deportes: '',
				pem_cobMed: '',
				pem_profesion:'',
				pem_observacionesBaja: '',
				pem_motivoBaja: ''
			};
			this.estado = 'A';
		},
		abreFicha(){
			var url = process.env.VUE_APP_PDF + "anillo/sica/aportes/EmergenciasMedicas/fichaDeAfiliacion/";

			var doc = 'generator_ficha.php'
			if(this.params.pem_estado == "B") doc = 'generator_fichaBaja.php';

			var nroafi = this.params.pem_nroafi;
			var pem_id = this.params.pem_id;

			url = `${url}${doc}?${nroafi}-${pem_id}`;
			abrePDF(url);	
		},
		buscarFamiliares(){
			var antigua = this.antigua;
			if(this.antigua == undefined) antigua = false;  
			var data = {pem_id: this.params.pem_id,
									nroafi: $("#nroafi").val(),
									antigua: antigua
								};
			var vue= this;
			var url = process.env.VUE_APP_API  + `/PreEM/PreFamiliares`;
      		$.ajax({
          		url: url,
          		type: 'POST',
          		dataType: 'JSON',
          		data: data,
          		success:function(response){ 
              		vue.familiares = response;
              		vue.$store.familiares = response;
          		}
      		});
		}
	},
	props:['detalle', 'limpiaDetalle', 'antigua']
}
</script>