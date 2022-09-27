<template>
    <v-alert
        :value="alert"
        transition="scale-transition"
        dense
        :type="type"
        >
        {{msg}}
    </v-alert>
</template>
<script>
    export default {
        data() {
            return {
                alert: true,
            }
        },
        created(){
            setTimeout(()=>{
                this.alert=false
            },5000)        
        },
        props: ['msg', 'type'],
    }

</script>