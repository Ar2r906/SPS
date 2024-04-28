<template>
  <v-footer>
    <div class="col">
      <h1><Контактная информация></h1> 
      <p>info@fsp-russia.com</p>
      <p>Телефон: +7 (499) 678-03-05</p>
      <p>Адрес:125047, г. Москва, 2-я Брестская, д.8, этаж 9, офис/помещ 2,3,5,6,7,8,9</p>
    </div>
   <div class="form">
   <form name="search">
      <h3>Напишите нам</h3>
      <input class="pole1" type="text" name="name" size="40" maxlength="20" placeholder="Имя" />
      <input class="pole1" type="text"  name="pochta" size="40" maxlength="25" placeholder="Эл.почта" />
      <textarea class="pole1" rows="2" cols="40" name="message" placeholder="Сообщение"></textarea>
      <input class="send" type="button" name="send" value="Отправить" />
    </form>
    </div>
  </v-footer>
</template>

<script>
export default {
    name: 'Contacts',
}
</script>

<style scoped>
  v-footer{
    height: 60dvh;
    background-color: #1b1c21;
    display: flex;
  }
  v-footer h1{
    font-family: JetBrains Mono;
    color: #D9D9D9;
    font-size: 24px;
    padding: 30px;
  }
  v-footer p{
    font-family: JetBrains Mono;
    color: #D9D9D9;
    font-size: 18px;
    margin-left: 30px;

  }
  .form{
    width: 25%;
    height: 50dvh;
    border:1px solid;
    margin-left:450px;
    margin-top:45px;
    background: #D9D9D9;
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

  h3{
    margin-top: 30px;
    margin-left: 55px;
  }
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
</style>