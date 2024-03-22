<template>
    <div class="windows">
        <div class="window-title">
            <h1>&lt;Новости&gt;</h1>
        </div>
        <div class="window-inform">
            <div class="inform-main">
                <div class="main-image">
                    <img src="../assets/image_in_news.svg" alt="test image" style="width:100%">
                </div>
                <div class="main-title">
                    <h2>Заголовок</h2>
                </div>
                <div class="main-text">
                    <p>Lorem Ipsum - это текст-”рыба”, часто используемый в печати и веб-дизайне. Lorem Ipsum является стандартной “рыбой”.</p>
                </div>
                <div class="main-date">
                    <time datetime="18.03.2024">18.03.2024</time>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name: 'News'
}
</script>

<style>
.windows {
    display: flex;
    flex-direction: column;
    row-gap: 5dvh;
    width: 96dvw;
    margin: 0 2dvw;
}
.window-title {
    padding-top: 4dvh;
}
.window-title h1 {
    font-size: 3rem;
}
.window-inform {
    display: flex;
    flex-direction: column;
    background-color: #2D2E37;
    height: 56dvh;
    width: 30dvw;
    justify-content: center;
    align-items: center;
}
.inform-main {
    height: 46dvh;
    width: 26dvw;
    background-color: #000000;
    color: #fff;
}
</style>
