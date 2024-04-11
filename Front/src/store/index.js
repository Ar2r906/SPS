import { createStore } from 'vuex'
import user from './user'
import auth from './auth'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth: auth,
    user: user
  }
})
