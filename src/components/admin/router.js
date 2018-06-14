import AdminLayout from './views/common/Layout';
import CategoriesView from './views/Categories';
import DashboardView from './views/Dashboard';

export default [
  {
    path: '/admin',
    name: 'admin',
    component: AdminLayout,
    title: 'Admin',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: DashboardView
      },
      {
        path: 'categories',
        name: 'categories',
        component: CategoriesView
      },
    ],
    redirect: {name: 'dashboard'}
  },
];