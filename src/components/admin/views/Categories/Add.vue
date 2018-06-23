<template>
  <div>
    <h1>Add Category</h1>
    <b-form @submit="addCategory">
      <b-form-group label="Name:" label-for="name">
        <b-form-input id="name" type="text" v-model="name" required></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-checkbox id="show" v-model="show" value="true" unchecked-value="false">
          Show
        </b-form-checkbox>
      </b-form-group>
      <b-button type="submit" variant="primary">Add</b-button>
    </b-form>
  </div>
</template>

<script>
import CategoryService from '@/services/CategoryService';
export default {
  name: 'AddCategory',
  data () {
    return {
      name: '',
      show: true
    }
  },
  methods: {
    async addCategory(){
      await CategoryService.addCategory({
        name: this.name,
        show: this.show
      })
      .then(() => this.$router.push({ name: 'Categories' }), e => console.log(e)); 
    }
  }
}
</script>
<style type="text/css">

</style>