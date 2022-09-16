<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12" md="5">
                    <UserCard />
                </v-col>
                <v-col cols="12" md="7">
                    <ListCard />
                </v-col>
            </v-row>

        </v-container>
    </div>

</template>

<script>
import UserCard from '@/components/UserCard.vue'
import ListCard from '@/components/ListCard.vue'
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "Dashboard",
    components: {
        UserCard,
        ListCard,
    },

    data() {
        return {
            id: 4,
        }
    },
    mounted() {
        this.getUser();
    },
    computed: {
        ...mapGetters(['user'])
    },
    methods: {
        ...mapActions(['getUser'])
    }

}

</script>