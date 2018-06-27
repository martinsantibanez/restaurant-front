<template>
  <div>
    <h2> Products in {{ category.name }} </h2>
    <b-badge>{{msg}}</b-badge>
    <b-table responsive hover :items="category.products" :fields="tableFields">
      <template slot="action" slot-scope="data">
        <b-button @click="removeProductFromCategory(data.item._id)">Remove</b-button>
      </template>
      <template slot="bottom-row" slot-scope="data">
        <td>
          <!-- TODO: place select here; handle overflow-y -->
        </td>
      </template>
    </b-table>
    <b-input-group prepend="Add:">
      <v-select label="name" :options="availableProducts" v-model="selected"></v-select>
      <b-button @click="addProduct()" variant="success" slot="append">
        <i class="fa fa-plus fa"></i>
      </b-button>
    </b-input-group>
  </div>
</template>

<script>

import _ from 'lodash';
import { mapActions, mapState, mapGetters } from 'vuex';

export default {
  name: 'ProductsInCategory',
  props: ['id'],
  data () {
    return {
      selected: null,
      tableFields: ['name', 'price', 'description', 'action'],
      msg: 'Products in category'
    }
  },
  computed: {
    ...mapState('categories', ['category']),
    ...mapGetters('categories', ['availableProducts'])
  },
  created () {
    this.getCategoryById(this.id);
    this.getProducts();
  },
  methods: {
    ...mapActions('categories', ['getCategoryById', 'removeProductFromCategory', 'addProductToCategory']),
    ...mapActions('products', ['getProducts']),
    async addProduct(){
      await this.addProductToCategory(this.selected._id);
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
