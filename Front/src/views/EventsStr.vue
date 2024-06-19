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
      <router-link :to="{ name: 'EventsRegistration', params: { eventId: event.id } }">
          <span class="event-info">{{ event.date }}</span>
          <span class="event-info">{{ event.title }}</span>
          <span class="event-info">{{ event.discipline }}</span>
      </router-link>
      </li>
      </ul>
    <Contacts/>

</template>

<script>
import Contacts from '../components/Contacts.vue'
import axios from 'axios';

export default {
    components:{
        Contacts,
    },
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
  margin-right: 16em;
  margin-left: 2em;

}

.router-link-exact-active, .router-link-active {
  text-decoration: none; /* Убирает подчёркивание у активных ссылок */
}

#mero-list a { /* Убирает подчёркивание у всех ссылок в списке */
  text-decoration: none;
  color: black;
  font-family: 'JetBrains Mono';
  font-size: 18px;
  
}


</style>
