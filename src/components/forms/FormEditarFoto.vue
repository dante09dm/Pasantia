<template>
    <div class="ma-0 pa-5">
        <v-form v-model="valid">
            <v-row>
                <v-col cols="6" md="6">
                    <v-file-input chips label="Adjuntar imagen" show-size truncate-length="15">
                    </v-file-input>
                    <small>*imagenes permitidas en formato .png .jpge</small>
                </v-col>
            </v-row>
        </v-form>
    </div>

</template>
<script>

    export default{
        data(){
            return{
                valid: '',
                img: '',
            }
        }
    }


</script>