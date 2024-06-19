<template>
<div class='head-eventsReg'>
    <h1>Мероприятия</h1>
    <div class='knopki-work'>
      <a href="/">На главную</a>
      <a href="javascript:history.back()">Назад</a>
    </div>
</div>

  <div id='registration-miro'>
    <div v-if="EventsRegistration" class="EventsRegistration">
        <h1>{{ EventsRegistration.title }}</h1>
        <p><strong>Дата:</strong> {{ EventsRegistration.date }}</p>
        <p><strong>Дисциплина:</strong> {{ EventsRegistration.discipline }}</p>
        <p><strong>Описание:</strong> {{ EventsRegistration.description }}</p>
      </div>
      <div v-else>
        Загрузка данных...
      </div>
    <hr>
    
    <h2>&#8249;Подача заявки&#8250;</h2>
    <form id="registration" action="" method="POST">
        <div class="field">
          <p>Субъект Российской Федерации: </p>
          <input class="pole" type="text" name="name" id="name" placeholder="" required autofocus>

         <p>Город:</p>
          <input class="pole" type="text" name="city" id="city" placeholder="" required autofocus>

          <p> Команда:</p>
          <input class="pole" type="text" name="team" id="team" placeholder="" required autofocus>

          <p> Количество спортсменов:</p>
          <input class="pole" type="text" name="chislo" id="chislo" placeholder="" required autofocus>
 
          <p>Представитель команды:</p>
          <input class="pole" type="text" name="coach" id="coach" placeholder="" required autofocus>

          <p>Контактный номер представителя:</p>
          <input class="pole" type="text" name="phone" id="phone" placeholder="" required autofocus>

          <p>Электронная почта представителя:</p>
          <input class="pole" type="text" name="e-mail" id="e-mail" placeholder="" required autofocus>

          <p>Аккаунт в Telegram представителя:</p>
          <input class="pole" type="text" name="telegram" id="telegram" placeholder="" required autofocus>
        </div>
        <button class="send1">Отправить</button>
    </form>
  </div>
    <Contacts/>
</template>

<script>
import Contacts from '../components/Contacts.vue'
import axios from 'axios';

export default {
  name: 'EventsRegistration',
  props:{
    eventId: Number
  },
  components: {
    Contacts,
  },
  data() {
    return {
      EventsRegistration: null
    };
  },
  created() {
    this.getEventsRegistration(this.$route.params.eventId);
  },
  methods: {
    getEventsRegistration(eventId) {
      eventId = Number(eventId)
      fetch(`http://localhost:3000/api/events/${eventId}`)
        .then(response => response.json())
        .then(data => {
          this.EventsRegistration = data;
        })
        .catch(error => {
          console.error('Ошибка при получении данных: ', error);
        });
    }
  }
}

</script>

<style>
.EventsRegistration{
  width: 70%;
  margin-left: 3%;
  margin-top: 2%;
}
.EventsRegistration p{
  font-family:'JetBrains Mono';
  font-size: 20px;
}

.head-eventsReg{
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
.head-eventsReg h1{
  padding-top: 7%;
  margin-left: 3%;
  font-size: 45px;
}
.knopki-work a {
  color: #EEE9E9;
  text-decoration: none;
  padding-right: 25px;
  padding-left: 2.5em;
  letter-spacing: 3px;
}
.knopki-work{
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

  .send1{
    width: 260px;
    height: 50px;
    font-family: JetBrains Mono;
    color: #D9D9D9;
    border: 0;
    border-radius: 15px;
    background: #402FFF;
    font-size: 18px;
    margin: 40px 0px 55px 700px;
  }
  .pole{
      height: 40px;
      width: 450px;
      margin-top:10px;
      border: 1px solid;
      border-radius: 15px;
      font-size: 20px;
      background: white;
      font-family: 'JetBrains Mono';
      text-align: center;
    }
  p{
    margin-top:28px;

  }
  .field{
    margin-left: 100px;
  }
  h2{
    margin-left: 3%;
    margin-top:30px;
  }

</style>