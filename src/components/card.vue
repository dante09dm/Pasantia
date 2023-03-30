<template>

  <!--   <DialogoCard :dialog="dialog" :titulo="titulo" :tipo="tipo" @dialog="dialog = $event" :widthDialog="ancho" /> -->


  <v-card :loading="loading" class="mx-auto mt-5" max-width="450" outlined>



    <!-- Aca llamo al dialogo, le paso la variable y el titulo (en los props del dialogo)
        hay que ponerlo dentro del v-card -->
    <v-card height="110" color="primary" elevation-2 dark>

      <DialogoUser :dialog2="dialog2" title="Actualizar prefil" @dialog2="dialog2 = $event" />


      <v-card-title>
        <v-icon>mdi-account</v-icon>
        {{ titulo }}

        <!-- boton que despliega el dialogo -->
        <v-btn @click="lanzarDialogo()" small fab absolute right light color="white">
          <v-icon>mdi-account-edit-outline</v-icon>
        </v-btn>
      </v-card-title>



      <v-hover v-slot="{ hover }">
        <v-avatar size="130" style="position:absolute;bottom:0px;left: 30%; top: 20px;" class="ma-5">
          <v-img :src="`data:image/png;base64,${user.foto}`" />

          <v-expand-transition>
            <div v-if="hover" class="d-flex transition-out black darken-2 v-card--reveal text-h2 white--text"
              style="height: 40%;">
              <v-btn icon x-large @click="lanzarDialogoFoto()" color="white">
                <v-icon>mdi-camera</v-icon>
              </v-btn>

            </div>
          </v-expand-transition>
        </v-avatar>
      </v-hover>
    </v-card>

    <!--
    Se puede poner mas adelante 
  -->
    <template slot="progress">
      <v-progress-linear color="orange" height="10" indeterminate></v-progress-linear>
    </template>

    <v-card-title class="mt-10 font-weight-bold mb-0">
      {{ this.user.nombres }} {{ this.user.apellido }}
    </v-card-title>

    <v-card-text>
      <v-row class="mx-0" align="center">
        <div class="my-0 text-subtitle-2">
          {{ this.user.mail }}
        </div>
      </v-row>
      <v-row class="mx-0" align="center">
        <div class="my-0 text-subtitle-2">
          <!--             Estado:
            {{ user.estado }} -->
          {{ 'n° de doc: 33545854' }}
        </div>
      </v-row>

      <div class="my-4 text-subtitle-2">
        <!--           Estado:
          {{ user.estado }} -->
        {{ 'Estado: ACTIVO' }}
      </div>

      <div>Se podria usar un slot para rellenar con informacion directamente.
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>



    <v-card-actions>
      <v-btn color="primary" text @click="reserve">
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>

</template>
<script>

import { mapGetters } from 'vuex'

import DialogoUser from '@/components/DialogoUser.vue'

export default {
  /* name: "UserCard",*/
  components: {
    // ButtonInput,
    //DialogoFoto,
    DialogoUser,
  },
  data: () => ({
    //dialog: false,

    // en la data va el dialog2 que se lo pasas por props
    dialog2: false,

    loading: false,
    selection: 1,

  }),
  methods: {
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },

    //este metodo se llama cuando se hace click en el boton
    lanzarDialogo() {
      this.dialog2 = true;
    },
  },
  computed: {
    ...mapGetters(["user"])
  },
  props: ["titulo"],

}
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .35;
  position: absolute;
  width: 100%;
}
</style>