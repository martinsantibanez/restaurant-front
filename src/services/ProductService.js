import Api from './Api';

//TODO documentar
export default {
  getProducts () {
    return Api().get('products');
  },
  getProduct(params) {
    return Api().get('products/'+params.id)
  },
  addProduct(params) {
    return Api().post('products', params);
  },
  editProduct(params){
    return Api().put('products/'+params.id, params);
  },
  deleteProduct(params){
    return Api().delete('products/'+params.id);
  }
};