<template>
    <hr>
    <div class='new-workout'>
        <div>
            <label>&#8249;Запланировать тренировку&#8250;</label>
        </div>
        <form>
            <div>
            <label>Число</label>
            <input type="date" />
            </div>

            <div>
            <label>Время</label>
            <input type="time" />
            </div>

            <div>
            <label>Длительность</label>
            <input type="time" />
            </div>

            <div>
            <label>Название
            <input type="text" v-model="nazvanie"> </label>
            </div>

            <div>
            <label>Сложность</label>
            <select name="complexity">
                <option value="com1">Лёгко</option>
                <option value="com2">Средне</option>
                <option value="com3">Сложно</option>
            </select>
            </div>
        <button class="schedule">Запланировать</button>
        </form>
    </div>
</template>

<script>
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
