<template v-slot="FormEditPhone">
    <div class="ma-0 pa-5">
        <v-form v-model="valid">
            <v-row>
                <v-col cols="3" md="3">
                    <v-select v-model="cod_pais" :items="items_cod_p" label="Cod. Pais"></v-select>
                </v-col>
                <v-col cols="3" md="3">
                    <v-text-field v-model="prefix" type="number" label="Prefijo sin 0" required></v-text-field>
                </v-col>
                <v-col cols="6" md="6">
                    <v-text-field v-model="number" type="number" label="Numero" required></v-text-field>
                </v-col>
                </v-row>
                <v-row>
                <v-col cols="6" md="6">
                    <v-select v-model="type_cont" :items="items_t_cont" label="Tipo de Contacto" required></v-select>
                </v-col>
                <v-col cols="6" md="6">
                    <v-select v-model="type_tel" :items="items_t_tel" label="Tipo de Telefono" required></v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-spacer></v-spacer>
                <v-btn
                    color="primary"
                    >
                    <v-icon>mdi-content-save-plus</v-icon>
                    Guardar numero
                </v-btn>
            </v-row>
        </v-form>
    </div>
</template>

<script>
    export default {
        components:
    {
        
    },
    data() {
        return {
            cod_pais: '54',
            prefix: '221',
            number: '5433182',
            type_cont: 'PROFESIONAL',
            type_tel: 'TELEFONO FIJO',

            valid: false,
            items_cod_p: ['54', '55', '57', '591', '595', '593'],
            items_t_cont: ['PARTICULAR', 'PROFESIONAL', 'ALTERNATIVO1', 'ALTERNATIVO2'],
            items_t_tel: ['CELULAR', 'TELEFONO FIJO', 'FAX'],
        }
    }
}

</script>