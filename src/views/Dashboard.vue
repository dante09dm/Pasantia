<template>
    <v-container fill-height ml-2 pa-0>
        <v-row>
            <v-col>
                <v-card outlined class="text-center">
                    <v-card-title primary-title>
                        Bienvenido al portal de afiliado
                    </v-card-title>
                    <v-divider>
                    </v-divider>
                    <v-card-text>
                        <h4>
                            Ahora podes realizar todos tus tramites desde aca.
                        </h4>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row dense>

            <v-col cols="12" md="6">
                <UserCard />
            </v-col>
            <v-col cols="12" md="6">
                <FamilyCard />
            </v-col>
            <v-col cols="12" md="6">
                <ContactCard />
            </v-col>
            <v-col cols="12" md="6">
                <ProfesionalCard />
            </v-col>
        </v-row>
    </v-container>
</template>


<script>
import UserCard from '@/components/componentsDashboard/UserCard.vue'
import ContactCard from '@/components/componentsDashboard/ContactCard.vue'
import FamilyCard from '@/components/componentsDashboard/FamilyCard.vue'
import ProfesionalCard from '@/components/componentsDashboard/ProfesionalCard.vue'

export default {
    name: "Dashboard",
    components: {
        UserCard,
        ContactCard,
        FamilyCard,
        ProfesionalCard,
    },
}

</script>