<template>
  <div>
    <h1>Edit Product</h1>
    <b-form @submit="editProduct">
      <b-form-group label="Name:" label-for="name">
        <b-form-input id="name" type="text" v-model="name" required></b-form-input>
      </b-form-group>
      <b-form-group label="Price:" label-for="price">
        <b-input-group prepend="$">

        <b-form-input id="price" type="number" v-model="price"></b-form-input>
        </b-input-group>
      </b-form-group>
      <b-form-group label="Description:" label-for="description">
        <b-form-textarea id="description"
                  v-model="description"
                  :rows="3"
                  :max-rows="6">
        </b-form-textarea>
      </b-form-group>
      <b-button type="submit" variant="primary">Edit</b-button>
    </b-form>
  </div>
</template>

<script>
import ProductService from '@/services/ProductService';
export default {
  name: 'AddProduct',
  data () {
    return {
      name: '',
      price: 0,
      description: ''
    }
  },
  mounted() {
    this.getProduct();
  },
  methods: {
    async getProduct(){
      const response = await ProductService.getProduct({id: this.$route.params.id});
      this.name = response.data.name;
      this.price = response.data.price;
      this.description = response.data.description;
    },
    async editProduct(){
      await ProductService.editProduct({
        id: this.$route.params.id,
        name: this.name,
        price: this.price,
        description: this.description
      })
      .then(() => this.$router.push({ name: 'Products' }), e => console.log(e)); 
    }
  }
}
</script>
<style type="text/css">

</style>