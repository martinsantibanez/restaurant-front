<template>
  <div>
    <h1>Add Product</h1>
    <b-form @submit="submitForm">
      <b-form-group label="Name:" label-for="name">
        <b-form-input id="name" type="text" v-model="newProduct.name" required></b-form-input>
      </b-form-group>
      <b-form-group label="Price:" label-for="price">
        <b-input-group prepend="$">

        <b-form-input id="price" type="number" v-model="newProduct.price"></b-form-input>
        </b-input-group>
      </b-form-group>
      <b-form-group label="Description:" label-for="description">
        <b-form-textarea id="description"
                  v-model="newProduct.description"
                  :rows="3"
                  :max-rows="6">
        </b-form-textarea>
      </b-form-group>
      <b-button type="submit" variant="primary">Add</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AddProduct',
  data () {
    return {
      newProduct: {
        name: '',
        price: 0,
        description: ''
      }
    }
  },
  methods: {
    ...mapActions('products', ['addProduct']),
    async submitForm(){
      try {
        await this.addProduct(this.newProduct);
        this.$router.push({name: 'Products'})
      } catch(e) {
        console.log(e);
      }
    }
  }
}
</script>
<style type="text/css">

</style>