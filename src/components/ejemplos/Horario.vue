
<template>
  <div>
    <v-time-picker v-model="picker" :landscape="$vuetify.breakpoint.smAndUp" ampm-in-title min="9:00" max="16:00"
      :allowed-minutes="allowedMinutes" class="border border-primary"></v-time-picker>
    <div class="d-flex justify-center">
      <p class="ma-2">Seleccionaste: {{ picker }}</p>
      <v-btn @click="fijarHora(picker)" :disabled="picker == null" outlined class="pa-5" color="primary">
        <v-icon class="mr-2">mdi-clock-outline</v-icon> Aceptar
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      picker: null,
      selectedTime: ''
    }
  },
  methods: {
    ...mapActions(['guardarHora']),
    allowedMinutes: m => m % 30 === 0,
    fijarHora(time) {
      this.selectedTime = time
      this.guardarHora(this.selectedTime)
    },
  },
  showPicker() {
    this.$emit("showPicker", picker)
  },
}
</script>
