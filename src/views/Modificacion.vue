<template>
    <v-card>
        <v-form v-model="valid">
            <v-container>
                <v-row>
                    <v-col cols="6" md="6">
                        <v-text-field v-model="firstname" :rules="nameRules" :counter="30" label="Nombre" required>
                        </v-text-field>
                    </v-col>


                    <v-col cols="6" md="6">
                        <v-text-field v-model="lastname" :rules="nameRules" :counter="20" label="Apellido" required>
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" md="4">
                        <DatePicker  />
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </v-card>
</template>


<script>

import DatePicker from '../components/inputs/DatePicker.vue'

export default {
    components:
    {
        InputFecha,
        DatePicker
    },
    data: () => ({
        valid: false,
        firstname: '',
        lastname: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => v.length <= 10 || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
    }),
}
</script>