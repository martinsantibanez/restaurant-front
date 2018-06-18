import AdminLayout from './views/common/Layout';
import DashboardView from './views/Dashboard';
import ViewCategories from './views/Categories/View';
import EditCategory from './views/Categories/Edit';
import AddCategory from './views/Categories/Add';
import ViewProducts from './views/Products/View';
import ViewIngredients from './views/Ingredients/View';

export default [
  {
    path: '/admin',
    name: 'Admin',
    component: AdminLayout,
    title: 'Admin',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: DashboardView
      },
      {
        path: 'categories',
        name: 'Categories',
        component: ViewCategories,
      },
      {
        path: 'categories/add',
        name: 'addCategory',
        component: AddCategory
      },
      {
        path: 'categories/:id/edit',
        name: 'editCategory',
        component: EditCategory
      },
      {
        path: 'products',
        name: 'Products',
        component: ViewProducts
      },
      {
        path: 'ingredients',
        name: 'Ingredients',
        component: ViewIngredients
      }
    ],
    redirect: {name: 'dashboard'}
  },
];