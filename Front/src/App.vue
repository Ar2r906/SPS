<template>
  <nav>
    <a class="logo" href="/"><img src="./assets/Logotype.svg" alt="logotype"></a>
    <router-link class="link" to="/login" v-if="!isAuth">Вход</router-link>
    <router-link class="link" to="/register" v-if="!isAuth">Регистрация</router-link>
    <router-link class="link" to="/events" v-if="isAuth">Мероприятия</router-link>
    <router-link class="link" to="/partner" v-if="!isAuth">Партнерам</router-link>
    <router-link class="link" to="/contacts">Контакты</router-link>
    <router-link class="link" to="/intern">Проверка</router-link>
    <router-link class="link" to="#" v-if="isAuth">Профиль</router-link>
    <router-link class="link" to="/" v-if="isAuth" @click="logout()">Выход</router-link>
  </nav> 
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

<style>
  * {
    padding: 0;
    margin: 0;
  }
  @font-face {
    font-family: "JetBrains Mono";
    src: url('./fonts/JetBrainsMonoNL-Regular.ttf');
  }
  
  body {
    background-color: #D9D9D9;
    font-family: 'JetBrains Mono';
  }
  nav {
    height: 70dvh;
    background-color: #1b1c21;
    padding: 0 2dvw;
    display: flex;
    flex-direction: row;
    column-gap: 3dvw;
    justify-content: flex-end;
    margin-left: auto;
    padding-right: 1dvw;
    background-image: url('./assets/face_on_navbar.svg');
    background-repeat: no-repeat;
    background-size: 33%;
    background-position: bottom 0 left 2dvw;
  }
  .link {
    padding-top: 3dvh;
  }
  .logo{
    justify-content: start;
    align-items: start;
    height: 6dvh;
    padding-top: 2dvh;
    padding-left: 0;
    margin-right: auto;
  }
  .logo :hover {
    filter: saturate(10%);
  }
  nav a{
    font-family: "JetBrains Mono";
    text-decoration: none;
    color: #D9D9D9;
    font-size: 2dvh;
    font-weight: 500;
    margin-bottom: auto;
  }
  nav a:hover {
    color: #402FFF;
  }
 
</style>
