<template v-slot="FormContact">
    <div class="ma-5 pa-5">
        <v-form v-model="valid">
            <v-row>
                <v-col cols="4" md="3">
                    <v-select :items="items_t" label="Tipo"></v-select>
                </v-col>
                <v-col cols="8" md="3">
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
            <v-btn right class="mb-6" color="info"><v-icon left >mdi-plus</v-icon>Agregar domicilio</v-btn>
            <v-divider></v-divider>
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
            items_t: ['PARTICULAR', 'PROFESIONAL', 'ALTERNATIVO1','ALTERNATIVO2','SINTYS','ANSES'],
            items_p: ['BUENOS AIRES', 'CHACO', 'CHUBUT', 'CORDOBA','CORRIENTES', 'FORMOSA','JUJUY','MISIONES','NEUQUEN'],
            items_l: [' LOC1', 'LOC2', 'LOC3', 'LOC4','LOC5', 'LOC6'],
        }
    }
}

</script>