<!-- Vuetify Datepicker https://vuetifyjs.com/en/components/date-pickers/ -->

<template>
  <div>
    <v-date-picker min-width="400px" v-model="date" :allowed-dates="disablePastDates" is-range
      class=" my-6 border border-primary"></v-date-picker>
    <div class="d-flex justify-center">
      <p class="ma-2">Seleccionaste: {{ date }}</p>
      <v-btn :disabled="date == hoy" outlined @click="fijarFecha(date)" class="pa-5" color="primary">
        <v-icon class="mr-2">mdi-calendar-outline</v-icon> Aceptar
      </v-btn>
    </div>
  </div>

</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "Fecha",
  data: () => ({
    date: (new Date(Date.now() - (new Date())
      .getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    selectedDate: '',
    hoy: (new Date(Date.now() - (new Date())
      .getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
  }),

  methods: {
    ...mapActions(['guardarFecha']),
    disablePastDates(val) {
      return val >= new Date().toISOString().substr(0, 10)
    },
    allowedDates: val => parseInt(val.split('-')[2], 10) % 2 === 0,
    fijarFecha(date) {
      this.selectedDate = date
      this.guardarFecha(this.selectedDate)
    }
  },

  showDate() {
    this.$emit("showDate", date)
    this.selectedDate = this.date
    console.log(this.selectedDate)
  },

}
</script>
