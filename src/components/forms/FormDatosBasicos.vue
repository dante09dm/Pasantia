<template v-slot="FormBasic">
    <div class="mt-0 pa-5">
        <v-form v-model="valid">
            <v-row>
                <v-avatar class="ma-5" size="130">
                        <img alt="afiliado" :src="user.avatar" >
                    </v-avatar>
                <v-sheet v-if="isAuthenticated" class="pa-5">
                    <v-switch v-model="enable" color="info"
                        :label=" !enable ? `PRESIONE PARA MODIFICAR` : `MODIFICACION ACTIVADA` "></v-switch>
                </v-sheet>
            </v-row>
            <v-row>
                <v-col cols="12" md="4">
                    <v-text-field v-model="user.first_name" :rules="nameRules" :counter="35" label="Nombre" required
                        :disabled="!enable">
                    </v-text-field>
                </v-col>
                <v-col cols="12" md="5">
                    <v-text-field v-model="user.last_name" :rules="lastnameRules" :counter="35" label="Apellido" required
                        :disabled="!enable">
                    </v-text-field>
                </v-col>
                <v-col cols="3" md="1">
                    <v-select v-model="user.type_dni" :items="items_tipo" label="Tipo Doc." :disabled="!enable"></v-select>
                </v-col>
                <v-col cols="9" md="2">
                    <v-text-field v-model="user.id_number" ref="dniNumber" type="number" label="Nro." required :disabled="!enable">
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="2">
                    <DatePicker text="Fecha de nacimiento" />
                </v-col>
                <v-col cols="12" md="2">
                    <v-select v-model="user.nationality" :items="items_nac" label="Nacionalidad"></v-select>
                </v-col>
                <v-col cols="12" md="2">
                    <v-select :items="items_nac_t" label="Tipo de nacionalidad"></v-select>
                </v-col>
                <v-col cols="12" md="1">
                    <v-select v-model="user.sex" :items="items_sexo" label="Sexo"></v-select>
                </v-col>
                <v-col cols="7" md="3">
                    <v-select  :items="items_ec" label="Estado Civil"></v-select>
                </v-col>
                <v-col cols="5" md="2">
                    <DatePicker text="Fecha de Inicio" />
                </v-col>
            </v-row>
            <v-row>
            </v-row>
        </v-form>
    </div>
</template>


<script>
import DatePicker from '@/components/inputs/DatePicker.vue'
import { mapGetters } from 'vuex'

export default {
    components:
    {
        DatePicker,
    },
    data() {
        return {
            first_name: '',
            last_name: '',
            enable: true,
            valid: false,
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
    mounted(){

    },
    computed: {
        ...mapGetters(['user', 'isAuthenticated'])
    },
    methods: {

    },
    

}

</script>