<template>
  <div>
    <h1 class="text-center">Edit Table</h1>
    <b-form @submit.prevent="submitForm">
      <b-form-group label="Number:" label-for="number">
        <b-form-input id="number" type="number" v-model="selectedTable.number" required></b-form-input>
      </b-form-group>
      <b-form-group label="Status">
        <b-form-radio-group id="status"
                            buttons
                            button-variant="outline-primary"
                            v-model="selectedTable.status"
                            @input="statusChange"
                            :options="options" />
      </b-form-group>
      <b-form-group label="Waiter">
        <v-select label="name" :options="usersWithTables" v-model="selectedTable.waiter" :disabled="selectedTable.status == 'AVAILABLE'">
          <template slot="option" slot-scope="option">
            <span :class="option.icon"></span>
            {{ option.name }} (Taken tables: {{option.tables.length}})
          </template>
        </v-select>
      </b-form-group>
      <b-button type="submit" variant="primary">Edit</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
export default {
  name: 'EditTable',
  props: ['id'],
  data () {
    return {
      disabled: true,
      options: ['AVAILABLE', 'OPEN', 'BILLED']
    }
  },
  computed: {
    ...mapState('tables', {
      selectedTable: state => state.table
    }),
    ...mapGetters('tables', ['usersWithTables'])
  },
  created(){
    this.getUsers();
    this.getTableById(this.id);
  },
  methods: {
    ...mapActions('tables', ['editTable', 'getTableById']),
    ...mapActions('users', ['getUsers']),
    async submitForm(e){
      try{
        await this.editTable(this.selectedTable);
        this.$router.push({name: 'Tables'});
      } catch (e) {
        console.log(e);
      }
    },
    statusChange(e){
      if(e=="AVAILABLE"){
        this.selectedTable.waiter = null;
      }
    }
  }
}
</script>
<style type="text/css">

</style>