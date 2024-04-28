import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import EventsRegistration from '@/views/EventsRegistration.vue'

import CoachAccount from '@/views/CoachAccount'
import PartnerAccount from '@/views/PartnerAccount'
import SportsmanAccount from '@/views/SportsmanAccount'

import instance from '@/middlewares'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/EventsRegistration',
    name: 'EventsRegistration',
    component: EventsRegistration,
    meta: { auth: true}
  },
  // {
  //   path: '/coach',
  //   name: 'coach',
  //   component: CoachAccount,
  //   meta: { requireCoach: true }
  // },
  // {
  //   path: '/partner',
  //   name: 'partner',
  //   component: PartnerAccount,
  //   meta: { requirePartner: true }
  // },
  // {
  //   path: '/sportsman',
  //   name: 'sportsman',
  //   component: SportsmanAccount,
  //   meta: { requireSportsmen: true }
  // },
  // {
  //   path: '/admin',
  //   component: AdminAccount,
  //   meta: { requireAdmin: true }
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  try {
    const requireAuth = to.matched.some(record => record?.meta.auth)
    if(requireAuth) {
      const response = await instance.get('api/users')
      if(response.status == 200) {
        return next()
      } else if(response.status == 401) {
        return next('/login')
      }
    }
    return next()
  } catch (error) {
    console.log(error.message)
    return next('/login')
  }
})

export default router
