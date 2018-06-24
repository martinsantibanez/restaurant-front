<template>
  <div>
    <h2> Products in {{ category.name }} </h2>
    <b-badge>{{msg}}</b-badge>
    <b-table responsive hover :items="category.products" :fields="tableFields">
      <template slot="action" slot-scope="data">
        <b-button @click="removeProduct(data.item._id)">Remove</b-button>
      </template>
      <template slot="bottom-row" slot-scope="data">
        <td>
          <!-- TODO: place select here; handle overflow-y -->
        </td>
      </template>
    </b-table>
    <b-input-group prepend="Add:">
      <v-select label="name" :options="products" @search:focus="getProducts" v-model="selected"></v-select>
      <b-button @click="addProduct" variant="success" slot="append">
        <i class="fa fa-plus fa"></i>
      </b-button>
    </b-input-group>
  </div>
</template>

<script>
import CategoryService from '@/services/CategoryService';
import ProductService from '@/services/ProductService';
import _ from 'lodash';

export default {
  name: 'ProductsInCategory',
  data () {
    return {
      selected: null,
      category: {},
      products: [],
      tableFields: ['name', 'price', 'description', 'action'],
      msg: 'Products in category'
    }
  },
  mounted () {
    this.getCategory();
  },
  methods: {
    async getCategory(){
      const response = await CategoryService.getCategory({
        id: this.$route.params.id
      });
      this.category = response.data;
    },
    async getProducts(){
      const response = await ProductService.getProducts();
      this.products = _.differenceBy(response.data, this.category.products, '_id');
    },
    async addProduct () {
      await CategoryService.addProduct({
        category_id: this.$route.params.id,
        product_id: this.selected._id
      });
      this.selected = null;
      this.getCategory();
      // this.$router.push({ name: 'Categories' })
    },
    async removeProduct(id){
      await CategoryService.removeProduct({
        category_id: this.$route.params.id,
        product_id: id
      });
      this.getCategory();
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
