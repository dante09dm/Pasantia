<template>
  <div>
      <h2 class="text-center mt-2" >Seleccionar fecha</h2>
<v-row align="center">
  <v-date-picker
    v-model="date"
    full-width
    class="mt-4"
  ></v-date-picker>
</v-row>
  </div>
</template>

<script>

export default {
  data: () => ({
    date: (new Date(Date.now() - (new Date())
    .getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
  }),
  methods: {}
}
</script>
