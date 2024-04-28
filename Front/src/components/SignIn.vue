<template>

</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'SignIn',
    data() {
        return {
            email: '',
            password: '',
            name: ''
        }
    },
    methods: {
        ...mapActions({
            login: ''
        })
    }
}
</script>