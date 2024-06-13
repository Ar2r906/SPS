<template>
    <h1>Тренировки</h1>
     <ul class="hr">
      <li>Дата</li>
      <li>Время</li>
      <li>Длительность</li>
      <li>Название</li>
      <li>Сложность</li>
      </ul>
    <ul id="workouts-list">
    <li v-for="workout in workouts" :key="workout.id">
      {{ workout.date }}{{ workout.time }} {{ workout.duration }} {{ workout.title }}  {{ workout.complexity }}
      <button class="enroll-button" @click="enroll(workout.id)">Записаться</button>
      <button class="delete-button" @click="deleteWorkout(workout.id)">Удалить</button>
    </li>
    </ul>

    <hr>
    <div class='new-workout'>
      
        <h2>&#8249;Запланировать тренировку&#8250;</h2>
  
        <form @submit.prevent="createWorkout">
          <label>Дата</label>
          <input v-model="date" type="date" required>
          <label>Время</label>
          <input v-model='time' type="time" placeholder="Время" />
          <label>Длительность</label>
          <input v-model="duration" type="time" placeholder="Длительность" required />
        <br>
          <label>Название</label>
          <input v-model="title" type="text" placeholder="Название" required />
          <label>Сложность</label>
          <select v-model="complexity">
            <option value="com1">Легко</option>
            <option value="com2">Средне</option>
            <option value="com3">Сложно</option>
          </select>       
          <button type="submit" class="schedule">Запланировать</button>
        </form>

</div>

<div class="work-footer">
</div>
</template>

<script>
export default {
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
      // Здесь должен быть ваш HTTP запрос к серверу для получения списка тренировок
      // Пример:
      fetch('http://localhost:3000/api/workouts')
        .then(response => response.json())
        .then(data => {
          this.workouts = data;
        })
        .catch(error => console.error('Ошибка:', error));
    },
    async createWorkout() {
      try {
        const response = await this.$axios.post('/api/workouts', this.workoutData);
        if (response && response.data && response.status === 201) {
          console.log('Тренировка создана:', response.data);
        } else {
          // Обработка случая, когда ответ не содержит данных
          console.error('Ответ сервера не содержит данных');
        }
      } catch (error) {
        // Проверка наличия объекта error.response и error.response.data
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
     deleteWorkout(workoutId) {
      this.workouts = this.workouts.filter(workout => workout.id !== workoutId);
      alert('Тренировка отменена!');
    }
  }
}

</script>

<style scoped>
ul.hr li {
    display: inline; /* Отображать как строчный элемент */
    margin-right: 4%; /* Отступ слева */
    
   }
.hr{
  margin-top: 1.5%;
  margin-bottom: 1%;
}
#workouts-list {
  list-style-type: none; /* Убираем маркеры списка */
  padding: 0;
}
.hr{
  margin-left:4%;
}

#workouts-list li {
  background-color: #f2f2f2; /* Светлый фон для каждого элемента списка */
  margin-bottom: 1.5%; /* Отступ между элементами списка */
  padding: 10px; /* Внутренние отступы */
  border-radius: 5px; /* Скругление углов */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Тень для элементов списка */
  width: 50%;
  margin-left: 2.5%;
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
  margin-left: 2.5%;

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
  left: 65%;
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
