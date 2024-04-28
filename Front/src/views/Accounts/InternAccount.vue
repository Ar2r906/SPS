<template>
<form id="Intern" action="" method="">
  <div>
   <label>
    Учебное заведение:</label>
    <input class='pole5'
      type="text"
      name="educational"
      id="educational"
    >
    </div>
  <div>
  <label>
    Группа/Класс: </label>
    <input class='pole5'
      type="text"
      name="group"
      id="group"
    >
  </div>
  <div>
  <label>
    Почта: </label>
    <input class='pole5' type="email" name="email">
  </div>
  <div>
  <label>
    Телефон: </label>
    <input class='pole5'
      type="text"
      name="phone"
      id="phone"
    >
    </div>
  </form>
  <button class="send1">&#8249;Пройти тестирование&#8250;</button>
</template>

<script>
</script>

<style>
label{
  font-family: JetBrains Mono;
  font-size: 15px;
  font-weight: 700;
}
  .pole5{
      height: 30px;
      width: 250px;
      margin-top:10px;
      border: 1px solid;
      border-radius: 10px;
      font-size: 20px;
      background: #D9D9D9;
      font-family: JetBrains Mono;
      text-align: center;
    }
</style>