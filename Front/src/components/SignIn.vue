<template>
    <div class="form-signin">
        <form @submit.prevent="">
            <input type="email" class="form-input" placeholder="Введите email" v-model="email">
            <input type="password" class="form-input" placeholder="Введите пароль" v-model="password">
            <button type="submit" class="form-button">Войти</button>
            <span>Нет аккаунта?<a href="/register">Зарегистрироваться</a></span>
        </form>
    </div>
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