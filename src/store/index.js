import Vue from 'vue';
import Vuex from 'vuex';

// import auth from './modules/auth';
import ingredients from './modules/ingredients';
import categories from './modules/categories';
import products from './modules/products';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: { ingredients: ingredients, categories: categories, products: products }
  // modules: { auth, ingredients }
});