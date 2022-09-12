<template>
    <div>
        <v-container fluid grid-list-lg text-lg-left width="100%">
            <v-row align-center justify-start />
                <v-col cols="12" md="12">
                    <v-card flat tile>
                     <v-card-title primary-title>
                        <h4>
                            MODIFICACION DE DATOS
                        </h4>
                     </v-card-title>
                     <v-tabs v-model="tab">
                        <v-tabs-slider></v-tabs-slider>
                        <v-tab v-for="item in items" :key="item.id">
                            {{ item.tab }}
                        </v-tab>
                    </v-tabs>
                    <v-card-actions>
                         <v-tabs-items v-model="tab">
                             <v-tab-item v-for="item in items" :key="item.id">
                                 <component v-bind:is="item.content"></component>
                             </v-tab-item>
                         </v-tabs-items>
                     </v-card-actions>
                    <div>
                        <v-btn class="ma-3" color="error">Validar campos</v-btn>
                        <v-btn class="ma-3" color="info">Actualizar datos</v-btn>
                    </div>
                </v-card>
            </v-col>
            </v-row>
        </v-container>
    </div>




</template>

<script>
import Panel1 from '../components/panels/Panel1.vue'
import Panel2 from '../components/panels/Panel2.vue'
import Panel3 from '../components/panels/Panel3.vue'


export default {
    components:
    {

        Panel1,
        Panel2,
        Panel3,
    },
    data() {
        return {
            tab: null,
            items: [
                { id: 1, tab: 'Panel1', content: 'Panel1' },
                { id: 1, tab: 'Panel2', content: 'Panel2' },
                { id: 1, tab: 'Panel3', content: 'Panel3' },
            ],
        }
    },
} 
</script>