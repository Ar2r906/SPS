<template>
  <div class="block">
    <h1 style="padding: 2dvh 0 2dvh 2dvw; color: #000">Новости</h1>
    <div class="windows-blocks">

      <div class="window-news">
        <div class="news">
          <div class="photo">
            <img src="" alt="">
          </div>

            <div class="information">
              <div class="title">
                <h3>Заголовок</h3>
              </div>

              <div class="info">
                <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit unde esse consequatur perferendis,
                fuga deleniti molestiae accusantium corrupti, quaerat cumque impedit dolorum perspiciatis.
                Placeat blanditiis quaerat quis, facilis sed labore perspiciatis repellat optio fuga ratione minus/
                </span>
              </div>

              <div class="date">
                <time datetime="05.03.2024">5 марта 2024</time>
              </div>
            </div>
        </div>
      </div>

      <div class="window-news">
        <div class="news">
          <div class="photo">
            <img src="" alt="">
          </div>

            <div class="information">
              <div class="title">
                <h3>Заголовок</h3>
              </div>

              <div class="info">
                <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit unde esse consequatur perferendis,
                fuga deleniti molestiae accusantium corrupti, quaerat cumque impedit dolorum perspiciatis.
                Placeat blanditiis quaerat quis, facilis sed labore perspiciatis repellat optio fuga ratione minus/
                </span>
              </div>

              <div class="date">
                <time datetime="05.03.2024">5 марта 2024</time>
              </div>
            </div>
        </div>
    </div>

    <div class="window-news">
      <div class="news">
          <div class="photo">
            <img src="" alt="">
          </div>

        <div class="information">
            <div class="title">
              <h3>Заголовок</h3>
            </div>

            <div class="info">
              <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit unde esse consequatur perferendis,
              fuga deleniti molestiae accusantium corrupti, quaerat cumque impedit dolorum perspiciatis.
              Placeat blanditiis quaerat quis, facilis sed labore perspiciatis repellat optio fuga ratione minus/
              </span>
            </div>

            <div class="date">
              <time datetime="05.03.2024">5 марта 2024</time>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'NewsBlock'
}
</script>

<style>
  .block {
      width: 100%;
      height: 90dvh;
      background-color: #D9D9D9;
    }
    .windows-blocks {
      display: flex;
      flex-direction: row;
      width: 98dvw;
      overflow-x: scroll;
    }
    .window-news {
    display: flex;
    flex-direction: row;
    padding: 0 2dvw 0 2dvw;
  }
  .news {
    display: flex;
    flex-direction: column;
    width: 30dvw;
    height: 65dvh;
    background-color: #2D2E37;
    color: #fff;
  }
  .photo {
    margin: 2dvh 1.5dvw 0 1.5dvw;
    height: 30dvh;
    width: 27dvw;
    background-color: aliceblue;
  }
  .information {
    background-color: #1B1C21;
    width: 27dvw;
    margin: 0 1.5dvw 0 1.5dvw;
  }
  .title, .info, .date {
    padding: 1dvh 1dvw;
  }
  .date {
    text-align: right;
  }
</style>