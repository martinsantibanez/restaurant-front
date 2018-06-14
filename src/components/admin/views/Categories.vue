<template>
  <div class="hello">
    <b-badge>{{msg}}</b-badge>
    <ul>
      <li v-for="category in categories" :key="category.id">
        {{category.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import CategoryService from '@/services/CategoryService';
export default {
  name: 'HelloWorld',
  data () {
    return {
      categories: [],
      msg: 'Welcome to categories'
    }
  },
  mounted () {
    this.getCategories()
  },
  methods: {
    async getCategories(){
      const response = await CategoryService.getCategories();
      this.categories = response.data;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
