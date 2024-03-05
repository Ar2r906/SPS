<template>
  <div id="app">
    <NavBar />
    <div class="home-vies">
      <HomeView />
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import HomeView from './views/HomeView.vue'
import FeedBack from './components/FeedBack.vue'

export default {
  name: 'App',
    components: {
      NavBar,
      HomeView,
      FeedBack,
    },
}
</script>

<style>
  body {
    background-color: #D9D9D9;
  }
</style>
