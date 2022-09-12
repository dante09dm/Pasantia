<template v-slot="FormBasic">
                <div class="mt-0 pa-5">
                    <v-form v-model="valid">
                        <v-row>
                            <v-col cols="12" md="4">
                                <v-sheet class="pa-5">
                                    <v-switch v-model="enable" color="info"
                                    :label=" !enable ? `PRESIONE PARA MODIFICAR` : `MODIFICACION ACTIVADA` "></v-switch>
                                </v-sheet>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" md="4">
                                <p class="font-weight-bold">
                                    INFORMACION PERSONAL
                                </p>
                    </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="4">
                    <v-text-field v-model="firstname" :rules="nameRules" :counter="35" label="Nombre" required
                    :disabled="!enable">
                </v-text-field>
                </v-col>
                <v-col cols="12" md="5">
                    <v-text-field v-model="lastname" :rules="lastnameRules" :counter="35" label="Apellido" required
                    :disabled="!enable">
                </v-text-field>
            </v-col>
            <v-col cols="3" md="1">
                <v-select :items="items_tipo" label="Tipo Doc." :disabled="!enable"></v-select>
            </v-col>
            <v-col cols="9" md="2">
                <v-text-field ref="dniNumber" type="number" label="Nro." required :disabled="!enable">
                </v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="2">
                <DatePicker text="Fecha de nacimiento" />
            </v-col>
            <v-col cols="12" md="2">
                <v-select :items="items_nac" label="Nacionalidad"></v-select>
                </v-col>
                <v-col cols="12" md="2">
                    <v-select :items="items_nac_t" label="Tipo de nacionalidad"></v-select>
                </v-col>
                <v-col cols="12" md="1">
                    <v-select :items="items_sexo" label="Sexo"></v-select>
                </v-col>
                <v-col cols="7" md="3">
                    <v-select v-model="estado_civil" :items="items_ec" label="Estado Civil"></v-select>
                </v-col>
                <v-col cols="5" md="2">
                    <DatePicker text="Fecha de Inicio"/>
                </v-col>
            </v-row>
            <v-row>
            </v-row>
        </v-form>
    </div>
</template>


<script>
    import DatePicker from '@/components/inputs/DatePicker.vue'
    
    export default {
    components:
    {
        DatePicker,
    },
    data() {
        return {
            enable: false,
            valid: false,
            firstname: '',
            lastname: '',
            estado_civil: '',
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
            items_nac_t: ['Nativo', 'Extranjero', 'Naturalizado', 'Por opcion'],
            items_ec: ['Soltero/a/x', 'Casado/a/x', 'Separado/a/x de Hecho', 'Separado/a/x Legalmente', 'Divorciado/a/x', 'Concubinato', 'Viudo/a/x',
                'Separado/a/x de Hecho - Concubinato', 'Unión Convivencial'],
        }
    },

}

</script>