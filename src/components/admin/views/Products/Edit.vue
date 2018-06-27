<template>
  <div>
    <h1>Edit Product <b-badge>{{selectedProduct.name}}</b-badge></h1>
    <b-form @submit="submitForm">
      <b-form-group label="Name:" label-for="name">
        <b-form-input id="name" type="text" v-model="selectedProduct.name" required></b-form-input>
      </b-form-group>
      <b-form-group label="Price:" label-for="price">
        <b-input-group prepend="$">

        <b-form-input id="price" type="number" v-model="selectedProduct.price"></b-form-input>
        </b-input-group>
      </b-form-group>
      <b-form-group label="Description:" label-for="description">
        <b-form-textarea id="description"
                  v-model="selectedProduct.description"
                  :rows="3"
                  :max-rows="6">
        </b-form-textarea>
      </b-form-group>
      <b-button type="submit" variant="primary">Edit</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'EditProduct',
  props: ['id'],
  data () {
    return {
    }
  },
  computed: mapState('products', {
    selectedProduct: state => state.product
  }),
  created() {
    this.getProductById(this.id);
  },
  methods: {
    ...mapActions('products', ['getProductById','editProduct']),
    async submitForm(){
      try {
        await this.editProduct(this.selectedProduct);
        this.$router.push({ name: 'Products' })
      } catch(e) {
        console.log(e);
      }
    }
  }
}
</script>
<style type="text/css">

</style>