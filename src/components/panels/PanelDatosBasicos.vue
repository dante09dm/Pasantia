<template>
    <v-expansion-panels hover mandatory>
      <v-expansion-panel class="border" popout>
        <v-expansion-panel-header>
          <h3>
            INFORMACION PERSONAL
          </h3>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <FormDatosBasicos />
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel class="border" popout>
        <v-expansion-panel-header>
          <h3>
            INFORMACION DE CONTACTO
          </h3>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <FormContact />
        </v-expansion-panel-content>
      </v-expansion-panel>
    <v-expansion-panel class="border" popout>
        <v-expansion-panel-header>
          <h3>
            DATOS PROFESIONALES
          </h3>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <FormDatosProfesionales />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

  </template>

<script>
  import FormDatosBasicos from '../forms/FormDatosBasicos.vue'
  import FormContact from '../forms/FormContact.vue';
  import FormDatosProfesionales from '../forms/FormDatosProfesionales.vue'


export default {
  data: () => ({

  }),

  components: {
    FormDatosBasicos,
    FormContact,
    FormDatosProfesionales
  },
}
</script>