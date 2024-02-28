<template>
  <div class="header">
      <div class="image">
        <router-link to="/home" ><img src="./assets/Logotype.svg" alt="logotype"></router-link>
      </div>
      <nav>
        <router-link to="/auth" >Войти</router-link>
        <router-link to="/registration" >Зарегистрироваться</router-link>
      </nav>
  </div>  
</template>

<script>
  export default {
    
  }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }
  .header {
    display: flex;
    flex-direction: column;
    width: auto;
    width: auto;
  }
  .header img {
    padding: 5dvh 0 0 5dvw;
  }
  .image {
  }
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 10dvw;
    padding-top: 0;
  }
  .router-link {
    text-decoration: none;
  }
</style>
