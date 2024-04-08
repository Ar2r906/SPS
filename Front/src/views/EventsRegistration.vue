<template>
    <hr>
    <h2>&#8249;Подача заявки&#8250;</h2>
    <form id="registration" action="" method="POST">
        <label>
        Субъект Российской Федерации:
        <input type="text" name="name" id="name" placeholder="" required autofocus>
        </label>
        <label>
        Город:
        <input type="text" name="city" id="city" placeholder="" required autofocus>
        </label>
        <label>
        Команда:
        <input type="text" name="team" id="team" placeholder="" required autofocus>
        </label>
        <label>
        Количество спортсменов:
        <input type="text" name="chislo" id="chislo" placeholder="" required autofocus>
        </label>
        <label>
        Представитель команды:
        <input type="text" name="coach" id="coach" placeholder="" required autofocus>
        </label>
        <label>
        Контактный номер представителя:
        <input type="text" name="phone" id="phone" placeholder="" required autofocus>
        </label>
        <label>
        Электронная почта представителя:
        <input type="text" name="e-mail" id="e-mail" placeholder="" required autofocus>
        </label>
        <label>
        Аккаунт в Telegram представителя:
        <input type="text" name="telegram" id="telegram" placeholder="" required autofocus>
        </label>
        <button type="submit">Принять участие</button>
    </form>
    <Contacts/>
</template>

<script>
import Contacts from '../components/Contacts.vue'

export default {
  name: 'Home',
  components: {
    Contacts,
  },
}
</script>

<style>
</style>