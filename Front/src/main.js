import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// const app = createApp(App)
// components.forEach(component => {
//     app.component(component.name,)
// });
createApp(App).use(store).use(router).mount('#app')
