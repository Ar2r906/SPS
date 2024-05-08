<template>
    <form class='forma-zadanie'>
    <div class='role1'>
                <label>Роль:</label>
                    <select name="role" class='role-zadanie'>
                        <option value="r1">Роль1</option>
                        <option value="r2">Роль2</option>
                        <option value="r3">Роль3</option>
                    </select>
    </div>
        <label>
            Задание: 
        </label>
            <div><textarea class="zadanie" rows="2" cols="40" name="zadanie" v-model="zadanie"></textarea></div>
            
        <button class="download">Загрузить</button>
    </form>
</template>

<script>
</script>

<style>
.forma-zadanie{
    margin-top: 15dvh;
}
.role1{
  position: absolute;
  left: 71.5%;
}
.download{
  width: 180px;
  height: 35px;
  font-family: 'JetBrains Mono';
  color: #D9D9D9;
  border: 1px solid #402FFF;
  border-radius: 15px;
  background: #402FFF;
  font-size: 15px;
  font-weight:bold;
  position: absolute;
  left: 46%;
  margin-top: 3dvh;

}
.download:hover{
  border: 1px solid #000;
  background-color: #000;
}
.zadanie{
  width: 90%;
  height: 120px;
  margin-top: 20px;
  margin-left: 50px;
  font-family: 'JetBrains Mono';
  font-size: 17px;
  border-radius: 10px;
  border: 1px solid black;
  background: #EEE9E9;
  padding-left: 15px; /* отступ текста в поле */ 
  padding-top: 15px; /* отступ текста в поле */ 
  padding-right: 15px; /* отступ текста в поле */ 
}
.role-zadanie{
  width: 300px;
  height: 30px;
  margin-left: 20px;
  font-family: 'JetBrains Mono';
  font-size: 17px;
  border-radius: 10px;
  border: 1px solid black;
  background: #EEE9E9;
  text-align: center;
}
label{
    margin-left: 50px;
}
</style>