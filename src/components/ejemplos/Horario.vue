
<template>
  <div>
  <v-row

    justify="space-around"
    align="center"
  >
    <v-time-picker
      v-model="picker"
      :landscape="$vuetify.breakpoint.smAndUp"
      ampm-in-title
      min="9:00"
   max="16:00"
   :allowed-minutes="allowedMinutes"
   class="border border-primary"
    ></v-time-picker>
  </v-row>
</div>
</template>





<script>
  export default {
    data () {
      return {
        picker: null,
      }
    },
    methods: {
    allowedMinutes: m => m % 15 === 0,},
    showPicker(){this.$emit("showPicker", picker)
  },}
</script>
