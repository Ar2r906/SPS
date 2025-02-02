import { createRouter, createWebHistory } from 'vue-router';
import instance from '@/middlewares';
import store from '../store';
import { nextTick } from 'vue';

import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import EventsRegistration from '@/views/EventsRegistration.vue';
import Workout from '@/views/Workout.vue';
import WorkoutSport from '@/views/Workout-sport.vue';
import Testirovanie from '@/views/Testirovanie.vue';
import NewsPage from '@/views/NewsPage.vue';
import Team from '@/views/Team.vue';
import EventsStr from '@/views/EventsStr.vue';

import CoachAccount from '@/views/Accounts/CoachAccount';
import PartnerAccount from '@/views/Accounts/PartnerAccount';
import SportsmanAccount from '@/views/Accounts/SportsmanAccount';
import InternAccount from '@/views/Accounts/InternAccount.vue';
import HeadCoachAccount from '@/views/Accounts/HeadCoachAccount.vue';
import auth from '@/store/auth';

import Partners2 from '@/components/Partners2.vue';
import Events from '@/components/Events.vue';
import Contacts from '@/components/Contacts.vue';
import MainHeader from '@/components/MainHeader.vue';

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/register', name: 'register', component: Register },
  { path: '/login', name: 'login', component: Login },
  {
    path: '/events/:eventId',
    name: 'EventsRegistration',
    component: EventsRegistration,
    /** meta: { auth: true} **/
    props: route => ({ eventId: Number(route.params.eventId) })
  },
  {
    path: '/coach',
    name: 'coach',
    component: CoachAccount,
    meta: {
      role: 'coach',
      // auth: true,
    },
  },
  {
    path: '/headcoach',
    name: 'headcoach',
    component: HeadCoachAccount,
    // meta: {
    //   role: 'headcoach',
    //   // auth: true,
    // }
  },
  {
    path: '/intern',
    name: 'intern',
    component: InternAccount,
    meta: {
      role: 'intern',
      // auth: true,
    },
  },
  {
    path: '/sportsman',
    name: 'sportsman',
    component: SportsmanAccount,
    meta: {
      role: 'sportsman',
      // auth: true,
    },
  },
  {
    path: '/partner',
    name: 'partner',
    component: PartnerAccount,
    meta: {
      role: 'partner',
      // auth: true,
    },
  },
  {
    path: '/workout',
    name: 'workout',
    component: Workout,
    meta: {
      // auth: true, roles: ['coach', 'headcoach']
    },
  },
  {
    path: '/workoutSport',
    name: 'workoutSport',
    component: WorkoutSport,
    meta: {
      // auth: true, roles: ['coach', 'headcoach']
    },
  },
  {
    path: '/testirovanie',
    name: 'testirovanie',
    component: Testirovanie,
  },
  {
    path: '/newspage',
    name: 'newspage',
    component: NewsPage,
  },
  {
    path: '/Partners2',
    name: 'partners2',
    component: Partners2,
  },
  {
    path: '/Events',
    name: 'Events',
    component: Events,
  },
  {
    path: '/EventsStr',
    name: 'EventsStr',
    component: EventsStr,
  },
  {
    path: '/Contacts',
    name: 'Contacts',
    component: Contacts,
  },
  {
    path: '/Team',
    name: 'team',
    component: Team,
  },
  {
    path: '/MainHeader',
    name: 'MainHeader',
    component: MainHeader,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return nextTick().then(() => {
        const element = document.querySelector(to.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      });
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach(async (to, from, next) => {
  try {
    const requireAuth = to.matched.some(record => record?.meta.auth);
    if (requireAuth) {
      const response = await instance.get('api/users');
      if (response.status == 200) {
        return next();
      } else if (response.status == 401) {
        return next('/login');
      }
    }
    return next();
  } catch (error) {
    console.log(error.message);
    return next('/login');
  }
});

export default router;