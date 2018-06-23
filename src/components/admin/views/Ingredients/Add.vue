<template>
  <b-col sm="6">
    <h1 class="text-center">Add Ingredient</h1>
    <b-form @submit="addIngredient">
      <b-form-group label="Name:" label-for="name">
        <b-form-input id="name" type="text" v-model="name" required></b-form-input>
      </b-form-group>
      <b-form-group label="Stock:" label-for="stock">
        <b-input-group>
          <b-form-input id="stock" type="number" v-model="stock" placeholder="amount"></b-form-input>
          <b-form-input slot="append" placeholder="measurement unit" v-model="unit"></b-form-input>
        </b-input-group>
      </b-form-group>
      <b-button type="submit" variant="primary">Add</b-button>
    </b-form>
  </b-col>
</template>

<script>
import IngredientService from '@/services/IngredientService';
export default {
  name: 'AddIngredient',
  data () {
    return {
      name: '',
      stock: 0,
      unit: ''
    }
  },
  methods: {
    async addIngredient(){
      await IngredientService.addIngredient({
        name: this.name,
        stock: this.stock,
        unit: this.unit
      })
      .then(() => this.$router.push({ name: 'Ingredients' }), e => console.log(e)); 
    }
  }
}
</script>
<style type="text/css">

</style>