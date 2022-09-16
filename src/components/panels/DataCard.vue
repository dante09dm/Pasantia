<template>
    <v-card
        class="pa-3 text-center"
        >
        <v-card-media>
            <v-avatar
            size="128"
          ><v-img :src=user.avatar></v-img>
          </v-avatar>
        </v-card-media>
        <v-card-title class="d-flex justify-center ma-5 text-center">

        </v-card-title>
    </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: "UserCard",

    data() {
        return {
            nro_afi: 3
        }
    },

    computed: {
        ...mapGetters(['user'])
    },
    methods: {
        ...mapActions(['getUser'])
    }
}

</script>