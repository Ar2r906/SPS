import { createStore } from 'vuex'
import user from './user'
import auth from './auth'
import feedback from './feedback'

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
    user: user,
    feedback: feedback
  }
})

// export default createStore({
//   state: {
//     userData: null
//   },
//   mutations: {
//     setUserData(state, userData) {
//       state.userData = userData;
//     }
//   },
//   actions: {
//     fetchUserData({ commit }, userData) {
//       commit('setUserData', userData);
//     }
//   },
//   getters: {
//     getUserData: state => state.userData
//   }
// })
