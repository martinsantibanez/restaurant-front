import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import adminRoutes from '@/components/admin/router.js';
import Login from '@/components/Login';
import User from '@/components/User';
import guards from '@/utils/guards';
import store from '@/store';

Vue.use(Router);
const baseRoutes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: guards.notLoggedIn
  },
  {
    path: '/user',
    name: 'User',
    component: User
  }
];
const routes = baseRoutes.concat(adminRoutes);
const router = new Router({
  routes,
});


export default router;
