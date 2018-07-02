<template>
  <div>
    <h2>Recipe for {{ product.name }} </h2>
    <b-badge>{{msg}}</b-badge>
    <b-table responsive hover :items="product.recipe" :fields="tableFields">
      <template slot="quantity" slot-scope="data">
        {{ data.item.quantity }} {{ data.item.ingredient.unit }}
      </template>
      <template slot="action" slot-scope="data">
        <b-button @click="removeIngredientFromRecipe(data.item._id)">Remove</b-button>
      </template>
      <template slot="bottom-row" slot-scope="data">
        <td>
          <!-- TODO: place select here; handle overflow-y -->
        </td>
      </template>
    </b-table>
    <b-form-group>
      <b-input-group prepend="Add:">
        <v-select label="name" :options="availableIngredients" v-model="selected"></v-select>
        <b-button @click="addIngredient" variant="success" slot="append">
        <!-- <b-button variant="success" slot="append"> -->
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
import { mapGetters, mapActions, mapState } from 'vuex';

export default {
  name: 'ProductsInCategory',
  props: ['id'],
  data () {
    return {
      selected: null,
      // product: {},
      // ingredients: [],
      tableFields: ['ingredient.name', 'quantity', 'action'],
      quantityAdd: 0,
      msg: 'Recipe for product'
    }
  },
  computed: {
    ...mapState('products', ['product']),
    ...mapGetters('products', ['availableIngredients'])
  },
  created() {
    this.getIngredients();
    this.getProductById(this.id);
  },
  methods: {
    ...mapActions('products', ['getProductById', 'addIngredientToRecipe', 'removeIngredientFromRecipe']),
    ...mapActions('ingredients', ['getIngredients']),
    async addIngredient() {
      let elem = { ingredient: this.selected._id, quantity: this.quantityAdd };
      await this.addIngredientToRecipe(elem);
      this.selected = null;
    }
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
