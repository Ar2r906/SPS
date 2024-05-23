<template>
    <hr>
    <div class='new-workout'>
        <div>
            <label>&#8249;Запланировать тренировку&#8250;</label>
        </div>
        <form @submit.prevent="createWorkout">
          <input v-model="title" type="text" placeholder="Название" required />
          <input v-model="description" type="text" placeholder="" required />
          <input v-model="date" type="date" required>
          <!-- <input type="time" />  
          <input type="time" /> -->
          <select name="complexity">
            <option value="com1">Лёгко</option>
            <option value="com2">Средне</option>
            <option value="com3">Сложно</option>
          </select>       
          <button type="submit" class="schedule">Запланировать</button>
          <ul>
            <li v-for="workout in workouts" :key="wirkout.id">
              {{ workout.title }} - {{ workout.description }} - {{ workout.date }}
            </li>
          </ul>
        </form>
    </div>
</template>

<script>
import { toHandlers } from 'vue';

export default {
  data() {
    return {
      title: '',
      description: '',
      date: '',
      workouts: [],
    };
  },
  methods: {
    async fetchWorcouts() {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:3000/api/workouts', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      this.workouts = data;
    },
    
    async createWorkout() {
      const token = localStorage.getItem('token');
      await fetch('http://localhost:3000/api/workouts', {
        method: 'POST',
        headers: {
          'Conten-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: this.title,
          description: this.description,
          date: this.date,
        }),
      });
      this.fetchWorcouts();
    },
  },
  mounted() {
    this.fetchWorcouts();
  },
}
</script>

<style>
label{
  font-family: 'JetBrains Mono';
  font-size: 20px;
  font-weight:bold;
}

.schedule{
  /* margin:auto; */
  /* margin-top: 40px;
  margin-left: 100px; */
  width: 150px;
  height: 35px;
  font-family: 'JetBrains Mono';
  color: #D9D9D9;
  border: 1px solid #402FFF;
  border-radius: 15px;
  background: #402FFF;
  font-size: 15px;
  position: absolute;
  left: 9.5%;
  margin-top: 3dvh;
  /* top: 100%;
  left: 7%; */
}
.schedule:hover{
  border: 1px solid #000;
  background-color: #000;
}
</style>
