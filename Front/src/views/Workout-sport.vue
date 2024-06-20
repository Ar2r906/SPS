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
      <button class="enroll-button" @click="enroll(workout.id)">Записаться</button>
      </li>
      </ul>
    <hr>

    <div class="zag">
     <h1>Запланированные тренировки</h1> </div>
      <ul id="registered-workouts">
        <li v-for="workout in registeredWorkouts" :key="workout.id">
          <span class="workout-info">{{ workout.date }}</span>
          <span class="workout-info">{{ workout.time }}</span>
          <span class="workout-info">{{ workout.duration }}</span>
          <span class="workout-info">{{ workout.title }}</span>
          <span class="workout-info">{{ workout.complexity }}</span>
        </li>
      </ul>
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
      registeredWorkouts: [],
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

    enroll(workoutId) {
      const workout = this.workouts.find(w => w.id === workoutId);
      if (workout) {
        this.registeredWorkouts.push(workout); // Добавляем тренировку в список запланированных
        this.workouts = this.workouts.filter(w => w.id !== workoutId); // Удаляем тренировку из списка доступных
        // Здесь может быть код для обновления данных на сервере
      }
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

#workouts-list, #registered-workouts {
  list-style-type: none; /* Убираем маркеры списка */
}

#workouts-list li, #registered-workouts li{
  background-color: #f2f2f2; /* Светлый фон для каждого элемента списка */
  margin-bottom: 1.5%; /* Отступ между элементами списка */
  padding: 12px; /* Внутренние отступы */
  border-radius: 5px; /* Скругление углов */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Тень для элементов списка */
  width: 75%;
  margin-left: 3.8%;
  font-size: 18px;

}
#workouts-list li, #registered-workouts li {
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

.list h1{
  margin-top: 3%;
  margin-left: -1.5%;
  margin-bottom:2%;
  color: #402FFF;
}
.zag h1, .zag h2{
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
