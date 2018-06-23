<template>
  <b-col sm="12" md="6">
    <h1 class="text-center">Edit Ingredient {{name}}</h1>
    <b-form @submit="editIngredient">
      <b-form-group label="Name:" label-for="name">
        <b-form-input id="name" type="text" v-model="name" required></b-form-input>
      </b-form-group>
      <b-form-group label="Stock:" label-for="stock">
        <b-input-group>
          <b-form-input id="stock" type="number" v-model="stock" placeholder="amount"></b-form-input>
          <b-form-input slot="append" placeholder="measurement unit" v-model="unit"></b-form-input>
        </b-input-group>
      </b-form-group>
      <b-button type="submit" variant="primary">Edit</b-button>
    </b-form>
  </b-col>
</template>

<script>
import IngredientService from '@/services/IngredientService';
export default {
  name: 'EditIngredient',
  data () {
    return {
      name: '',
      stock: 0,
      unit: ''
    }
  },
  mounted() {
    this.getIngredient();
  },
  methods: {
    async getIngredient(){
      const response = await IngredientService.getIngredient({id: this.$route.params.id});
      this.name = response.data.name;
      this.stock = response.data.stock;
      this.unit = response.data.unit;
    },
    async editIngredient(){
      await IngredientService.editIngredient({
        id: this.$route.params.id,
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