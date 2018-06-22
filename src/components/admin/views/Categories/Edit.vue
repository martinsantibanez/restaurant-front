<template>
  <div>
    <h1>Edit Category</h1>
    <b-form @submit="editCategory">
      <b-form-group label="Name:" label-for="name">
        <b-form-input id="name" type="text" v-model="name" required></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-checkbox id="show" v-model="show" value="true" unchecked-value="false">
          Show
        </b-form-checkbox>
      </b-form-group>
      <b-button type="submit" variant="primary">Save changes</b-button>
    </b-form>
  </div>
</template>

<script>
import CategoryService from '@/services/CategoryService';
export default {
  name: 'EditCategory',
  data () {
    return {
      name: '',
      show: true
    }
  },
  mounted () {
    this.getCategory()
  },
  methods: {
    async getCategory(){
      const response = await CategoryService.getCategory({
        id: this.$route.params.id
      })
      this.name = response.data.name
      this.show = response.data.show
    },
    async editCategory(){
      await CategoryService.editCategory({
        id: this.$route.params.id,
        name: this.name,
        show: this.show
      })
      .then(() => this.$router.push({ name: 'Categories' }), e => console.log(e));
      // .catch(e => console.log(e));
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
