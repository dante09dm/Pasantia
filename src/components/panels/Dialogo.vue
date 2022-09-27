<template>

  <v-dialog max-width="1200" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn fab small absolute right color="primary" dark v-bind="attrs" v-on="on">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h5>{{titulo}}</h5>
      </v-card-title>
      <v-card-text>

        <FormEditPhone v-if="cargaContent == 'phone'" />
        <FormEditAddress v-if="cargaContent == 'address'"/>
        <FormEditMail v-if="cargaContent == 'mail'"/>
        <FormEditFamily v-if="cargaContent == 'family'"/>
        <FormDatosProfesionales v-if="cargaContent == 'prof'" />

      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>

import FormEditPhone from '@/components/forms/FormEditPhone.vue'
import FormEditAddress from '@/components/forms/FormEditAddress.vue'
import FormEditMail from '@/components/forms/FormEditMail.vue'
import FormEditFamily from '@/components/forms/FormEditFamily.vue'
import FormDatosProfesionales from '../forms/FormDatosProfesionales.vue'

export default {
  data: () => ({
    dialog: false,
  }),
  components: {
    FormEditPhone,
    FormEditAddress,
    FormEditMail,
    FormEditFamily,
    FormDatosProfesionales
},
  props: ['titulo', 'cargaContent'],
}


</script>