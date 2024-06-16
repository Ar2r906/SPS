<template>
    <div class='team-zag'>
    <h1>Команды</h1></div>
    <ul id="team-list">
      <li v-for="team in teams" :key="team.id">
      <span class="team-info">{{ team.name }}</span>
      <!-- <button class="enroll-button" @click="enroll(team.id)">Записаться</button> -->
      </li>
      </ul>
    <hr>

     <div class='new-team'>
        <h2>Создание команды</h2>
        <form @submit.prevent="createTeam">
          <label>Название</label>
          <input v-model="teamData.name" type="text" required>
          <button type="submit" class="newTeam">Создать</button>
        </form>
      </div>
</template>

<script>
import axios from 'axios';


export default {
  data() {
    return {
      teams: [],
      teamData: {
        name: '',
      }
    };
  },
    created() {
    this.fetchTeams();
  },
  methods: {
    fetchTeams() {
      // Здесь должен быть ваш HTTP запрос к серверу для получения списка тренировок
      // Пример:
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
</style>