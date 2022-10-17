<template v-slot="FormDatosProfesionales">
    <div class="ma-0 pa-5">
        <v-form v-model="valid">
            <v-col cols="12">
                <h4>Carga de archivos importantes (Titulo y matricula):</h4>
            </v-col>
            <v-col>
                <v-file-input chips label="Adjuntar archivos" multiple show-size truncate-length="9" type="file"
                    accept=".png, .jpg, .jpeg, .pdf">
                </v-file-input>
            </v-col>
            <v-col>
                <v-btn color="primary">Enviar archivos</v-btn>
            </v-col>
            <v-col>
                <span> Los archivos seran analizados y actualizados en su perfil </span>
            </v-col>
        </v-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            valid: false,
        }
    }
}

</script>