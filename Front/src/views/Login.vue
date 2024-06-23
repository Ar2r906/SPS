<template>
  <div class="login-page">
  <MainHeader />
  <div class="form">
    <h1>&lt;Вход&gt;</h1>
    <form @submit.prevent="go_login">
      <input type="email" id="email" class="form form-input" placeholder="Введите email" v-model="email">
      <input type="password" id="password" class="form form-input" placeholder="Введите пароль" v-model="password">
      <button class="form form-button">Войти</button>
      <span class="form text">Нет аккаунта?<a href="/register">Зарегистрироваться</a></span>
    </form>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex';
import MainHeader from '../components/MainHeader.vue'
import Contacts from '../components/Contacts.vue'

export default{
  components: {
    MainHeader,
    Contacts
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    ...mapActions({
      login: 'auth/login'
    }),
    go_login() {
      const formData = {
        email: this.email,
        password: this.password
      }
      this.login(formData)
    }
  }
}
</script>

<style scoped>
* {
  font-family: "JetBrains Mono";
}
/* .main {

} */
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5dvh;
  padding-bottom: 5dvh;
}
h1 {
  padding-bottom: 5dvh;
}
.form-input {
  padding: 1dvh 1dvw;
  margin: 2dvh auto;
  width: 20dvw;
  color: #000;
  background-color: #D9D9D9;
  border: 1px solid #000;
  border-radius: 8px;
}
.form-button {
  margin: 1dvh 0;
  padding: 1dvh 1dvw;
  background-color: #402FFF;
  border: #1b1c21 1px solid;
  border-radius: 8px;
  color: #fff;
  width: 100%;
}
.form-button:hover {
  background-color: #1b1c21;
  color: #fff;
}
.text a{
  /* text-decoration: none; */
  color: #000;
}
.text a:hover {
  color: #402FFF;
}
.form{
  margin-top: 7%;
}

</style>
