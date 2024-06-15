<template>
    <div class='mero-zag'>
    <h1>Мероприятия</h1></div>
    <ul class="list">
      <li>Дата</li>
      <li>Название</li>
      <li>Дисциплина</li>
      </ul>
    <ul id="mero-list">
      <li v-for="event in events" :key="event.id">
      <span class="event-info">{{ event.date }}</span>
      <span class="event-info">{{ event.title }}</span>
      <span class="event-info">{{ event.discipline }}</span>
      <!-- <button class="enroll-button" @click="enroll(workout.id)">Записаться</button> -->
      </li>
      </ul>
    <hr>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      events: [],
      eventData: {
        date: '',
        title: '',
        discipline: ''
      }
    };
  },
    created() {
    this.fetchEvents();
  },
  methods: {
    fetchEvents() {
      // Здесь должен быть ваш HTTP запрос к серверу для получения списка тренировок
      // Пример:
      fetch('http://localhost:3000/api/events')
        .then(response => response.json())
        .then(data => {
          this.events = data;
        })
        .catch(error => console.error('Ошибка:', error));
    },
  }
}

</script>

<style scoped>
.mero-zag h1{
    margin-left: 3%;
    margin-top: 2%;
}
.list li {
    display: inline; /* Отображать как строчный элемент */
    margin-right: 10%; /* Отступ слева */
    font-size: 20px;
    margin-left: 5%;
    margin-right: 15%;    
}
.list{
  margin-top: 1.5%;
  margin-bottom: 0.7%;
  margin-left:2%;
}

#mero-list li {
  background-color: #f2f2f2; /* Светлый фон для каждого элемента списка */
  margin-bottom: 1.5%; /* Отступ между элементами списка */
  padding: 12px; /* Внутренние отступы */
  border-radius: 5px; /* Скругление углов */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Тень для элементов списка */
  width: 75%;
  margin-left: 3.8%;
  font-size: 18px;

}
#mero-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.event-info {
  flex: 1;
  margin-right: 1.7%;
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
