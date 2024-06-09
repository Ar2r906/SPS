<template>
  <v-footer id="contacts_main">
  <!-- <img src="../assets/footer.svg"> -->
    <div class="col">
      <h1><Контактная информация></h1> 
      <p>info@fsp-russia.com</p>
      <p>Телефон: +7 (499) 678-03-05</p>
      <p>Адрес:125047, г. Москва, 2-я Брестская, д.8, этаж 9, офис/помещ 2,3,5,6,7,8,9</p>
    </div>
    <div class="form">
      <form name="search" @submit.prevent="go_feedback()">
        <h3>Напишите нам</h3>
        <input class="pole1" type="text" name="name" size="40" maxlength="30" placeholder="Имя" v-model="name"/>
        <input class="pole1" type="text"  name="pochta" size="40" maxlength="35" placeholder="Эл.почта" v-model="email"/>
        <textarea class="pole1" rows="2" cols="40" name="message" placeholder="Сообщение" v-model="message"></textarea>
        <button class="send">Отправить</button>
      </form>
    </div>
  </v-footer>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'Contacts',
    data() {
      return {
        email: '',
        name: '',
        message: ''
      }
    },
    methods: {
      ...mapActions({
        get_feedback_table: ''
      }),
      go_feedback() {
        const formData = {
          email: this.email,
          name: this.name,
          message: this.message
        }
        this.get_feedback_table(formData)
      }
    }
}
</script>

<style scoped>

  v-footer {
    height: 70dvh;
    background-color: #1b1c21;
    background-image: url('../assets/footer.svg');
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: auto;
    display: flex;
  }
  v-footer h1{
    font-family: 'JetBrains Mono';
    color: #D9D9D9;
    font-size: 24px;
    padding: 30px;
  }
  v-footer p{
    font-family: 'JetBrains Mono';
    color: #D9D9D9;
    font-size: 18px;
    margin-left: 30px;

  }
  .form{
    width: 28%;
    height: 50dvh;
    border:1px solid;
    margin-left:420px;
    margin-top:45px;
    background: #D9D9D9;
    } 
  .pole1{
    height: 50px;
    margin-left: 55px;
    margin-top:35px;
    border: none;
    border-bottom: 2px solid black;
    background: #D9D9D9;
    font-family: 'JetBrains Mono';
    font-size: 17px;
    outline:none;
  }
  h3{
    margin-top: 30px;
    margin-left: 55px;
  }
  .send{
    /* margin:auto; */
    margin-top: 40px;
    margin-left: 140px;
    width: 260px;
    height: 35px;
    font-family: 'JetBrains Mono';
    color: #D9D9D9;
    border: 1px solid #402FFF;
    border-radius: 25px;
    background: #402FFF;
    font-size: 15px;
  }
  .send:hover{
    border: 1px solid #000;
    background-color: #000;
  }
</style>