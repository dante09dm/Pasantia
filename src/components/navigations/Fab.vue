<template>
    <v-speed-dial top right absolute slide-y-reverse-transition direction="left">
        <template v-slot:activator>
            <v-btn color="primary" dark fab small right>
                <v-icon>
                    mdi-pencil
                </v-icon>
            </v-btn>
        </template>
        <router-link style="text-decoration: none" to="/EditPhone">
            <v-btn fab dark small color="green">
                <v-icon>mdi-phone</v-icon>
            </v-btn>
        </router-link>
        <router-link style="text-decoration: none" to="/EditAddress">
            <v-btn fab dark small color="red">
                <v-icon>mdi-map-marker</v-icon>
            </v-btn>
        </router-link>
        <router-link style="text-decoration: none" to="/EditEmail">
            <v-btn fab dark small color="indigo">
                <v-icon>mdi-email</v-icon>
            </v-btn>
        </router-link>
    </v-speed-dial>
</template>