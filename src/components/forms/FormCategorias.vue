<template>
<div>
<v-form ref="form" style="padding: 1rem;">
	<v-row>
		<v-col cols="12" md="4" class="my-column">
			<label for="">Categoría:</label>
			<InputCategoriasUdec @cambiaCategoria="setea('categoria',$event)" 
								 :disabled="disabled" :categoria="params.categoria"/>
		</v-col>
		<v-col cols="12" md="2" class="my-column">
			<label for="">Monto:</label>
			 <v-text-field
        			outlined
        			dense
        			class="input-text-sencha"
        			v-model="params.monto"
        			onkeypress="return soloMontos(event)"
      		></v-text-field>
		</v-col>
		<v-col cols="12" md="3" class="my-column">
			<label for="">Desde:</label>
			<InputFecha :fecha="params.desde"
						@cambiaFecha="setea('desde',$event)"/>
		</v-col>
		<v-col cols="12" md="3" class="my-column">
			<label for="">Hasta:</label>
			<InputFecha :fecha="params.hasta"
						@cambiaFecha="setea('hasta',$event)"/>
		</v-col>
	</v-row>

	<v-row>
		<v-spacer></v-spacer>
		<v-btn color="primary" @click="enviarCategoria">
      <span class="mr-2">Guardar</span>       <i class="far fa-save" style="font-size: 1rem;"></i>
    </v-btn>
	</v-row>

	<v-row>
		<v-col cols="12" md="12">
			<Panel 	:refreshCategorias="refreshCategorias"
					@editarCategoria="editarCategoria($event)"
					titulo="Categorías" 
					content="gridCategorias"/>
		</v-col>
	</v-row>
 </v-form>


</v-row>
 </v-form>
</div>
</template>

<script>
import Panel from '@/components/panels/Panel.vue'
import InputCategoriasUdec from '@/components/inputs/InputCategoriasUdec.vue'
import InputFecha from '@/components/inputs/InputFecha.vue'
export default{
	name: 'FormCategorias',
	components:{
		Panel,
		InputCategoriasUdec,
		InputFecha
	},
	data(){
		return{
			estado:'A',
			fileDisabled: true,
			params: {
				desde: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
				hasta: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
				categoria: 1,
				monto: '',
				tipop:'A',
				cudc_id: 0
			},
			familiares:[],
			disabled: false,
			refreshCategorias: false,
		}
	},
	methods:{
		limpiarFormulario(){
			this.params = {
				desde: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
				hasta: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
				categoria: 1,
				monto: '',
				tipop:'A',
				cudc_id: 0
			};
			this.disabled = false;
			this.refreshCategorias=!this.refreshCategorias
		},
		setea(param,dato){
			switch (param){
				case 'categoria': this.params.categoria = dato; break;
				case 'desde': this.params.desde = dato; break;
				case 'hasta': this.params.hasta = dato; break;
			}
		},
		validacion(){
			var items = this.params;
			var valido = false;
			var msj = 'Por favor, rellene el campo categoría';
			if(items.categoria !== "" && items.categoria !== null){
				msj = 'Por favor, rellene el campo monto';
				if(items.monto !== "" && items.monto !== null){
					msj = 'Por favor, rellene el campo fecha desde';
					if(items.desde !== "" && items.desde !== null){
						msj = 'Las fechas desde y hasta deben ser contigüas';
						if(new Date(items.desde) < new Date(items.hasta) || items.hasta == "" || items.hasta == null){
							valido = true;
						}
					}
				}
			}

			if(!valido){
				toast('ERROR!', msj, 'error');
			}
			return valido;
		},
		enviarCategoria(){
			var data = this.params;
			data.usuario = this.$store.usuario.idViejo;

			var vue= this;
			var url = process.env.VUE_APP_API  + `/CategoriasUDEC/InsertCategoria`;
			if(this.validacion()){
      			$.ajax({
          			url: url,
          			type: 'POST',
          			dataType: 'JSON',
          			data: data,
          			success:function(response){ 
          				if(response.id > 0){
          					var msj = 'Se ha agregado la categoría';
              				if(data.tipop = 'E') msj = 'Se ha modificado la categoría';
              				toast(msj, '', 'success');

              				vue.limpiarFormulario();
              			}else{
              				toast('No se ha podido agregar la categoría, por favor verifique que las fechas sean contigüas a los registros anteriores', '', 'error');
              			}
          			}
      			});
      		}
		},
		editarCategoria(item){
			var hasta = item.cudc_hasta;
			if(item.cudc_hasta == "1900-01-01" || item.cudc_hasta == "1900-01-01 00:00:00") hasta = '';

			this.params = {
				desde: item.cudc_desde,
				hasta: hasta,
				categoria: item.cudc_tcu_id,
				monto: item.cudc_monto,
				tipop:'E',
				cudc_id: item.cudc_id
			};
			this.disabled = true;
		}
	},
	props:['detalle', 'limpiaDetalle']
}
</script>