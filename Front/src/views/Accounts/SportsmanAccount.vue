<template>
<div class='navbar-sport'>
      <div class='knopki'>
        <router-link class="link" to="/" style="text-decoration: none; color:white; font-size: 20px; margin-left: 35px">На главную</router-link>
        <router-link class="link" to="/"  @click="logout()" style="text-decoration: none; color:white; font-size:22px; margin-left: 80px;">Выход</router-link>
      </div>
      <div class='logo-intern'>
        <img src='assets/Ellipse.svg'> 
      </div>
      <div class='knopki2'>
        <router-link class="link" to="/Team" style="text-decoration: none; color:white; font-size: 20px;">Команды</router-link>
        <router-link class="link" to="/workoutSport" style="text-decoration: none; color:white; font-size: 20px; margin-left: 90px">Календарь тренировок</router-link>
        <router-link class="link" to="/EventsStr" style="text-decoration: none; color:white; font-size: 20px; margin-left: 90px">Мероприятия</router-link>
        <router-link class="link" to="/" style="text-decoration: none; color:white; font-size: 20px; margin-left: 90px">Лидерборд</router-link>
      </div>
  <p>Спортсмен</p>
</div>

  <div class="main">
    <div class='avatar'>
      <img :src="avatarUrl" alt="Аватарка">
    </div>
    <div class='ava-pole'>
      <input type="file" ref="fileInput" @change="handleAvatarUpload">
    </div>

   <div>
    <h1>Личный кабинет</h1>
    <p>Имя: {{ user.name }}</p>
    <p>Email: {{ user.email }}</p>
    <p>Роль: {{ user.role }}</p>
    <!-- Другие данные пользователя -->
  </div>
  </div>

  <div class="main2">
    <div>
        <label>&#8249;Моя команда&#8250;</label>

    </div>
  </div>

  <div class="main3">
    <div>
        <label>&#8249;История соревнований&#8250;</label>
    </div>
  </div>

  <div class="main4">
    <div>
        <label>&#8249;История тренировок&#8250;</label>
    </div>
  </div>

<footer>
</footer>
</template>

<script>
export default {
  computed: {
    // Используйте геттеры Vuex для доступа к данным пользователя
    user() {
      return this.$store.state.user.user;
    }
  },
  created() {
    // Запросите данные пользователя при создании компонента
    this.$store.dispatch('user/fetchUserDetails');
  }
}
</script>

<style scoped>

.avatar img {
    width: 350px; /* настройте максимальную ширину загруженной фотографии */
    height: 350px;
    display: block;
    margin: 0 auto; /* расположить по центру */
    margin-top: 20%;
    margin-left: 40%;
    border-radius: 55%; /* скругленные углы */
}
.ava-pole{
    position: absolute;
    margin-left: 7%;
    margin-top: 25%;
    width: 400px;
}


.navbar-sport{
  height: 500px;
  background-color: black;
}
.navbar-sport p{
   color: white;
   margin-top: 7%;
   margin-left: 5%;
   font-size: 60px;
   letter-spacing: 7px;
   font-weigh: lighter;

}
.knopki{
  padding-top: 2dvh;
  padding-right: 1.5dvh;
  margin-left: 80%;
  width: 340px;
  height: 50px;
  background-color: #1B1C21;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
}


.knopki2{
  position: absolute;
  margin-top: 20%;
  margin-left: 5.5%;
}

.logo-intern{
  background-color: #1B1C21;
  border-radius: 15px;
  width:100px;
  height: 70px;
  margin-left: 5%;
  margin-top: -4%;
}
.logo-intern img{
  margin-left: 37px;
  margin-top: 20px;
}


.main, .main2, .main3, .main4 {
  
  display: flex;
  width: 90%;
  height: 60dvh;
  background: white;
  border: 7px solid #D9D9D9;
  border-radius: 25px;
  margin: 5% 5%;
}


form {
  margin-top: 5dvh;
  margin-left: 10dvw;
  width: 750px; /* ширина формы */
}
.main2 label{
  margin-left: 38dvw;
  font-size: 25px;
}
.main3 label{
  margin-left: 35dvw;
  font-size: 25px;
}
.main4 label{
  margin-left: 35dvw;
  font-size: 25px;
}
.block-info{
  position: absolute;
  margin-left: 20%;
}
label{
  font-family: 'JetBrains Mono';
  font-size: 20px;
  font-weight:bold;
  display: flex;
  justify-content: space-between;
  padding: 25px;
}
input{
  width: 400px;
  height: 33px;
  font-family: 'JetBrains Mono';
  font-size: 17px;
  border-radius: 10px;
  border: 1px solid black;
  background: #D9D9D9;
  float: right;  /* выравнивание по правому краю */ 
  padding-left: 15px; /* отступ текста в поле */ 
}

.send1{
  position: absolute;
  top: 134%;
  left: 7%;
}

.send1:hover {
  border: 1px solid #000;
  background-color: #000;
}
.button{
  width: 150px;
  height: 35px;
  font-family: 'JetBrains Mono';
  color: #D9D9D9;
  border: 1px solid #402FFF;
  border-radius: 15px;
  background: #402FFF;
  font-size: 15px;
  position: absolute;
  left: 14.5%;
  margin-top: 2dvh;
}
.button:hover{
  border: 1px solid #000;
  background-color: #000;
}


footer{
  height: 30px;
  background: #1B1C21;
  padding: 10px 20px;
  margin-top: 1.5%;
  position: static;
}

</style>