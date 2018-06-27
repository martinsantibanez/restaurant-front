<template>
  <div>
    <h1 class="text-center">Add Ingredient</h1>
    <b-form @submit="submitForm">
      <b-form-group label="Name:" label-for="name">
        <b-form-input id="name" type="text" v-model="newIngredient.name" required></b-form-input>
      </b-form-group>
      <b-form-group label="Stock:" label-for="stock">
        <b-input-group>
          <b-form-input id="stock" type="number" v-model="newIngredient.stock" placeholder="amount"></b-form-input>
          <b-form-input slot="append" placeholder="measurement unit" v-model="newIngredient.unit"></b-form-input>
        </b-input-group>
      </b-form-group>
      <b-button type="submit" variant="primary">Add</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'AddIngredient',
  data () {
    return {
      newIngredient: {
        name: '',
        stock: 0,
        unit: ''
      }
    }
  },
  methods: {
    ...mapActions('ingredients', ['addIngredient']),
    async submitForm(){
      try {
        await this.addIngredient(this.newIngredient);
        this.$router.push({name: 'Ingredients'});
      } catch(e) {
        console.log(e);
      }
    }
  }
}
</script>
<style type="text/css">

</style>