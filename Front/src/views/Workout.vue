<template>
    <h1>Тренировки</h1>
    <ul id="workouts-list"></ul>

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
      workoutData: {
        date: '',
        time: '',
        duration: '',
        title: '',
        complexity: ''
      }
    };
  },
  methods: {
    async createWorkout() {
      try {
        const response = await this.$axios.post('/api/workouts', this.workoutData);
        if (response.status === 201) {
          // Тренировка успешно создана
          console.log('Тренировка создана:', response.data);
          // Очистка формы или переход на другую страницу
        }
      } catch (error) {
        console.error('Ошибка при создании тренировки:', error);
        // Обработка ошибок, например, показ сообщения пользователю
      }
    }
  }
}
</script>

<style scoped>
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
