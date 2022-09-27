<template>
    <div class="d-flex align-content-start flex wrap">
        <v-row class="pa-2" no-gutters>
            <v-col cols="12" md="6">
                <UserCard />
            </v-col>
            <v-col cols="12" md="6">
                <ContactCard />
            </v-col>
            <v-col cols="12" md="6">
                <FamilyCard />
            </v-col>
            <v-col cols="12" md="6">
                <ProfesionalCard />
            </v-col>
        </v-row>


    </div>

</template>

<script>
import UserCard from '@/components/profiles/UserCard.vue'
import ContactCard from '@/components/profiles/ContactCard.vue'
import FamilyCard from '@/components/profiles/FamilyCard.vue'
import ProfesionalCard from '@/components/profiles/ProfesionalCard.vue'

export default {
    name: "Dashboard",
    components: {
        UserCard,
        ContactCard,
        FamilyCard,
        ProfesionalCard,
    },

    data() {
        return {

        }
    },

    computed: {

    },
    methods: {
    }

}

</script>