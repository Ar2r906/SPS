<template>
  <div class="partners">
    <h1 align=center>Наши партнёры</h1>
    <button class="b1" type="submit">Стать партнёром</button>
    <!-- <input class="b1" type="button" name="b1" value="Стать партнёром" /> -->
  </div>
    <div class="btn-group">
        <button><img src="/assets/partners/vk.svg"></button>
        <button><img src="/assets/partners/1c.svg"></button>
        <button><img src="/assets/partners/росатом.svg"></button>
        <button><img src="/assets/partners/xx.svg"></button>
    </div>
    <div class="btn-group2">
        <button><img src="/assets/partners/vk.svg"></button>
        <button><img src="/assets/partners/касперский.svg"></button>
        <button><img src="/assets/partners/ржд.svg"></button>
        <button><img src="/assets/partners/северсталь.svg"></button>
    </div>
</template>

<script>
export default {
    name: 'Partners2'
}
</script>

<style scoped>
h1 {
    margin-top: 70px;
}
.b1 {
    position: absolute;
    margin-top: -37px;
    width: 270px;
    height: 40px;
    font-family: 'JetBrains Mono';
    color: #D9D9D9;
    border: 0;
    border-radius: 0px;
    background: #000000;
    font-size: 15px;
    margin-left: 1452px;
}
.btn-group button {
    width: 270px;
    height: 70px;
    background: #000000;
    color: #D9D9D9;
    margin-left: 160px; /*расстояние между кнопками*/
    margin-top: 65px;
}
.btn-group2 button {
    width: 270px;
    height: 70px;
    background: #000000;
    color: #D9D9D9;
    margin: 50px 0px 65px 160px; /*верх справа низ слева*/
}

</style>