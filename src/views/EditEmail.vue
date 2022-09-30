<template>
    <div>
        <v-container>
            <v-card>
                <v-card-title class="d-flex ma-0">
                    <h5>Direccion de mail</h5>
                    <v-avatar class="ml-5" color="orange" size="25">
                        <span class="white--text">
                            {{ Object.keys(user.contacto.email).length }}
                        </span>
                    </v-avatar>
                    <Dialogo content="mail" titulo="Nueva direccion de mail" />
                </v-card-title>
                <v-divider></v-divider>

                <v-card v-for="item in user.contacto.email" :key="item.name">
                    <v-card-actions>
                        <div>
                            <div class="text--primary">
                                {{item.mail}}
                            </div>
                            <div class="text--secondary">
                                {{item.type_e}}
                            </div>
                        </div>
                        <v-spacer></v-spacer>
                        <v-icon color="primary">mdi-chevron-right</v-icon>
                    </v-card-actions>
                </v-card>
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