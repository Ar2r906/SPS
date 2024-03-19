<template>
    <div class="main">
        <form @submit.prevent="">
            <input type="text" name="" id="" placeholder="Имя">
            <input type="email" name="" id="" placeholder="Email">
            <input type="password" name="" id="" placeholder="Пароль">
            <button>Зарегистрироваться</button>
            <span>Уже есть аккаунт? <a href="/login">Войти</a></span>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        ...mapActions({
            register: 'auth/register'
        }),
        goRegister() {
            const formData = {
                name: this.name,
                email: this.email,
                password: this.password
            }
            this.register(formData)
        }    
    }
}
</script>

<style>

</style>