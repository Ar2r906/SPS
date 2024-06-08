<template>
  <navbar>
  <h1>Спортсмен-стажёр</h1>
  <img src='assets/Ellipse.svg'>
  </navbar>

  <div class="main">
    <div class="block-photo">
      <div class="block-photo image">
        <img src="../../assets/temp/Image_profile.svg" alt="image-profile">
      </div>
      <button class="block-photo button">Изменить</button>
    </div>
    <div class="block-info">
      <form @submit.prevent="">
        <div>
          <label>Фамилия Имя Отчество</label>
        </div>
        <div>
        <label>
          Учебное заведение:
          <input type="text" v-model="educational_envy">
        </label>
        </div>
        <div>
        <label>
          Группа/класс:
          <input type="text" v-model="group">
        </label> 
        </div>
        <div>
        <label>
          Почта:
          <input type="text" v-model="email">
        </label>
        </div>
        <div>
        <label>
          Телефон:
          <input type="text" v-model="telephone">
        </label>
        </div>
      </form>
    </div>
  </div>
  <router-link to="/testirovanie"> <button class="send1">&#8249;Пройти тестирование&#8250;</button></router-link>
</template>

<script>
</script>

<style scoped>
navbar{
  height: 700px;
}

.main {
  display: flex;
  width: 90%;
  height: 60dvh;
  background: white;
  border: 7px solid #D9D9D9;
  border-radius: 25px;
  position: absolute;
  margin: 5% 5%;
}
form {
  margin-top: 5dvh;
  margin-left: 10dvw;
  width: 750px; /* ширина формы */

}
label{
  font-family: 'JetBrains Mono';
  font-size: 20px;
  font-weight:bold;
  display: flex;
  justify-content: space-between;
  padding: 25px;
}
input{
  width: 400px;
  height: 33px;
  font-family: 'JetBrains Mono';
  font-size: 17px;
  border-radius: 10px;
  border: 1px solid black;
  background: #D9D9D9;
  float: right;  /* выравнивание по правому краю */ 
  padding-left: 15px; /* отступ текста в поле */ 
}
.send1{
  position: absolute;
  top: 134%;
  left: 7%;
}
.status{
  position: absolute;
  top: 80%;
  left: 85%;
  font-family: 'JetBrains Mono';
  color: #D9D9D9;
  border: 1px solid #402FFF;
  border-radius: 20px;
  background: #402FFF;
  font-size: 18px;
  height: 40px;
  width: 160px;
}
.send1:hover {
  border: 1px solid #000;
  background-color: #000;
}
.button{
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
.button:hover{
  border: 1px solid #000;
  background-color: #000;
}
.block-photo {
  margin-left: 2dvw;
}
.image {
  padding-top: 5dvh;
}

</style>