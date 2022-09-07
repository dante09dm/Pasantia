<template>
    <v-card>
        <v-card-title>
            <h4>
                {{ $store.state }}
            </h4>
        </v-card-title>

    </v-card>
</template>


<script>

import axios from 'axios'

export default {
    components: {
        
    },

    data() {
        return {
            info: null,
        }
    },
    mounted() {
        axios
            .get("https://my-json-server.typicode.com/Emanuelm26/HomeSwitchHome/data")
            .then(response => (this.info = response.data[1]))
            .catch(error => console.log(error))

    },
    created() {

    }


}

</script>