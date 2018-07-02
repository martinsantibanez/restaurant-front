<template>
  <div>
    <b-badge>{{msg}}</b-badge>
    <b-table responsive hover :items="tables" :fields="fields">
      <template slot="action" slot-scope="data">
        <b-button :to="{ name: 'editTable', params: { id: data.item._id } }">Edit</b-button>
        <b-button @click="deleteTable(data.item._id)">Delete</b-button>
      </template>
    </b-table>
    <b-button :to="{name: 'addTable'}" variant="success">Add</b-button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Tables',
  data () {
    return {
      fields: ['number', 'status', 'waiter.name', 'action'],
      msg: 'Welcome to tables'
    }
  },
  computed: mapState('tables', {
    tables: state => state.list
  }),
  created(){
    this.getTables();
  },
  methods: {
    ...mapActions('tables', ['deleteTable', 'getTables']),

  }
}
</script>

<style>

</style>
