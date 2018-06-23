import AdminLayout from './views/common/Layout';
import DashboardView from './views/Dashboard';

import ViewCategories from './views/Categories/List';
import AddCategory from './views/Categories/Add';
import EditCategory from './views/Categories/Edit';
import ProductsInCategory from './views/Categories/Products';

import ViewProducts from './views/Products/List';
import AddProduct from './views/Products/Add';
import EditProduct from './views/Products/Edit';
import ProductRecipe from './views/Products/Recipe';

import ViewIngredients from './views/Ingredients/List';

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
        path: 'products/add',
        name: 'addProduct',
        component: AddProduct
      },
      {
        path: 'products/:id/edit',
        name: 'editProduct',
        component: EditProduct
      },
      {
        path: 'products/:id/recipe',
        name:'productRecipe',
        component: ProductRecipe
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