<template>
  <div>
    <b-badge>{{msg}}</b-badge>
    <b-table responsive hover :items="ingredients" :fields="fields">
      <template slot="stock" slot-scope="data">
        {{ data.item.stock }} {{ data.item.unit }}
      </template>
      <template slot="action" slot-scope="data">
        <b-button :to="{ name: 'editIngredient', params: { id: data.item._id } }">Edit</b-button>
        <b-button @click="deleteIngredient(data.item._id)">Delete</b-button>
      </template>
    </b-table>
    <b-button :to="{name: 'addIngredient'}" variant="success">Add</b-button>
  </div>
</template>

<script>
import IngredientService from '@/services/IngredientService';
export default {
  name: 'Ingredients',
  data () {
    return {
      ingredients: [],
      fields: ['name', 'stock', 'action'],
      msg: 'Welcome to ingredients'
    }
  },
  mounted () {
    this.getIngredients()
  },
  methods: {
    async getIngredients(){
      const response = await IngredientService.getIngredients();
      this.ingredients = response.data;
    },
    async deleteIngredient(id){
      await IngredientService.deleteIngredient({id: id});
      this.getIngredients();
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
