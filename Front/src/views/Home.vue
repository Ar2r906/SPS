<template>
  <News />
  <Events/>
  <Contacts/>
</template>

<script>
import News from '../components/News'
import Events from '../components/Events.vue'
import Contacts from '../components/Contacts.vue'

export default {
  name: 'Home',
  components: {
    News,
    Events,
    Contacts,
  },
}
</script>
