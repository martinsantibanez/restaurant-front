import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import adminRoutes from '@/components/admin/router.js';
import Login from '@/components/Login';

Vue.use(Router);
const baseRoutes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
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
