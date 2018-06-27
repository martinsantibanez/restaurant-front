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
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Ingredients',
  data () {
    return {
      fields: ['name', 'stock', 'action'],
      msg: 'Welcome to ingredients'
    }
  },
  computed: mapState('ingredients', {
    ingredients: state => state.list
  }),
  created(){
    this.getIngredients();
  },
  methods: {
    ...mapActions('ingredients', ['deleteIngredient', 'getIngredients']),

  }
}
</script>

<style>

</style>
