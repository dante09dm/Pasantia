<template v-slot="FormDatosProfesionales">
    <div class="ma-0 pa-5">
        <v-form v-model="valid">
            <v-row>
                <h4>
                    Titulación y matriculación:
                </h4>
            </v-row>
            <v-row>
                <v-col cols="6" md="5">
                    <DatePicker text="Fecha de titulo"></DatePicker>
                </v-col>
                <v-col cols="6" md="5">
                    <DatePicker text="Fecha de matriculacion"></DatePicker>
                </v-col>
                <v-col cols="6" md="1">
                    <v-text-field name="name" label="Tomo" id="id">
                    </v-text-field>
                </v-col>
                <v-col cols="6" md="1">
                    <v-text-field name="name" label="Folio" id="id">
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <h4>Carga de archivos importantes (Titulo y matricula):</h4>
                </v-col>
                <v-col>
                    <v-file-input chips label="Adjuntar archivos" multiple show-size truncate-length="9">
                    </v-file-input>
                </v-col>
            </v-row>
        </v-form>
    </div>
</template>

<script>
import DatePicker from '../inputs/DatePicker.vue';
export default {
    components:
    {
        DatePicker
    },
    data() {
        return {
            valid: false,
        }
    }
}

</script>