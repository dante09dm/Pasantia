<template v-slot="FormBasic">
    <div class="ma-5 pa-5">
        <v-form v-model="valid">
            <v-row>
                <v-col cols="12" md="4">
                    <v-text-field v-model="firstname" :rules="nameRules" :counter="30" label="Nombre" required>
                    </v-text-field>
                </v-col>
                <v-col cols="12" md="5">
                    <v-text-field v-model="lastname" :rules="lastnameRules" :counter="20" label="Apellido" required>
                    </v-text-field>
                </v-col>
                <v-col cols="12" md="1">
                    <v-select :items="items_tipo" label="Tipo Doc."></v-select>
                </v-col>
                <v-col cols="12" md="2">
                    <v-text-field ref="dniNumber" type="number" label="Nro." required></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="2">
                    <DataPicker text="Fecha de nacimiento" />
                </v-col>
                <v-col cols="12" md="2">
                    <v-select :items="items_nac" label="Nacionalidad"></v-select>
                </v-col>
                <v-col cols="12" md="1">
                    <v-select :items="items_sexo" label="Sexo"></v-select>
                </v-col>
                <v-col cols="12" md="2">
                    <v-select :items="items_ec" label="Estado Civil"></v-select>
                </v-col>
                <v-col cols="12" md="3">
                    <DataPicker label="Fecha de Inicio" />
                </v-col>
                <v-col cols="12" md="2">
                    <v-select :items="items_ec" label="Estado Civil"></v-select>
                </v-col>
                <v-col cols="12" md="2">
                    <v-select :items="items_ec" label="Estado Civil"></v-select>
                </v-col>
            </v-row>
            <v-row>
            </v-row>
        </v-form>
    </div>
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
                v => v.length <= 30 || 'Name must be less than 30 characters',
            ],
            email: '',
            lastnameRules: [
                v => !!v || 'Last Name must be less than 30 characters',
                v => v.length <= 30 || 'E-mail must be valid',
                // v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
            items_sexo: ['M', 'F', 'X'],
            items_tipo: ['DNI', 'CI', 'LE', 'LC', 'PAS'],
            items_nac: ['Argentina', 'Peruana', 'Boliviana', 'Chilena', 'Extranjero', 'Uruguaya', 'Paraguaya', 'Brasileña'],
            items_nac_1: ['Nativo', 'Extranjero', 'Naturalizado', 'Por opcion'],
            items_ec: ['Soltero/a/x', 'Casado/a/x', 'Separado/a/x de Hecho', 'Separado/a/x Legalmente', 'Divorciado/a/x', 'Concubinato', 'Viudo/a/x',
                'Separado/a/x de Hecho - Concubinato', 'Unión Convivencial'],
        }
    }
}

</script>