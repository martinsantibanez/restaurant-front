import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import adminRoutes from '@/components/admin/router.js';

Vue.use(Router);
const baseRoutes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
];
const routes = baseRoutes.concat(adminRoutes);

export default new Router({
  routes,
});
