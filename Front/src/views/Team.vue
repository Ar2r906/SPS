<template>
<div class='head-team'>
    <h1>Команды</h1>
    <div class='knopki-team'>
      <a href="/">На главную</a>
      <a href="javascript:history.back()">Назад</a>
    </div>
     <div class='knopki2'>
        <router-link class="link" to="/workoutSport" style="text-decoration: none; color:white; font-size: 20px; margin-left: 90px">Календарь тренировок</router-link>
        <router-link class="link" to="/EventsStr" style="text-decoration: none; color:white; font-size: 20px; margin-left: 90px">Мероприятия</router-link>
        <router-link class="link" to="/" style="text-decoration: none; color:white; font-size: 20px; margin-left: 90px">Лидерборд</router-link>
      </div>
  </div>

    <ul id="team-list">
      <li v-for="team in teams" :key="team.id">
      <span class="team-info">{{ team.nameTeam }}</span>
      </li>
      </ul>
    <hr>

     <div class='new-team'>
        <h2>Создание команды</h2>
        <form @submit.prevent="createTeam">
          <label>Название</label>
          <input v-model="teamData.nameTeam" type="text" required>
          <button type="submit" class="newTeam">Создать</button>
        </form>
      </div>
<Contacts/>
</template>

<script>
import axios from 'axios';
import Contacts from '../components/Contacts.vue'

export default {
  components:{
    Contacts,
  },
  data() {
    return {
      teams: [],
      teamData: {
        nameTeam: '',
      }
    };
  },
    created() {
    this.fetchTeams();
  },
  methods: {
    fetchTeams() {
      fetch('http://localhost:3000/api/teams')
        .then(response => response.json())
        .then(data => {
          this.teams = data;
        })
        .catch(error => console.error('Ошибка:', error));
    },
    async createTeam() {
    console.log('Метод createTeam вызван');
    console.log('Отправляемые данные:', this.teamData);
      try {
        const response = await axios.post('http://localhost:3000/api/teams', this.teamData);
        if (response && response.data) {
          if (response.status === 201) {
            console.log('Команда создана:', response.data);
            alert('Команда создана! Обновите страницу.');
          } else {
            console.log('Неожиданный статус ответа:', response.status, response.data);
          }
        } else {
          console.error('Ответ сервера не содержит данных');
        }
      } catch (error) {
        if (error.response && error.response.data) {
          console.error('Ошибка при создании тренировки:', error.response.data);
        } else {
          console.error('Ошибка при создании тренировки:', error);
        }
      }
    }
  }
}
    
</script>

<style>
.head-team {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 19em;
  width: 100%;
  background-color: black;
  color: #EEE9E9;
  font-family: 'JetBrains Mono';
  letter-spacing: 6px;
  background-image: url('../assets/footer.svg');
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: auto;
  text-align: center;
}
.head-team h1{
  padding-top: 7%;
  margin-left: 3%;
  font-size: 45px;
}
.knopki-team a {
  color: #EEE9E9;
  text-decoration: none;
  padding-right: 25px;
  padding-left: 2.5em;
  letter-spacing: 3px;
}
.knopki-team{
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
.knopki2{
  position: absolute;
  margin-top: 14%;
  margin-left: -1.7%;
  letter-spacing: 1px;
}

#team-list{
  margin-top: 4%;
  font-size: 20px;
  margin-left: 4%;
  list-style-type: none; /* Убираем маркеры списка */
}

.new-team{
  margin-bottom: 4%;
}
.new-team h2{
  margin-top: 3%;
  margin-left: 3%;
  color: #402FFF;
}
.new-team label{
  font-size: 20px;
  margin-left: 3%;
}
.new-team input{
  height: 30px;
  width: 300px;
  margin-left: 25px;
  border-radius: 20px;
  font-size: 16px;
  font-family: 'JetBrains Mono';
  margin-top: 20px;
  margin-bottom: 5px;
  text-indent: 4%;
}
.newTeam{
  width: 200px;
  height: 35px;
  font-family: 'JetBrains Mono';
  color: #D9D9D9;
  border: 1px solid #402FFF;
  border-radius: 15px;
  background: #402FFF;
  font-size: 17px;
  position: absolute;
  left: 27%;
  margin-top: 1%;
}
hr {
  margin: 35px auto 10px;
	padding: 0;
	height: 50px;
	border: none;
	border-bottom: 2px solid #1f1209;
	width: 95%;
}
</style>