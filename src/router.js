import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import adminRoutes from '@/components/admin/router.js';
import Login from '@/components/Login';

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
    component: Login
  }
];
const routes = baseRoutes.concat(adminRoutes);

export default new Router({
  routes,
});
