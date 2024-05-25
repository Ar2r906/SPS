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

        <div class='data'>
          <label>
            КПП:
            <input type="text" v-model="kpp">
          </label>


            <label>
              ИНН:
              <input type="text" v-model="inn">
            </label> 


            <label>
              ОГРН:
              <input type="text" v-model="ogrn">
            </label>
        </div>

        <div class='data2'>
            <label>
              Компания:
              <input type="text" v-model="company">
            </label>

            <label>
              Телефон:
              <input type="text" v-model="phone">
            </label>

            <label>
              Почта:
              <input type="text" v-model="email">
            </label>

        </div>
      </form>
    </div>
  </div>
  <button class="submit">&#8249;Стать партнёром&#8250;</button>
  <button class="status">Статус?</button>
</template>

<script>
</script>

<style scoped>
.data{
  position: absolute;
  left: 80%;
}
.data2{
  position: absolute;
}
.block-info{
  position: absolute;
  left: 20%;
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
  margin-left: 100px;
  width: 750px; /* ширина формы */

}
label{
  font-family: 'JetBrains Mono';
  font-size: 20px;
  font-weight:bold;
  display: flex;
  justify-content: space-between;
  padding: 25px;
  margin-right: 110px; /*отступ перед пол*/
}
input{
  width: 400px;
  height: 33px;
  font-family: 'JetBrains Mono';
  font-size: 17px;
  border-radius: 10px;
  border: 1px solid black;
  background: #D9D9D9;
  padding-left: 15px; /* отступ текста в поле */ 
  margin-left: 20px;
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