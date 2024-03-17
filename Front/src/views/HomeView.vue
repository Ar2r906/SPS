<template>
  <div>
    <div class="news">
      <NewsBlock />
    </div>
    <div class="events">
      <EventsBlock />
    </div>
    <div class="feedback">
      <FeedBack />
    </div>
  </div>
</template>

<script>
import NewsBlock from '@/components/NewsBlock.vue'
import FeedBack from '@/components/FeedBack.vue';
import EventsBlock from '@/components/EventsBlock.vue';
import NavBar from "@/components/NavBar.vue";

export default {
  name: 'HomeView',
  components: {
    NewsBlock,
    FeedBack,
    EventsBlock,
  }
}

</script>

<style>

.events {
  padding: 15dvh 0 0 2dvw;
}
.feedback {
  padding: 15dvh 0 0 2dvw;
}
</style>