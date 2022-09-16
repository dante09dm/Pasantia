<template v-slot="FormContact">
    <div class="ma-0 pa-5">
        <v-form v-model="valid">
            <v-row>
                <h4 class="font-weight-medium">
                    Domicilios:
                </h4>
            </v-row>
            <v-row>
                <v-col cols="6" md="3">
                    <v-select :items="items_t" label="Tipo"></v-select>
                </v-col>
                <v-col cols="6" md="3">
                    <v-select :items="items_p" label="Provincia"></v-select>
                </v-col>
                <v-col cols="8" md="4">
                    <v-select :items="items_l" label="Localidad"></v-select>
                </v-col>
                <v-col cols="4" md="2">
                    <v-text-field type="number" label="Cod. Postal" required></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="8" md="6">
                    <v-text-field ref="calle" type="text" label="Calle" required></v-text-field>
                </v-col>
                <v-col cols="4" md="2">
                    <v-text-field ref="calle" type="text" label="Nro." required></v-text-field>
                </v-col>
                <v-col cols="6" md="2">
                    <v-text-field type="Piso" label="Piso."></v-text-field>
                </v-col>
                <v-col cols="6" md="2">
                    <v-text-field type="Dpto." label="Dpto."></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-btn right class="mb-6" color="info">
                    <v-icon left>mdi-plus</v-icon>Agregar domicilio
                </v-btn>
            </v-row>
            <v-row>
                <v-divider></v-divider>
            </v-row>
            <v-row>
                <h4 class="mt-5 font-weight-medium">
                    Telefonos:
                </h4>
            </v-row>
            <v-row>
                <v-col cols="3" md="1">
                    <v-select :items="items_cod_p" label="Cod. Pais"></v-select>
                </v-col>
                <v-col cols="3" md="1">
                    <v-text-field type="number" label="Prefijo sin 0" required></v-text-field>
                </v-col>
                <v-col cols="6" md="4">
                    <v-text-field type="number" label="Numero" required></v-text-field>
                </v-col>
                <v-col cols="6" md="3">
                    <v-select :items="items_t_cont" label="Tipo de Contacto" required></v-select>
                </v-col>
                <v-col cols="6" md="3">
                    <v-select :items="items_t_tel" label="Tipo de Telefono" required></v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-btn right class="mb-6" color="info">
                    <v-icon left>mdi-plus</v-icon>Agregar telefono
                </v-btn>
            </v-row>
            <v-row>
                <v-divider></v-divider>
            </v-row>
            <v-row>
                <h4 class="mt-5 font-weight-medium">
                    E-mails:
                </h4>
            </v-row>
            <v-row>
                <v-col cols="12" md="6">
                    <v-text-field v-model="mail" label="Direccion de e-mail" required></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <v-select v-model="tipo_mail" :items="items_t_cont" label="Tipo de Mail" required></v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-btn right class="mb-6" color="info">
                    <v-icon left>mdi-plus</v-icon>Agregar mail
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
            valid: false,
            items_t: ['PARTICULAR', 'PROFESIONAL', 'ALTERNATIVO1', 'ALTERNATIVO2', 'SINTYS', 'ANSES'],
            items_p: ['BUENOS AIRES', 'CHACO', 'CHUBUT', 'CORDOBA', 'CORRIENTES', 'FORMOSA', 'JUJUY', 'MISIONES', 'NEUQUEN'],
            items_l: [' LOC1', 'LOC2', 'LOC3', 'LOC4', 'LOC5', 'LOC6'],
            items_cod_p: ['54', '55', '57', '591', '595', '593'],
            items_t_cont: ['PARTICULAR', 'PROFESIONAL', 'ALTERNATIVO1', 'ALTERNATIVO2'],
            items_t_tel: ['CELULAR', 'TELEFONO FIJO', 'FAX'],


            mail:'',
            tipo_mail:''
        }
    }
}

</script>