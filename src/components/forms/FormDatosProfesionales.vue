<template v-slot="FormDatosProfesionales">
    <div class="ma-0 pa-5">
        <v-form v-model="valid">
                <v-col cols="12">
                    <h4>Carga de archivos importantes (Titulo y matricula):</h4>
                </v-col>
                <v-col>
                    <v-file-input chips label="Adjuntar archivos" multiple show-size truncate-length="9">
                    </v-file-input>
                </v-col>
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