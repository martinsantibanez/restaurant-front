import Vue from 'vue';
import Vuex from 'vuex';

// import auth from './modules/auth';
import ingredients from './modules/ingredients';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: { ingredients: ingredients }
  // modules: { auth, ingredients }
});