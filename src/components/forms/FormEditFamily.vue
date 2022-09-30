<template v-slot="FormEditMail">
    <div class="ma-0 pa-5">
        <v-form v-model="valid">
            <v-row>
                <v-col cols="12" md="4">
                    <v-text-field v-model="first_name" label="Nombre" required></v-text-field>
                </v-col>
                <v-col cols="12" md="5">
                    <v-text-field v-model="last_name" label="Apellido" required>
                    </v-text-field>
                </v-col>
                <v-col cols="4" md="1">
                    <v-select v-model="type_dni" :items="items_doc_t" label="Tipo Doc."></v-select>
                </v-col>
                <v-col cols="8" md="2">
                        <ValidationProvider rules="minmax:7,8" v-slot="{ errors }">
                        <v-text-field v-model="id_number" label="Nro."></v-text-field>
                        <span> {{ errors[0] }} </span>
                        </ValidationProvider>
                    </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="2">
                    <DatePicker text="Fecha de nacimiento" />
                </v-col>
                <v-col cols="12" md="2">
                    <v-select v-model="nationality" :items="items_nac" label="Nacionalidad"></v-select>
                </v-col>
                <v-col cols="12" md="2">
                    <v-select v-model="t_nac" :items="items_nac_t" label="Tipo de nacionalidad"></v-select>
                </v-col>
                <v-col cols="12" md="1">
                    <v-select v-model="sex" :items="items_sexo" label="Sexo"></v-select>
                </v-col>
                <v-col cols="7" md="3">
                    <v-select v-model="est_civil" :items="items_ec" label="Estado Civil"></v-select>
                </v-col>
                <v-col cols="5" md="2">
                    <DatePicker v-if="est_civil !== 'Soltero/a/x'" text="Fecha de Inicio" />
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="8" md="6">
                    <v-select v-model="parentesco" :items="items_par" label="Parentesco"></v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="6" md="6">
                    <p>¿Vive?:</p>
                    <v-switch v-model="vive" color="info" :label=" !vive ? `NO` : `SI` "></v-switch>
                </v-col>
                <v-col cols="6" md="6">
                    <DatePicker v-if="!vive" text="Fecha de fallecimiento" />
                </v-col>
                <v-col cols="12" md="12">
                    <p>Posee discapacidad:</p>
                    <v-switch v-model="disc" color="info" :label=" !disc ? `NO` : `SI` "></v-switch>
                </v-col>
            </v-row>
            <v-row>
                <v-spacer></v-spacer>
                <v-btn color="primary">
                    <v-icon class="mr-2">mdi-content-save-plus</v-icon>
                    Guardar familiar
                </v-btn>
            </v-row>
        </v-form>
    </div>
</template>

<script>
import validations from '../../validation'
import { ValidationProvider, extend } from 'vee-validate';
import DatePicker from '@/components/inputs/DatePicker.vue';


export default {
    components:
    {
        DatePicker,
        ValidationProvider,

    },
    data() {
        return {
            first_name: '',
            last_name: '',
            type_dni: '',
            id_number: '',
            nationality: '',
            t_nac: '',
            est_civil: '',
            valid: false,
            vive: true,
            disc: false,
            items_nac: ['Argentina', 'Peruana', 'Boliviana', 'Chilena', 'Extranjero', 'Uruguaya', 'Paraguaya', 'Brasileña'],
            items_nac_t: ['Nativo', 'Extranjero', 'Naturalizado', 'Por opcion'],
            items_sexo: ['M', 'F'],
            items_doc_t: ['DNI', 'CI', 'LE', 'LC', 'PAS'],
            items_par: ['CONYUGE', 'CONVIVIENTE', 'HIJO', 'PADRE', 'MADRE', 'OTRO'],
            items_ec: ['Soltero/a/x', 'Casado/a/x', 'Separado/a/x de Hecho', 'Separado/a/x Legalmente', 'Divorciado/a/x', 'Concubinato', 'Viudo/a/x',
                'Separado/a/x de Hecho - Concubinato', 'Unión Convivencial']
        }
    }
}

</script>