<template>
<div id='mero'>
    <h1>&lt;Мероприятия&gt;</h1>
    <table>
        <tr>
            <td><u>Дата</u></td>
            <td><u>Название</u></td>
            <td><u>Место</u></td>
            <td><u>Дисциплина</u></td>
            <td><u>Участники</u></td>
        </tr>
        <tr>
            <td>27-29 июня</td>
            <td><router-link class="link" to="/EventsRegistration"  style="text-decoration: none; color:black;">Всероссийские соревнования по спортивному программированию</router-link></td>
            <td>Г. Оренбург</td>
            <td>Программирование робототехники</td>
            <td>Студенты</td>
        </tr>

        <tr>
            <td>1-3 августа</td>
            <td><router-link class="link" to="/EventsRegistration"  style="text-decoration: none; color:black;">Всероссийские соревнования по спортивному программированию среди студентов</router-link></td>
            <td>Г. Москва, РЭУ им. Г.В. Плеханова</td>
            <td></td>
            <td>Студенты</td>

        </tr>

        <tr>
            <td>1-3 августа</td>
            <td><router-link class="link" to="/EventsRegistration"  style="text-decoration: none; color:black;">Всероссийские соревнования по спортивному программированию</router-link></td>
            <td>Г. Москва, РЭУ им. Г.В. Плеханова</td>
            <td></td>
            <td>Мужчины и женщины</td>
        </tr>

        <tr>
            <td>27-31 августа</td>
            <td><router-link class="link" to="/EventsRegistration"  style="text-decoration: none; color:black;">Всероссийские соревнования среди студентов по спортивному программированию "Кубок будущего"</router-link></td>
            <td>Г. Калуга, KFL Arena</td>
            <td></td>
            <td>Студенты</td>
        </tr>

        <tr>
            <td>13-15 сентября</td>
            <td><router-link class="link" to="/EventsRegistration"  style="text-decoration: none; color:black;">Всероссийские соревнования по спортивному программированию</router-link></td>
            <td>Г. Пермь, Пермский край</td>
            <td>Программирование систем информационной безопасности</td>
            <td>Мужчины и женщины от 16 лет</td>
        </tr>

    </table>
</div>
<hr>
</template>

<script>
export default {
    name: 'Events',
}
</script>

<style scoped>
table{
    width: 95%;
    text-align: center;
    margin-left: 3%;
    margin-top: 10px;
}
td {
  text-align: center;
	padding: 10px;
    font-family: "JetBrains Mono";
    font-size: 22px;
    font-weight: bold;
}
 th {
  text-align: center;
  padding: 10px;
 }

h1 {
  margin: 35px 0px 0px 70px;
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
