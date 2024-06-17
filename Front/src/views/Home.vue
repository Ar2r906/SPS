<template>
  <MainHeader />
  <News />
  <Events/>
  <Partners2/>
  <Contacts/>
</template>

<script>
import MainHeader from '../components/MainHeader.vue'
import News from '../components/News.vue'
import Events from '../components/Events.vue'
import Contacts from '../components/Contacts.vue'
import Buttons from '../components/Buttons.vue'
import Partners2 from '../components/Partners2.vue'

export default {
  name: 'Home',
  components: {
    MainHeader,
    News,
    Events,
    Contacts,
    Buttons,
    Partners2,
  },
}
</script>
