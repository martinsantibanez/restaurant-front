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
  },
  /**
   * Add an ingredient to the product's recipe
   * @param {product_id: id, ingredient: id, quantity: number} params 
   */
  addIngredient(params){
    return Api().post('products/'+params.product_id+'/recipe/', params);
  },
  /**
   * Remove given element from a product's recipe
   * @param {product_id: id, element_id: id} params 
   */
  removeIngredient(params){
    return Api().delete('products/'+params.product_id+'/recipe/'+params.element_id);
  }
};