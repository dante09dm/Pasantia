<template>

    <v-alert transition="scale-transition" :value="alert" dense :type="type">
        {{msg}}
    </v-alert>

</template>
<script>
export default {
    data() {
        return {
            alert: true,
            expand: false,
        }
    },
    created() {
        setTimeout(() => {
            this.alert = false
        }, 5000)
    },
    props: ['msg', 'type'],
}

</script>