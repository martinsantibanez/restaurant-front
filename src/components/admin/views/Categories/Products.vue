<template>
  <div>
    <h2> Products in {{ category.name }} </h2>
    <b-badge>{{msg}}</b-badge>
    <b-table responsive hover :items="products" :fields="tableFields">
      <template slot="bottom-row" slot-scope="data">
        <td class="first">
          <b-button :to="{name: 'addCategory'}" variant="success">
            <i class="fa fa-plus fa"></i>
          </b-button>
        </td>
      </template>
    </b-table>
  </div>
</template>

<script>
import CategoryService from '@/services/CategoryService';
export default {
  name: 'ProductsInCategory',
  data () {
    return {
      category: {},
      products: [],
      tableFields: [{key: 'first', label: '', class: 'first'}, 'name', 'price', 'description'],
      msg: 'Products in category'
    }
  },
  mounted () {
    this.getCategory().then(()=>{
      console.log(this.category);
      this.products = this.category.products;
    });
  },
  methods: {
    async getCategory(){
      const response = await CategoryService.getCategory({
        id: this.$route.params.id
      });
      this.category = response.data;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
table{
  table-layout: fixed;
}

th.first, td.first{
  text-align: center;
  padding: 0;
  width: 2vw;
  border: none;
}
.table thead th.first{
  border: none;
}
.table th{
  border: none;
}
</style>
