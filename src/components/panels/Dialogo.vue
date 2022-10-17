<template>

  <v-dialog max-width="1200" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn fab small absolute right color="primary" dark v-bind="attrs" v-on="on">
        <v-icon>{{icon}}</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h5>{{titulo}}</h5>
      </v-card-title>
      <v-card-text>
        <FormEditProfile v-if="content == 'actualizar'" />
        <FormEditPhone v-if="content == 'phone'" />
        <FormEditAddress v-if="content == 'address'" />
        <FormEditMail v-if="content == 'mail'" />
        <FormEditFamily v-if="content == 'family'" />
        <FormDatosProfesionales v-if="content == 'prof'" />

      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
//Ema
//Componente generico de Dialogos
//Recibe icono, titulo, contenido 
//muestra en el dialogo el fomulario correspondiente

import FormEditPhone from '@/components/forms/FormEditPhone.vue'
import FormEditAddress from '@/components/forms/FormEditAddress.vue'
import FormEditMail from '@/components/forms/FormEditMail.vue'
import FormEditFamily from '@/components/forms/FormEditFamily.vue'
import FormDatosProfesionales from '@/components/forms/FormDatosProfesionales.vue'
import FormEditPhoto from '@/components/forms/FormEditPhoto.vue'
import FormEditProfile from '@/components/forms/FormEditProfile.vue'


export default {
  data: () => ({
    dialog: false,
  }),
  components: {
    FormEditPhoto,
    FormEditPhone,
    FormEditAddress,
    FormEditMail,
    FormEditFamily,
    FormDatosProfesionales,
    FormEditProfile
  },
  props: ['icon', 'titulo', 'content', 'text'],
}


</script>