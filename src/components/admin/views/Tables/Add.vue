<template>
  <div>
    <h1 class="text-center">Add Table</h1>
    <b-form @submit="submitForm">
      <b-form-group label="Number:" label-for="number">
        <b-form-input id="number" type="number" v-model="newTable.number" required></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Add</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'AddTable',
  data () {
    return {
      newTable: {
        number: 0
      }
    }
  },
  methods: {
    ...mapActions('tables', ['addTable']),
    async submitForm(){
      try {
        await this.addTable(this.newTable);
        this.$router.push({name: 'Tables'});
      } catch(e) {
        console.log(e);
      }
    }
  }
}
</script>
<style type="text/css">

</style>