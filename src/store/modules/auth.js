import Api from '@/services/Api';

export default {
  namespaced: true,
  state: {
    token: ''
  },
  getters: {
    token(state) {
      return state.token;
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    resetToken(state) {
      state.token = '';
    }
  },
  actions: {
    async login({commit}, user){
      const response = await Api().post('http://localhost:3000/api/login/', user);
      commit('setToken', response.data.token);
    },
    logout({commit}) {
      commit('resetToken');
    }
  }
}