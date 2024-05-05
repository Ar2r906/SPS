<template>
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

  <div class="main2">
    <div>
        <label>&#8249;Моя команда&#8250;</label>

    </div>
  </div>

  <div class="main3">
    <div>
        <label>&#8249;История соревнований&#8250;</label>
    </div>
  </div>

  <div class="main4">
    <div>
        <label>&#8249;История тренировок&#8250;</label>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.main, .main2, .main3, .main4 {
  display: flex;
  width: 90%;
  height: 60dvh;
  background: white;
  border: 7px solid #D9D9D9;
  border-radius: 25px;
  margin: 5% 5%;
}


form {
  margin-top: 5dvh;
  margin-left: 10dvw;
  width: 750px; /* ширина формы */
}
.main2 label{
  margin-left: 38dvw;
  font-size: 25px;
}
.main3 label{
  margin-left: 35dvw;
  font-size: 25px;
}
.main4 label{
  margin-left: 35dvw;
  font-size: 25px;
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

.send1:hover {
  border: 1px solid #000;
  background-color: #000;
}
.button{
  width: 150px;
  height: 35px;
  font-family: 'JetBrains Mono';
  color: #D9D9D9;
  border: 1px solid #402FFF;
  border-radius: 15px;
  background: #402FFF;
  font-size: 15px;
  position: absolute;
  left: 14.5%;
  margin-top: 2dvh;
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