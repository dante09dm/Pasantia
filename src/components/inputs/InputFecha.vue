<template>
  <v-menu
    ref="menu1"
    v-model="menu1"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="auto"
  >
  <template v-slot:activator="{ on, attrs }">
    <v-text-field
      v-model="dateFormatted"
      append-icon="mdi-calendar"
      @blur="date = parseDate(dateFormatted)"
      v-on="on"
      outlined
      clearable
      readonly
      dense
    ></v-text-field>
  </template>
  <v-date-picker
  v-model="date"
  no-title
  @input="menu1 = false"
  ></v-date-picker>
</v-menu>
</template>


<script>

  export default {
    data: vm => ({
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      dateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
      menu1: false,
    }),

    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      },
    },

    watch: {
      date (val) {
        if(val !== null && val !== "")
          this.dateFormatted = this.formatDate(this.date)
        else this.dateFormatted = ""
      },
      dateFormatted(val){
        this.$emit('cambiaFecha', this.date);
      },
      fecha(val){
        if(val !== null && val !== ""){
          var fec = val;
          if(val.length > 10) fec = val.slice(0,10);
          this.date = fec;
        }else{
          this.date = "";
          this.dateFormatted = "";
        }
      },
    },

    methods: {
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${day}/${month}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [day, month, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
    },props:['fecha']
  }
</script>