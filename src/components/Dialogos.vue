<template>
<v-card>
        <v-card-title>
          <span class="text-h5">{{ titulo }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <!-- content -->
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
  </template>
  <script>
    export default {

        data() {
            return{
                
            }
        },
        props: ['titulo'],

    }

  </script>