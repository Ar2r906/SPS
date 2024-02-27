<template>
    <div class="navbar">
        <img src="../assets/Logotype.svg" alt="logotype">
        <b-nav>
            <b-nav-item>Регистрация</b-nav-item>
            <b-nav-item>Вход</b-nav-item>
            <b-nav-item>Мероприятия</b-nav-item>
            <b-nav-item>Партнерам</b-nav-item>
            <b-nav-item>Контакты</b-nav-item>
        </b-nav>
    </div>
</template>

<script>

</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }
    body {
        font-family: 'JetBrains Mono';
        font-size: 16px;
        color: #000;
    }
    .navbar {
        background-color: #000;
        color: aliceblue;
        display: flex;
        flex-direction: row;
    }
    .b-nav {
        display: flex;
        flex-direction: row;
        row-gap: 10vw;
    }
</style>