<template>
  <b-col sm="12" md="6">
    <h1 class="text-center">Edit Ingredient {{selectedIngredient.name}}</h1>
    <b-form @submit="submitForm">
    <!-- <b-form> -->
      <b-form-group label="Name:" label-for="name">
        <b-form-input id="name" type="text" v-model="selectedIngredient.name" required></b-form-input>
      </b-form-group>
      <b-form-group label="Stock:" label-for="stock">
        <b-input-group>
          <b-form-input id="stock" type="number" v-model="selectedIngredient.stock" placeholder="amount"></b-form-input>
          <b-form-input slot="append" placeholder="measurement unit" v-model="selectedIngredient.unit"></b-form-input>
        </b-input-group>
      </b-form-group>
      <b-button type="submit" variant="primary">Edit</b-button>
    </b-form>
  </b-col>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: 'EditIngredient',
  props: ['id'],
  data () {
    return {}
  },
  computed: mapState('ingredients', {
    selectedIngredient: state => state.ingredient
  }),
  created(){
    this.getIngredientById(this.id);
  },
  methods: {
    ...mapActions('ingredients', ['editIngredient', 'getIngredientById']),
    async submitForm(){
      try{
        await this.editIngredient(this.selectedIngredient);
        this.$router.push({name: 'Ingredients'});
      } catch (e) {
        console.log(e);
      }
    }
  }
}
</script>
<style type="text/css">

</style>