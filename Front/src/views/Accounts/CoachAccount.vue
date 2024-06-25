<template>
  <div class='navbar-events'>
      <h1>Тренер</h1>
      <div class='knopki'>
        <router-link class="link" to="/" style="text-decoration: none; color:white; padding-right: 25px; padding-left: 2.5em; letter-spacing: 3px;">На главную</router-link>
        <router-link class="link" to="/"  @click="logout()" style="text-decoration: none; color:white; padding-right: 25px; padding-left: 2.5em; letter-spacing: 3px;">Выход</router-link>
      </div>
      <div class='knopki2'>
        <router-link class="link" to="/Team" style="text-decoration: none; color:white; font-size: 20px;">Команды</router-link>
        <router-link class="link" to="/workoutSport" style="text-decoration: none; color:white; font-size: 20px; margin-left: 90px">Календарь тренировок</router-link>
        <router-link class="link" to="/EventsStr" style="text-decoration: none; color:white; font-size: 20px; margin-left: 90px">Мероприятия</router-link>
        <router-link class="link" to="/" style="text-decoration: none; color:white; font-size: 20px; margin-left: 90px">Лидерборд</router-link>
      </div>
  </div>
    <div class="main">
      <div class="block-photo">
        <div class="block-photo image">
          <img src="../../assets/temp/Image_profile.svg" alt="image-profile">
        </div>
        <button class="block-photo button">Изменить</button>
      </div>
  
      <div class="block-info">
        <form @submit.prevent="">
          <div>
            <label>Фамилия Имя Отчество</label>
          </div>
          <div>
          <label>
            Почта:
            <input type="text" v-model="email"> 
            
          </label>
          </div>
          <div>
          <label>
            Телефон:
            <input type="text" v-model="phone">
          </label> 
          </div>
          <div>
          <label>
            О себе:
            <input type="text" v-model="about">
          </label>
          </div>
        </form>
      </div>
      </div>
    <div class="main2">
      <div>
          <label>&#8249;Мои команды&#8250;</label>
          
      </div>
      </div>
  
  </template>
  
  <script>
  
  </script>
  
  <style scoped>
  .navbar-events{
    display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 19em;
  width: 100%;
  background-color: black;
  color: #EEE9E9;
  font-family: 'JetBrains Mono';
  letter-spacing: 6px;
  background-image: url('../../assets/footer.svg');
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: auto;
  text-align: center;
}
.knopki2{
  position: absolute;
  margin-top: 14%;
  margin-left: 3%;
  letter-spacing: 1px;
}
.navbar-events h1{
  padding-top: 7%;
  margin-left: 3%;
  font-size: 45px;
}
.knopki{
  padding-top: 2.7dvh;
  padding-right: 1.5dvh;
  margin-top:-10.2%;
  margin-left: 80%;
  width: 340px;
  height: 50px;
  background-color: #1B1C21;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
}
  .main, .main2 {
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
  .block-photo {
    margin-left: 2dvw;
  }
  .image {
    padding-top: 5dvh;
  }
  
  </style>