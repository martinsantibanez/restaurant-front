import Api from './Api';

export default {
  getCategory(params) {
    return Api().get('categories/'+params.id)
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
  deleteCategory(id){
    return Api().delete('categories/'+id);
  }
};