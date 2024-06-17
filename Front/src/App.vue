<template>
  <router-view /> 
</template>

<script>
import { mapActions, mapState } from 'vuex'
import store from './store';

export default {

  methods: {
    ...mapActions({
      logout: 'auth/logout'
    })
  },
  mounted() {
    const uid = localStorage.getItem('uid')
    uid ? this.$store.commit('auth/setAuth', true) : this.$store.commit('auth/setAuth', false)
  },
  computed: {
    ...mapState({
      isAuth: state => state.auth.isAuth
    })
  }
}
</script>