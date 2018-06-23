import Api from './Api';
//TODO documentar
export default {
  getCategory(params) {
    return Api().get('categories/'+params.id)
  },
  getProducts(params) {
    return Api().get('categories/'+params.id+'/products')
  },
  getCategories () {
    return Api().get('categories');
  },
  addCategory(params) {
    return Api().post('categories', params);
  },
  editCategory(params){
    return Api().put('categories/'+params.id, params);
  },
  deleteCategory(params){
    return Api().delete('categories/'+params.id);
  },
  /**
   * Add product to category
   * @param {category_id: id, product_id: id} params 
   */
  addProduct(params){
    return Api().post('categories/'+params.category_id+'/products', { id: params.product_id })
  },
  /**
   * Remove product from category
   * @param {category_id: id, product_id: id} params 
   */
  removeProduct(params){
    return Api().delete('categories/'+params.category_id+'/products/'+params.product_id);
  },
};