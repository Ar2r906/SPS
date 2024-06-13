<template>
  <div class="main">
    <div class="block-photo">
      <div class="block-photo image">
        <img src="../../assets/temp/Image_profile.svg" alt="image-profile">
      </div>
      <button class="block-photo button">Изменить</button>
    </div>
    <div class="block-info">
      <form @submit.prevent="updateProfile">
        <div>
          <input type="text" v-model="name" placeholder="Имя">
          <input type="text" v-model="email" placeholder="Email">
        </div>
        <button type="submit">Сохранить изменения</button>
      </form>
    </div>
  </div>
  <router-link to="/testirovanie"> <button class="send1">&#8249;Пройти тестирование&#8250;</button></router-link>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      // Предполагается, что данные уже загружены в состояние Vuex
      name: this.$store.state.auth.user.name,
      email: this.$store.state.auth.user.email
    }
  },
  methods: {
    ...mapActions('auth', ['updateProfile']),
    updateProfile() {
      const updatedData = {
        name: this.name,
        email: this.email
      }
      this.updateProfile(updatedData).then(() => {
        // Обработка успешного обновления профиля
      }).catch(error => {
        // Обработка ошибок обновления профиля
      })
    }
  },
  created() {
    // Здесь вы можете вызвать действие для загрузки данных пользователя, если они еще не загружены
    if (!this.name || !this.email) {
      this.$store.dispatch('auth/loadUserProfile')
    }
  }
}
</script>

<style scoped>
.navbar-intern{
  height: 500px;
  background-color: black;
  background-image: url('../../assets/Ellipse.svg');
  background-repeat: no-repeat;
  background-size: auto;
}
.navbar-intern p{
   color: white;
   margin-top: 7%;
   margin-left: 5%;
   font-size: 50px;
   letter-spacing: 7px;
   font-weight: lighter;

}
.knopki{
  background-color: #1B1C21;
  height: 70px;
  border-radius: 15px;
  margin-left: 80%;
  margin-right: 2%;
}

.logo-intern{
  background-color: #1B1C21;
  border-radius: 15px;
  width:100px;
  height: 70px;
  margin-left: 5%;
  margin-top: -4%;
}
.logo-intern img{
  margin-left: 37px;
  margin-top: 20px;
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
  margin-top: 1.5dvh;
  margin-left: 5dvw;
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
  top: 202%;
  left: 3%;
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
  left: 12%;
  margin-top: 0.3dvh;
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
  padding-top: 2.5dvh;
}
footer{
  height: 30px;
  background: #1B1C21;
  padding: 10px 20px;
  margin-top: 40%;
  position: static;
}

</style>