<template v-slot="FormEditMail">
    <div class="ma-0 pa-5">
        <v-form v-model="valid">
            <v-row>
                <v-col cols="12" md="6">
                    <v-text-field v-model="mail" label="Direccion de e-mail" required></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <v-select v-model="tipo_mail" :items="items_t_cont" label="Tipo de Mail" required></v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-spacer></v-spacer>
                <v-btn
                    color="primary"
                    >
                    <v-icon>mdi-content-save-plus</v-icon>
                    Guardar mail
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