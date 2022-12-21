<!-- Vuetify Datepicker https://vuetifyjs.com/en/components/date-pickers/ -->


<template>
  <div>
<v-row align="center">
  <v-date-picker
    v-model="date"
    :allowed-dates="disablePastDates"
  is-range
    full-width
    class=" my-6 border border-primary"
  ></v-date-picker>
</v-row>
{{date}}
  </div>
</template>

<script>

export default {
  name: "Fecha",
  data: () => ({
   date: (new Date(Date.now() - (new Date())
    .getTimezoneOffset() * 60000)).toISOString().substr(0, 10),

   
    
    
  }),
  methods: {
    disablePastDates(val) {
       return val >= new Date().toISOString().substr(0, 10)
    },
    allowedDates: val => parseInt(val.split('-')[2], 10) % 2 === 0,
    },
    showDate(){this.$emit("showDate", date)
    },

  
  
  }
</script>
