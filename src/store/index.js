import Vue from 'vue';
import Vuex from 'vuex';

// import auth from './modules/auth';
import ingredients from './modules/ingredients';
import categories from './modules/categories';
import products from './modules/products';
import auth from './modules/auth';
import users from './modules/users';
import tables from './modules/tables';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: { 
    ingredients: ingredients,
    categories: categories,
    products: products,
    auth: auth,
    users: users,
    tables: tables
  }
});