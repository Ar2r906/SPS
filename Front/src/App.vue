<template>
  <div class="home-nav">
    <div class="logo">
      <a href="/home"><img src="./assets/Logotype.svg" alt="logotype"></a>
    </div>
    <nav>
      <router-link to="/login">Вход</router-link>
      <router-link to="/register">Регистрация</router-link>
      <router-link to="/#">Мероприятия</router-link>
      <router-link to="/#">Партнерам</router-link>
      <router-link to="/#">Контакты</router-link>
    </nav> 
    <router-view />
  </div>
</template>
hello world
<style>
  @font-face {
    font-family: "JetBrains Mono";
    src: url(./fonts/JetBrainsMonoNL-Regular.ttf);
  }
  body {
    padding: 0;
    margin: 0;
    font-family: "JetBrains Mono";
  }
  .home-nav {
    height: 80dvh;
    background-color: #1B1C21;
    display: flex;
    flex-direction: row;
    padding-top: 2dvh;
  }
  .logo {
    justify-content: start; 
    padding-left: 2dvw;
  }
  nav { 
    display: flex;
    flex-direction: row;
    column-gap: 3dvw;
    justify-content: flex-end;
    margin-left: auto;
    padding-right: 2dvw;
  }
  nav a {
    font-family: "JetBrains Mono";
    text-decoration: none;
    color: #D9D9D9;
    font-size: 2dvh;
    font-weight: 500;
  }
  nav a:hover {
    color: #402FFF;
  }
</style>
