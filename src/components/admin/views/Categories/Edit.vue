<template>
  <div>
    <h1>Edit Category <b-badge>{{selectedCategory.name}}</b-badge></h1>
    <b-form @submit="submitForm">
      <b-form-group label="Name:" label-for="name">
        <b-form-input id="name" type="text" v-model="selectedCategory.name" required></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-checkbox id="show" v-model="selectedCategory.show" value="true" unchecked-value="false">
          Show
        </b-form-checkbox>
      </b-form-group>
      <b-button type="submit" variant="primary">Save changes</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'EditCategory',
  props: ['id'],
  data () {
    return {}
  },
  computed: mapState('categories', {
    selectedCategory: state => state.category
  }),
  created() {
    this.getCategoryById(this.id);
  },
  methods: {
    ...mapActions('categories', ['editCategory', 'getCategoryById']),
    async submitForm(){
      try {
        await this.editCategory(this.selectedCategory);
        this.$router.push({ name: 'Categories' });
      } catch(e) {
        console.log(e);
      }
    }    
  }
}
</script>

<style>

</style>
