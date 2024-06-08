<template>
    <form class='forma-zadanie'>
    <div class='role1' id='sel'>
      <label>Роль:</label>
          <select name="role" class='role-zadanie' @change="updateTask">
              <option value="r">Выберите роль:</option>
              <option value="r1">Дизайнер</option>
              <option value="r2">Аналитик</option>
              <option value="r3">Бэкендер</option>
              <option value="r4">Фронтендер</option>
          </select>
    </div>
    <div id="result">
      <label>
          Задание: 
      </label>
          <div>
            <textarea class="zadanie" rows="2" cols="40" name="zadanie" v-model="zadanie">
            </textarea>
          </div>
      <button class="download">Отправить</button>
    </div>
     
    <div class='otvet'>
      <label>Решение:</label>
      <input type="text" v-model="otvet">
    </div>
    </form>

<footer>
</footer>
</template>

<script>
export default {
    data() {
        return {
            zadanie: ''
        };
    },
    methods: {
        updateTask(event) {
            const role = event.target.value;
            switch (role) {
                case 'r1':
                    this.zadanie = 'Ваша задача - разработать дизайн интерфейса.';
                    break;
                case 'r2':
                    this.zadanie = 'Ваша задача - провести анализ рынка и конкурентов.';
                    break;
                case 'r3':
                    this.zadanie = 'Ваша задача - разработать серверную часть приложения.';
                    break;
                case 'r4':
                    this.zadanie = 'Ваша задача - разработать клиентскую часть приложения.';
                    break;
                default:
                    this.zadanie = '';
            }
        }
    }
}
</script>

<style>
.forma-zadanie{
    margin-top: 15dvh;
}
.otvet{
  padding-top:25px;
}
.role1{
  position: absolute;
  left: 71.5%;
}
.download{
  width: 240px;
  height: 45px;
  font-family: 'JetBrains Mono';
  color: #D9D9D9;
  border: 1px solid #402FFF;
  border-radius: 17px;
  background: #402FFF;
  font-size: 20px;
  font-weight:bold;
  position: absolute;
  left: 46%;
  margin-top: 10dvh;
  
}
.download:hover{
  border: 1px solid #000;
  background-color: #000;
}
.zadanie{
  width: 90%;
  height: 120px;
  margin-top: 20px;
  margin-left: 50px;
  font-family: 'JetBrains Mono';
  font-size: 17px;
  border-radius: 10px;
  border: 1px solid black;
  background: #EEE9E9;
  padding-left: 15px; /* отступ текста в поле */ 
  padding-top: 15px; /* отступ текста в поле */ 
  padding-right: 15px; /* отступ текста в поле */ 
}
input{
  height: 30px;
  width: 30%;
  font-family: 'JetBrains Mono';
  font-size: 17px;
  border-radius: 10px;
  border: 1px solid black;
  background: #EEE9E9;
  padding-left: 10px; /* отступ текста в поле */
  margin-left:15px; 
}
.role-zadanie{
  width: 300px;
  height: 30px;
  margin-left: 20px;
  font-family: 'JetBrains Mono';
  font-size: 17px;
  border-radius: 10px;
  border: 1px solid black;
  background: #EEE9E9;
  text-align: center;
}
label{
    margin-left: 50px;
}
footer{
  height: 30px;
  background: #1B1C21;
  padding: 10px 20px;
  margin-top: 6%;
}
</style>