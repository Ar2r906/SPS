<template>
  <div id='registration-miro'>
  <h2>НАЗВАНИЕ</h2>
  <h4>Информация о мероприятии</h4>
   <div v-if="EventsRegistration">
      <h1>{{ EventsRegistration.title }}</h1>
      <p>{{ EventsRegistration.date }}</p>
      <p>{{ EventsRegistration.discipline }}</p>
    </div>
    <hr>
    <h3>&#8249;Подача заявки&#8250;</h3>
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
  components: {
    Contacts,
  },
  data() {
    return {
      EventsRegistration: null
    };
  },
  created() {
    this.fetchEventsRegistration();
  },
  methods: {
    fetchEventsRegistration() {
      const eventId = this.$route.params.eventId;
      axios.get(`http://localhost:3000/api/events/${eventId}`)
        .then(response => {
          console.log('Данные мероприятия:', response.data); // Для проверки
          this.EventsRegistration = response.data;
        })
        .catch(error => console.error('Ошибка:', error));
    }
  }
}

</script>

<style>
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
  h2, h3{
    margin-left: 20px;
    margin-top:30px;
  }
  h4{
    margin-left: 100px;
    margin-top:30px;
  }
</style>