<template>
  <b-row class="justify-content-md-center">
    <b-col cols="6">
      <div v-if="errors && errors.length">
        <div v-for="error of errors" :key="error.message">
          <b-alert show>{{error.message}}</b-alert>
        </div>
      </div>
      <b-form @submit="onSubmit">
        <b-form-group
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Email">
          <b-form-input id="email" v-model.trim="user.email"></b-form-input>
        </b-form-group>
        <b-form-group
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Password">
          <b-form-input type="password" id="password" v-model.trim="user.password" placeholder="Leave blank if not changed"></b-form-input>
        </b-form-group>
        <b-form-group
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Name">
          <b-form-input type="text" id="name" v-model.trim="user.name"></b-form-input>
        </b-form-group>
        <b-form-group
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Role">
          <b-form-input type="text" id="role" v-model.trim="user.role"></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Edit</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Login',
  props: ['id'],
  data () {
    return {
      errors: []
    }
  },
  computed: mapState('users', {
    user: state => state.user
  }),
  created(){
    this.getUserById(this.id);
  },
  methods: {
    ...mapActions('users', ['editUser', 'getUserById']),
    async onSubmit (evt) {
      evt.preventDefault()
      try {
        await this.editUser(this.user);
        this.$router.push({
          name: 'Users'
        });
      } catch(e) {
        console.log(e)
        this.errors.push(e)
      }
    }
  }
}
</script>