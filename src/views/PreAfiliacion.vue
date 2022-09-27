<template>
    <div>

        <v-card>
            <v-card-title>
                <h5>
                    Pre Afiliacion
                </h5>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-item>
                <FormDatosBasicos />
                <FormContact />
                <FormDatosProfesionales />

            </v-card-item>
        </v-card>
    
    </div>
</template>


<script>
import FormDatosBasicos from '../components/forms/FormDatosBasicos.vue';
import FormContact from '../components/forms/FormContact.vue';
import FormDatosProfesionales from '../components/forms/FormDatosProfesionales.vue';



export default {
    components: {
    FormDatosBasicos,
    FormContact,
    FormDatosProfesionales
},

    data() {
        return {

        }
    },
    mounted() {

    },
    created() {

    }


}

</script>