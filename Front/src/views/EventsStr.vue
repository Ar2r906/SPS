<template>
    <div class='navbar-events'>
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
  <p>Мероприятия</p>
</div>
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
.navbar-events{
  height: 400px;
  background-color: black;
  margin-bottom: 6%;
}
.navbar-events p{
   color: white;
   margin-top: 4%;
   margin-left: 5%;
   font-size: 60px;
   letter-spacing: 7px;
   font-weigh: lighter;

}
.knopki{
  background-color: #1B1C21;
  height: 70px;
  border-radius: 15px;
  margin-left: 80%;
  margin-right: 2%;
}
.knopki2{
  position: absolute;
  margin-top: 14%;
  margin-left: 5.5%;
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
  margin-left:23%;
}

#mero-list li {
  background-color: #f2f2f2; /* Светлый фон для каждого элемента списка */
  margin-bottom: 1.5%; /* Отступ между элементами списка */
  padding: 12px; /* Внутренние отступы */
  border-radius: 5px; /* Скругление углов */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Тень для элементов списка */
  width: 85%;
  margin-left: 3.8%;
  font-size: 18px;
  list-style-type: none; /* Убирает маркеры списка */
}

#mero-list{
  margin-bottom:6%;
  margin-left: 7%;
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
