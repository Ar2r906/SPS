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
        <label>
          Учебное заведение:
          <input type="text" v-model="educational_envy">
        </label>

        <label>
          Группа/класс:
          <input type="text" v-model="group">
        </label> 
        
        <label>
          Почта:
          <input type="text" v-model="email">
        </label>
        
        <label>
          Телефон:
          <input type="text" v-model="telephone">
        </label>
        
      </form>
    </div>
  </div>
  <button class="send1">&#8249;Пройти тестирование&#8250;</button>
</template>

<script>
</script>

<style scoped>
.main {
  display: flex;
  width: 90%;
  height: 60dvh;
  background: white;
  border: 4px solid #D9D9D9;
  border-radius: 25px;
  position: absolute;
  margin: 5% 5%;
}
form {
  margin-top: 5dvh;
  margin-left: 10dvw;
}


.send1{
  position: absolute;
  top: 135.5%;
  left: 7%;
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