<template>
  <News />
  <Events/>
</template>

<script>
import News from '../components/News'
import Events from '../components/Events.vue'

export default {
  name: 'Home',
  components: {
    News,
    Events,
  },
}
</script>
