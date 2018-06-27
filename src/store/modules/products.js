import Api from '@/services/Api';

export default {
  namespaced: true,
  state: {
    list: [],
    product: {}
  },
  getters: {

  },
  mutations: {
    setAllProducts(state, products){
      state.list = products;
    },
    setProduct(state, product){
      state.product = product;
    }
  },
  actions: {
    async getProducts({commit}){
      var response = await Api().get('products');
      commit('setAllProducts', response.data);
    },
    async addProduct({commit}, newProduct){
      await Api().post('products', newProduct);
    },
    async getProductById({commit}, id){
      var response = await Api().get('products/'+id);
      commit('setProduct', response.data);
    },
    async editProduct({commit}, editedProduct){
      await Api().put('products/'+editedProduct._id, editedProduct);
    },
    async deleteProduct({commit, dispatch}, id){
      await Api().delete('products/'+id);
      dispatch('getProducts');
    }
  }
}