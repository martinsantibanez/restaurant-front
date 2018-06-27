import Api from '@/services/Api';
import _ from 'lodash';

export default {
  namespaced: true,
  state: {
    list: [],
    user: {}
  },
  getters: {
    user(state){
      return state.user;
    }
  },
  mutations: {
    setAllUsers(state, users){
      state.list = users;
    },
  },
  actions: {
    async getUsers({commit}){
      const response = await Api().get('users');
      commit('setAllUsers', response.data);
    },
/*    async addProduct({commit}, newProduct){
      await Api().post('products', newProduct);
    },
    async getProductById({commit}, id){
      const response = await Api().get('products/'+id);
      commit('setProduct', response.data);
    },
    async editProduct({commit}, editedProduct){
      await Api().put('products/'+editedProduct._id, editedProduct);
    },
    async deleteProduct({commit, dispatch}, id){
      await Api().delete('products/'+id);
      dispatch('getProducts');
    },
    async addIngredientToRecipe({commit, dispatch, state}, payload){
      const response = await Api().post('products/'+state.product._id+'/recipe', payload);
      // console.log(response.data);
      commit('setProduct', response.data);
    },
    async removeIngredientFromRecipe({commit, dispatch, state}, id){
      const response = await Api().delete('products/'+state.product._id+'/recipe/'+id);
      commit('setProduct', response.data);
    }*/
  }
}