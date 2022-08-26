<template>
	<v-select
          :items="items"
          outlined
          dense
          item-text="tcu_descr"
          item-value="tcu_id"
          v-model="seleccionado"
          :disabled="disabled"
    ></v-select>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'InputCategoriasUdec',
    data: () => ({
      items: [],
      seleccionado: ''
    }),
    watch:{
      seleccionado(val){
        this.$emit('cambiaCategoria', val);
      },
      categoria(val){
        this.seleccionado = val;
      }
    },
    methods:{
    	traeItems(){
    		var vue = this;
    		var url = process.env.VUE_APP_API;
    		axios.get(`${url}/CategoriasUDEC`).then(function(response){
    			
    			vue.items = response.data;
    			vue.seleccionado = response.data[0].tcu_id;
    		});
    	}
    },
    beforeMount(){
    	this.traeItems();
    },props:['categoria', 'disabled']
  }
</script>