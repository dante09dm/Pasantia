<template>
    <div>
        <v-container>
            <v-card tile outlined>
                <v-card-title class="d-flex ma-0">
                    <h5>Direccion de mail</h5>
                    <v-avatar class="ml-5" color="orange" size="25">
                        <span class="white--text">
                            {{ Object.keys(user.contacto.email).length }}
                        </span>
                    </v-avatar>
                    <Dialogo icon="mdi-plus" content="mail" titulo="Nueva direccion de mail" />
                </v-card-title>
                <v-divider></v-divider>


                <v-card-actions v-for="item in user.contacto.email" :key="item.name">
                    <div>
                        <div class="text--primary">
                            {{item.mail}}
                        </div>
                        <div class="text--secondary">
                            {{item.type_e}}
                        </div>
                    </div>
                    <v-spacer></v-spacer>
                    <v-btn small color="error" outlined fab>
                        <v-icon>mdi-trash-can-outline</v-icon>
                    </v-btn>
                    <v-btn color="primary" small outlined fab>
                        <v-icon>mdi-pencil-outline</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-container>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Dialogo from '@/components/panels/Dialogo.vue';

export default {
    name: 'EditEmail',

    components: {
        Dialogo,
    },

    computed: {
        ...mapGetters(['user', 'contacto'])
    },

    data() {
        return {

        }
    },
    props: ['title', 'cantidad']
}

</script>