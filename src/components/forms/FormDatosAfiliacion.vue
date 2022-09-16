<template v-slot="FormDatosAfiliacion">
    <div class="ma-0 pa-5">
        <v-form v-model="valid">
            <v-row>
                <v-col cols="6" md="6">
                    ¿Tiene algún tipo de Discapacidad?
                </v-col>
                <v-col cols="6" md="6">
                    <v-checkbox :label="((ex1) ? 'SI' : 'NO')" color="green" v-model="ex1"></v-checkbox>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="6" md="6">
                    ¿Solicitará la adhesión al Servicio de Emergencias Médicas y Área protegida de Consultorio?.
                </v-col>
                <v-col cols="6" md="6">
                    <v-checkbox :label="((ex2) ? 'SI' : 'NO')" color="green" v-model="ex2"></v-checkbox>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="6" md="6">
                    ¿Solicitará la afiliación voluntaria a la Obra Social IOMA?.
                </v-col>
                <v-col cols="6" md="6">
                    <v-checkbox :label="((ex3) ? 'SI' : 'NO')" color="green" v-model="ex3"></v-checkbox>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="6" md="6">
                    ¿Desea optar por la elección de Beneficiarios?.
                </v-col>
                <v-col cols="6" md="6">
                    <v-checkbox :label="((ex4) ? 'SI' : 'NO')" color="green" v-model="ex4"></v-checkbox>
                </v-col>
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
            ex1: false,
            ex2: false,
            ex3: false,
            ex4: false,
            valid: false,

        }
    }
}

</script>