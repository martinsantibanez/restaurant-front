import axios from 'axios';
import config from '@/helpers/config';

const state = {
  token: init
}

const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  resetToken(state) {
    state.token = '';
  }
}

export default {
  state, mutations
}