import { createRouter, createWebHistory } from 'vue-router'
import instance from '@/middlewares'

import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import EventsRegistration from '@/views/EventsRegistration.vue'

import CoachAccount from '@/views/Accounts/CoachAccount'
import PartnerAccount from '@/views/Accounts/PartnerAccount'
import SportsmanAccount from '@/views/Accounts/SportsmanAccount'
import InternAccount from '@/views/Accounts/InternAccount.vue'
import HeadCoachAccount from '@/views/Accounts/HeadCoachAccount'

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
    /**  meta: { auth: true} **/
  },
  {
    path: '/coach',
    name: 'coach',
    component: CoachAccount,
    meta: {
      role: 'coach',
    }
  },
  {
    path: '/headcoach',
    name: 'headcoach',
    component: HeadCoachAccount,
    meta: {
      role: 'headcoach',
    }
  },
  {
    path: '/intern',
    name: 'intern',
    component: InternAccount,
    meta: {
      role: 'intern',
    }
  },
  {
    path: '/sportsman',
    name: 'sportsman',
    component: SportsmanAccount,
    meta: {
      role:'sportsman',
    }
  },
  {
    path: '/partner',
    name: 'partner',
    component: PartnerAccount,
    meta: {
      role: 'partner',
    }
  },
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
