<template>
    <v-container fluid>
        <v-card>
            <v-card-title>Modificacion de datos</v-card-title>
            <v-divider></v-divider>
            <div class="ma-10 pa-10">
                <v-form v-model="valid">
                    <v-row>
                        <v-col cols="12" md="6">
                            <v-text-field v-model="firstname" :rules="nameRules" :counter="30" label="Nombre" required>
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field v-model="lastname" :rules="lastnameRules" :counter="20" label="Apellido"
                                required>
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="3">
                            <DataPicker />
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-select :items="items_s" label="Sexo"></v-select>
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-select :items="items_d" label="Tipo Doc."></v-select>
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-text-field ref="dniNumber" label="Nro." required></v-text-field>
                        </v-col>
                    </v-row>
                </v-form>
            </div>
            <v-divider></v-divider>
            <v-card-actions class="d-flex justify-end mb-6">
                <v-btn class="ma-3" color="secondary">Borrar campos</v-btn>
                <v-btn class="ma-3" color="info">Actualizar datos</v-btn>
            </v-card-actions>

        </v-card>
    </v-container>
</template>


<script>

import DataPicker from '@/components/inputs/DatePicker.vue'

export default {
    components:
    {
        DataPicker,
    },
    data() {
        return {
            valid: false,
            firstname: '',
            lastname: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => v.length <= 10 || 'Name must be less than 10 characters',
            ],
            email: '',
            lastnameRules: [
                v => !!v || 'Last name is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
            items_s: ['M', 'F', 'X'],
            items_d: ['DNI', 'CI', 'LE', 'LC', 'PAS'],

        }
    },
}
</script>