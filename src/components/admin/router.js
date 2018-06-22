import AdminLayout from './views/common/Layout';
import DashboardView from './views/Dashboard';
import ViewCategories from './views/Categories/List';
import EditCategory from './views/Categories/Edit';
import AddCategory from './views/Categories/Add';
import ViewProducts from './views/Products/List';
import ViewIngredients from './views/Ingredients/List';
import ProductsInCategory from './views/Categories/Products';

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
        path: 'categories/:id/products',
        name: 'productsInCategory',
        component: ProductsInCategory
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
    redirect: {name: 'Dashboard'}
  },
];