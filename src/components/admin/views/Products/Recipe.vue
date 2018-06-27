<template>
  <div>
    <h2>Recipe for {{ product.name }} </h2>
    <b-badge>{{msg}}</b-badge>
    <b-table responsive hover :items="product.recipe" :fields="tableFields">
      <template slot="quantity" slot-scope="data">
        {{ data.item.quantity }} {{ data.item.ingredient.unit }}
      </template>
      <template slot="action" slot-scope="data">
        <b-button @click="removeIngredient(data.item._id)">Remove</b-button>
      </template>
      <template slot="bottom-row" slot-scope="data">
        <td>
          <!-- TODO: place select here; handle overflow-y -->
        </td>
      </template>
    </b-table>
    <b-form-group>
      <b-input-group prepend="Add:">
        <v-select label="name" :options="ingredients" @search:focus="getIngredients" v-model="selected"></v-select>
        <b-button @click="addIngredient" variant="success" slot="append">
          <i class="fa fa-plus fa"></i>
        </b-button>
      </b-input-group>
      <b-input-group v-if="selected" :append="selected.unit">
        <b-form-input id="quantityAdd" type="number" v-model="quantityAdd" placeholder="amount"></b-form-input>
      </b-input-group>
    </b-form-group>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'ProductsInCategory',
  data () {
    return {
      selected: null,
      product: {},
      ingredients: [],
      tableFields: ['ingredient.name', 'quantity', 'action'],
      quantityAdd: 0,
      msg: 'Recipe for product'
    }
  },
  mounted () {
    this.getProduct();
  },
  methods: {
    /*async getProduct(){
      const response = await ProductService.getProduct({
        id: this.$route.params.id
      });
      this.product = response.data;
    },
    async getIngredients(){
      const response = await IngredientService.getIngredients();
      this.ingredients = _.differenceBy(response.data, this.product.recipe.map(i => i.ingredient), '_id');
    },
    async addIngredient () {
      await ProductService.addIngredient({
        product_id: this.$route.params.id,
        ingredient: this.selected._id,
        quantity: this.quantityAdd
      });
      this.selected = null;
      this.quantityAdd = 0;
      this.getProduct();
    },
    async removeIngredient(id){
      await ProductService.removeIngredient({
        product_id: this.$route.params.id,
        element_id: id
      });
      this.getProduct();
    }*/
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.b-table-bottom-row td{
  border: none;
}
tr.b-table-bottom-row:hover{
  background-color: inherit !important;
}
</style>
