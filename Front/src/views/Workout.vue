<template>
  <div class='head-work'>
    <h1>Календарь тренировок</h1>


    <div class='knopki-work'>
      <a href="/">На главную</a>
      <a href="javascript:history.back()">Назад</a>
    </div>
  </div>

     <div class="zag">
     <h1>Тренировки</h1> </div>
     <ul class="list">
      <li>Дата</li>
      <li>Время</li>
      <li>Длительность</li>
      <li>Название</li>
      <li>Сложность</li>
      </ul>
    <ul id="workouts-list">
      <li v-for="workout in workouts" :key="workout.id">
      <span class="workout-info">{{ workout.date }}</span>
      <span class="workout-info">{{ workout.time }}</span>
      <span class="workout-info">{{ workout.duration }}</span>
      <span class="workout-info">{{ workout.title }}</span>
      <span class="workout-info">{{ workout.complexity }}</span>
      <!-- <button class="enroll-button" @click="enroll(workout.id)">Записаться</button> -->
      <button class="delete-button" @click="deleteWorkout(workout.id)">Удалить</button>
      </li>
      </ul>
    <hr>
    <div class='new-workout'>
      
        <h2>&#8249;Запланировать тренировку&#8250;</h2>
  
        <form @submit.prevent="createWorkout">
          <label>Дата</label>
          <input v-model="workoutData.date" type="date" required>
          <label>Время</label>
          <input v-model='workoutData.time' type="time" placeholder="Время" />
          <label>Длительность</label>
          <input v-model="workoutData.duration" type="time" placeholder="Длительность" required />
        <br>
          <label>Название</label>
          <input v-model="workoutData.title" type="text" placeholder="Название" required />
          <label>Сложность</label>
          <select v-model="workoutData.complexity">
            <option value="Легко">Легко</option>
            <option value="Средне">Средне</option>
            <option value="Сложно">Сложно</option>
          </select>       
          <button type="submit" class="schedule">Запланировать</button>
        </form>

</div>

<Contacts/>
</template>

<script>
import axios from 'axios';
import Contacts from '../components/Contacts.vue'


export default {
  components:{
    Contacts,
  },
  data() {
    return {
      workouts: [],
      workoutData: {
        date: '',
        time: '',
        duration: '',
        title: '',
        complexity: ''
      }
    };
  },
    created() {
    this.fetchWorkouts();
  },
  methods: {
    fetchWorkouts() {
      fetch('http://localhost:3000/api/workouts')
        .then(response => response.json())
        .then(data => {
          this.workouts = data;
        })
        .catch(error => console.error('Ошибка:', error));
    },
    async createWorkout() {
    console.log('Метод createWorkout вызван');
    console.log('Отправляемые данные:', this.workoutData);
    try {
      const response = await axios.post('http://localhost:3000/api/workouts', this.workoutData);
      if (response && response.data) {
        if (response.status === 201) {
          console.log('Тренировка создана:', response.data);
          alert('Тренировка создана! Обновите страницу.');
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
  },
    
     enroll(workoutId) {
      // Здесь код для процесса записи на тренировку
      alert('Вы успешно записались на тренировку!');
    },
      async deleteWorkout(workoutId) {
    try {
      const response = await axios.delete(`http://localhost:3000/api/workouts/${workoutId}`);
      if (response.status === 200) {
        console.log('Тренировка удалена:', response.data);
        this.fetchWorkouts(); // Обновляем список тренировок
        alert('Тренировка удалена!');
      } else {
        console.log('Неожиданный статус ответа:', response.status);
      }
    } catch (error) {
      console.error('Ошибка при удалении тренировки:', error);
    }
  }
}
}
</script>

<style scoped>
.head-work {
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
.head-work h1{
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


.list li {
    display: inline; /* Отображать как строчный элемент */
    margin-right: 3.5%; /* Отступ слева */
    font-size: 20px;
    margin-left: 5.5%;
   }
.list{
  display: flex;
  justify-content: space-around;
  font-size: 1.2em;
  margin: 1em 0;
/*   
  margin-top: 1.5%;
  margin-bottom: 1%;
  margin-left:2%; */
}

#workouts-list {
  list-style-type: none; /* Убираем маркеры списка */
}

#workouts-list li {
  background-color: #f2f2f2; /* Светлый фон для каждого элемента списка */
  margin-bottom: 1.5%; /* Отступ между элементами списка */
  padding: 12px; /* Внутренние отступы */
  border-radius: 5px; /* Скругление углов */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Тень для элементов списка */
  width: 75%;
  margin-left: 3.8%;
  font-size: 18px;

}
#workouts-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.workout-info {
  flex: 1;
  margin-left: 1.7%;
}


#workouts-list li:hover {
  background-color: #e9e9e9; /* Цвет фона при наведении */
}

.enroll-button, .delete-button {
  background-color: #402FFF;
  font-family: 'JetBrains Mono';
  color:#D9D9D9;
  padding: 10px 15px; /* Внутренние отступы */
  border: none; /* Убираем границу */
  border-radius: 10px; /* Скругляем углы */
  cursor: pointer; /* Курсор в виде указателя */
  margin-left: auto;
  font-size: 15px;
  display: block;
}

.enroll-button:hover, .delete-button:hover {
  background-color: #000; /* Темно-зеленый фон при наведении */
}


label{
  font-family: 'JetBrains Mono';
  font-size: 20px;
  font-weight:bold;
}

.schedule{
  width: 200px;
  height: 35px;
  font-family: 'JetBrains Mono';
  color: #D9D9D9;
  border: 1px solid #402FFF;
  border-radius: 15px;
  background: #402FFF;
  font-size: 17px;
  position: absolute;
  left: 62.5%;
  margin-top: 1.3%;

}
.schedule:hover{
  border: 1px solid #000;
  background-color: #000;
}
.new-workout input, select{
  height: 30px;
  width: 300px;
  margin-left: 25px;
  border-radius: 20px;
  font-size: 17px;
  font-family: 'JetBrains Mono';
  margin-top: 20px;
  margin-bottom: 5px;
  text-indent: 4%;
}
.new-workout h2{
  margin-top: 3%;
  margin-left: 3%;
  color: #402FFF;
}
.new-workout{
  margin-bottom: 7%;
}

.list h1{
   margin-top: 3%;
  margin-left: -1.5%;
  margin-bottom:2%;
  color: #402FFF;
}
.zag h1{
  margin-left: 3%;
  margin-top: 2%;

  color: #402FFF;
}
.work-footer{
  height: 30px;
  background: #1B1C21;
  padding: 10px 20px;
  margin-top: 3%;
  position: static;
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
