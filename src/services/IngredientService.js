import Api from './Api';

//TODO documentar
export default {
  getIngredients () {
    return Api().get('ingredients');
  },
  getIngredient(params) {
    return Api().get('ingredients/'+params.id)
  },
  addIngredient(params) {
    return Api().post('ingredients', params);
  },
  editIngredient(params){
    return Api().put('ingredients/'+params.id, params);
  },
  deleteIngredient(params){
    return Api().delete('ingredients/'+params.id);
  }
};