<template>
  <div>
    <b-badge>{{msg}}</b-badge>
    <b-table responsive hover :items="products" :fields="fields">
      <template slot="action" slot-scope="data">
        <b-button :to="{ name:'productRecipe', params: { id: data.item._id } }">Recipe</b-button>
        <b-button :to="{ name: 'editProduct', params: { id: data.item._id } }">Edit</b-button>
        <b-button @click="deleteProduct(data.item._id)">Delete</b-button>
      </template>
    </b-table>
    <b-button :to="{name: 'addProduct'}" variant="success">Add</b-button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'Products',
  data () {
    return {
      fields: ['name', 'price', {key: 'description', class: 'description'}, 'action'],
      msg: 'Welcome to products'
    }
  },
  computed: mapState('products', {
    products: state => state.list
  }),
  created () {
    this.getProducts();
  },
  methods: {
    ...mapActions('products', ['getProducts', 'deleteProduct']),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.description{
  max-width: 20vw;
}
</style>
