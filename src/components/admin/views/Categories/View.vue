<template>
  <div>
    <b-badge>{{msg}}</b-badge>
    <b-button :to="{name: 'addCategory'}">Add</b-button>
    <b-table responsive hover :items="categories" :fields="fields">
      <template slot="action" slot-scope="data">
        <b-button :to="{ name: 'editCategory', params: { id: data.item._id } }">Edit</b-button>
        <b-button @click="deleteCategory(data.item._id)">Delete</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import CategoryService from '@/services/CategoryService';
export default {
  name: 'Categories',
  data () {
    return {
      categories: [],
      fields: ['name', 'show', 'action'],
      msg: 'Welcome to categories'
    }
  },
  mounted () {
    this.getCategories()
  },
  methods: {
    async getCategories(){
      const response = await CategoryService.getCategories();
      this.categories = response.data;
    },
    async deleteCategory(id){
      await CategoryService.deleteCategory(id);
      this.getCategories();
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
