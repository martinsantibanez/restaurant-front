import Api from '@/services/Api';

export default {
  namespaced: true,
  state: {
    list: [],
    category: {}
  },
  getters: {

  },
  mutations: {
    setAllCategories(state, category){
      state.list = category;
    },
    setCategory(state, category){
      state.category = category;
    }
  },
  actions: {
    async getCategories({commit}){
      var response = await Api().get('categories');
      commit('setAllCategories', response.data);
    },
    async addCategory({commit}, newCategory){
      await Api().post('categories', newCategory);
    },
    async getCategoryById({commit}, id){
      var response = await Api().get('categories/'+id);
      commit('setCategory', response.data);
    },
    async editCategory({commit}, editedCategory){
      await Api().put('categories/'+editedCategory._id, editedCategory);
    },
    async deleteCategory({commit, dispatch}, id){
      await Api().delete('categories/'+id);
      dispatch('getCategories');
    }
  }
}