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
                  label="Username">
          <b-form-input id="email" v-model.trim="user.email"></b-form-input>
        </b-form-group>
        <b-form-group
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Password">
          <b-form-input type="password" id="password" v-model.trim="user.password"></b-form-input>
        </b-form-group>
        <b-form-group
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="First Name">
          <b-form-input type="text" id="firstName" v-model.trim="user.firstName"></b-form-input>
        </b-form-group>
        <b-form-group
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Last Name">
          <b-form-input type="text" id="lastName" v-model.trim="user.lastName"></b-form-input>
        </b-form-group>
        <b-form-group
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Role">
          <b-form-input type="text" id="role" v-model.trim="user.role"></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Add</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  data () {
    return {
      user: {},
      errors: []
    }
  },
  methods: {
    ...mapActions('users', ['addUser']),
    async onSubmit (evt) {
      evt.preventDefault()
      try {
        await this.addUser(this.user);
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