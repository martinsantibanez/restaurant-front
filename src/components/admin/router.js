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
import AddIngredient from './views/Ingredients/Add';
import EditIngredient from './views/Ingredients/Edit';

import ViewUsers from './views/Users/List';
import EditUser from './views/Users/Edit';
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
        component: DashboardView,
        redirect: { name: 'Categories' }
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
        component: EditCategory,
        props: true
      },
      {
        path: 'categories/:id/products',
        name: 'productsInCategory',
        component: ProductsInCategory,
        props: true
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
        component: EditProduct,
        props: true
      },
      {
        path: 'products/:id/recipe',
        name:'productRecipe',
        component: ProductRecipe,
        props: true
      },
      {
        path: 'ingredients',
        name: 'Ingredients',
        component: ViewIngredients
      },
      {
        path: 'ingredients/add',
        name: 'addIngredient',
        component: AddIngredient
      },
      {
        path: 'ingredients/:id/edit',
        name: 'editIngredient',
        component: EditIngredient,
        props: true
      },
      {
        path: 'users',
        name: 'Users',
        component: ViewUsers
      },
      {
        path: 'users/:id/edit',
        name: 'editUser',
        component: EditUser,
        props: true
      }
    ],
    redirect: {name: 'Dashboard'}
  },
];