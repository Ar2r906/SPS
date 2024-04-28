<template>
  <h1>ИНФА О МЕРОПРИЯТИИ</h1>
    <hr>
    <h2>&#8249;Подача заявки&#8250;</h2>
    <form id="registration" action="" method="POST">
        <label>Субъект Российской Федерации: </label>
        <input class="pole1" type="text" name="name" id="name" placeholder="" required autofocus>
        
        <label>Город:</label>
        <input class="pole1" type="text" name="city" id="city" placeholder="" required autofocus>

        <label> Команда:</label>
        <input class="pole1" type="text" name="team" id="team" placeholder="" required autofocus>
        
        <label> Количество спортсменов:</label>
        <input class="pole1" type="text" name="chislo" id="chislo" placeholder="" required autofocus>

        <label>Представитель команды:</label>
        <input class="pole1" type="text" name="coach" id="coach" placeholder="" required autofocus>

        <label>Контактный номер представителя:</label>
        <input class="pole1" type="text" name="phone" id="phone" placeholder="" required autofocus>

        <label>Электронная почта представителя:</label>
        <input class="pole1" type="text" name="e-mail" id="e-mail" placeholder="" required autofocus>
       
        <label>Аккаунт в Telegram представителя:</label>
        <input class="pole1" type="text" name="telegram" id="telegram" placeholder="" required autofocus>
        <input class="send" type="button" name="send" value="Принять участие" />
    </form>
    <Contacts/>
</template>

<script>
import Contacts from '../components/Contacts.vue'

export default {
  name: 'Home',
  components: {
    Contacts,
  },
}
</script>

<style>
  .send{
    /*margin:auto;*/
    margin-top: 30px;
    margin-left: 100px;
    width: 260px;
    height: 35px;
    font-family: JetBrains Mono;
    color: #D9D9D9;
    border: 0;
    border-radius: 25px;
    background: #402FFF;
    font-size: 15px;
  }
  .pole1{
      height: 50px;
      margin-left: 60px;
      margin-top:20px;
      border: none;
      border-bottom: 2px solid black;
      background: #D9D9D9;
      font-family: JetBrains Mono;
      outline:none;
    }
</style>