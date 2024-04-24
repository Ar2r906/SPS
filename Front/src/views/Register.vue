<template>
    <div class="form">
        <h1>&lt;Регистрация&gt;</h1>
        <form @submit.prevent="goRegister">
            <select class="form option-input" name="role" id="role">
                <option value="">--Выберите роль--</option>
                <option value="sportsmen">Спортсмен/спортсмен-стажер</option>
                <option value="partner">Партнер</option>
                <option value="coach">Тренер</option>
            </select>
            <input type="text" name="name" id="name" placeholder="Имя" class="form form-input">
            <input type="email" name="email" id="email" placeholder="Email" class="form form-input">
            <input type="password" name="password" id="password" placeholder="Пароль" class="form form-input">
            <button class="form form-button" type="submit">Регистрация</button>
            <span class="form text">Уже есть аккаунт?<a href="/login">Войти</a></span>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            role: '',
            email: '',
            password: '',
            name: ''
        }
    },
    methods: {
        ...mapActions({
            register: 'auth/register'
        }
    ),
        goRegister(){
            const formData = {
                role: this.role,
                email: this.email,
                password: this.password,
                name: this.name
            }
            this.register(formData)
        }
    }
}
</script>

<style scoped>

* {
    font-family: "JetBrains Mono";
}
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
    margin: 2dvh auto 2dvh auto;
    width: 25dvw;
    color: #000;
    background-color: #D9D9D9;
    border: 1px solid #000;
    border-radius: 8px;
}
.option-input {
    padding: 1dvh 1dvw;
    width: 100%;
    border: 1px solid #000;
    border-radius: 8px;
    background-color: #d9d9d9;
}
.form-button {
    margin: 1dvh 0;
    padding: 1dvh 1dvw;
    background-color: #402FFF;
    border: #1b1c21 1px solid;
    border-radius: 8px;
    width: 100%;
    color: #fff;
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
</style>