<template>
  <div class="windows">
    <div class="window-title">
      <h1>&lt;Новости&gt;</h1>
    </div>
    <div class="window-inform">
      <div class="inform-main">
        <div class="main-image">
          <img src="../assets/image_in_news.svg" alt="test image" style="width: 30vw">
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
  name: 'HomeView',
}

</script>

<style>
/* body {
  
} */
.windows {
  display: flex;
  flex-direction: column;
  column-gap: 3dvh;
}
.window-title {
  font-size: 1.5rem;
}
.window-inform {
  padding-top: 5dvh;
  background-color: #2D2E37;
  height: 48dvh;
}
.inform-main {
  background-color: #1B1C21;
  width: 36vw;
  display: flex;
  flex-direction: column;
  row-gap: 1dvh;
}
.main-title,
.main-text,
.main-date {
  color: #fff;
  font-size: 1.5rem;
  padding-top: 2dvh;
}
.main-date {
  text-align: right;
}
</style>