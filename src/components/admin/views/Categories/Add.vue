<template>
  <div>
    <h1>Add Category</h1>
    <b-form @submit="submitForm">
      <b-form-group label="Name:" label-for="name">
        <b-form-input id="name" type="text" v-model="newCategory.name" required></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-checkbox id="show" v-model="newCategory.show" value="true" unchecked-value="false">
          Show
        </b-form-checkbox>
      </b-form-group>
      <b-button type="submit" variant="primary">Add</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'AddCategory',
  data () {
    return {
      newCategory: {
        'name': '',
        'show': true
      }
    }
  },
  methods: {
    ...mapActions('categories', ['addCategory']),
    async submitForm(){
      try {
        await this.addCategory(this.newCategory);
        this.$router.push({name: 'Categories'});
      } catch(e) {
        console.log(e);
      }
    }
  }
}
</script>
<style type="text/css">

</style>