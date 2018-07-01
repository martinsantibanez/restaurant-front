<template>
  <div>
    <b-badge>{{msg}}</b-badge>
    <b-table responsive hover :items="categories" :fields="fields">
      <template slot="action" slot-scope="data">
        <b-button :to="{ name:'productsInCategory', params: { id: data.item._id } }">Products</b-button>
        <b-button :to="{ name: 'editCategory', params: { id: data.item._id } }">Edit</b-button>
        <b-button @click="deleteCategory(data.item._id)">Delete</b-button>
      </template>
    </b-table>
    <b-button :to="{name: 'addCategory'}" variant="success">Add</b-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapState } from 'vuex';
export default {
  name: 'Categories',
  data () {
    return {
      fields: ['name', 'show', 'action'],
      msg: 'Welcome to categories'
    }
  },
  computed: mapState('categories', {
    categories: state => state.list
  }),
  created () {
    this.getCategories();
  },
  methods: {
    ...mapActions('categories', ['getCategories', 'deleteCategory'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
