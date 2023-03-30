<template>
  <v-row justify="center">
    <form>
      <v-col sm="4">
      </v-col>
      <v-text-field v-model="name" :error-messages="nameErrors" :counter="10" label="Nombre" required
        @input="$v.name.$touch()" @blur="$v.name.$touch()"></v-text-field>
      <v-col sm="4">
      </v-col>
      <v-text-field v-model="surname" :error-messages="surnameErrors" :counter="10" label="Apellido" required
        @input="$v.surname.$touch()" @blur="$v.surname.$touch()"></v-text-field>
      <v-col sm="4">
      </v-col>
      <v-text-field v-model="email" :error-messages="emailErrors" label="E-mail" required @input="$v.email.$touch()"
        @blur="$v.email.$touch()"></v-text-field>
      <v-col sm="4">
      </v-col>
      <v-select v-model="select" :items="items" :error-messages="selectErrors" label="Distrito" required
        @change="$v.select.$touch()" @blur="$v.select.$touch()"></v-select>
      <v-col sm="3">
      </v-col>
      <p class="font-weight-bold mb-2">
        Usted a elegido un turno con fecha {{ fecha }} y horario {{ hora }}
      </p>

      <v-checkbox v-model="checkbox" :error-messages="checkboxErrors" label="¿Estás de acuerdo?" required
        @change="$v.checkbox.$touch()" @blur="$v.checkbox.$touch()"></v-checkbox>

      <v-btn class="mr-4" @click="submit">
        Reservar
      </v-btn>
      <v-btn @click="clear">
        Borrar
      </v-btn>



    </form>
  </v-row>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "formulario",
  components: {

  },

  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(15) },
    surname: { required, maxLength: maxLength(15) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked(val) {
        return val
      },
    },
  },

  data: () => ({
    dialog: false,
    name: '',
    surname: '',
    email: '',
    select: null,
    items: [
      'Distrito I',
      'Distrito II',
      'Distrito III',
      'Distrito V',
      'Distrito VI',
      'Distrito VII',
      'Distrito VIII',
      'Distrito IX',
      'Distrito X',
      'Distrito XI',
      'Distrito XII',
      'Distrito XIII',
      'Distrito XIV',
      'Distrito XV',
    ],
    checkbox: false,
  }),

  computed: {
    ...mapGetters(['fecha', 'hora']),

    checkboxErrors() {
      const errors = []
      if (!this.$v.checkbox.$dirty) return errors
      !this.$v.checkbox.checked && errors.push('Debés estar de acuerdo para continuar!')
      return errors
    },
    selectErrors() {
      const errors = []
      if (!this.$v.select.$dirty) return errors
      !this.$v.select.required && errors.push('Distrito es requerido')
      return errors
    },
    nameErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('Nombre debe tener como máximo 15 caracteres')
      !this.$v.name.required && errors.push('Nombre es requerido.')
      return errors
    },
    surnameErrors() {
      const errors = []
      if (!this.$v.surname.$dirty) return errors
      !this.$v.surname.maxLength && errors.push('Apellido debe tener como máximo 15 caracteres')
      !this.$v.surname.required && errors.push('Apellido es requerido.')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Debe ingresar un e-mail válido')
      !this.$v.email.required && errors.push('E-mail es requerido')
      return errors
    },
  },
  methods: {
    submit() {
      this.$v.$touch()
    },
    clear() {
      this.$v.$reset()
      this.name = ''
      this.surname = ''
      this.email = ''
      this.select = null
      this.checkbox = false
    },

  },
}

</script>