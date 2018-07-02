import Api from '@/utils/Api';
import VueJwtDecode from 'vue-jwt-decode'

//TODO save in localstorage
export default {
  namespaced: true,
  state: {
    token: localStorage.getItem('user-token') || '',
    user: JSON.parse(localStorage.getItem('user')) || {}
  },
  getters: {
    isAuthenticated: state => !!state.token,
    role: state => state.user.role,
    token(state) {
      return state.token;
    }
  },
  mutations: {
    setToken(state, payload) {
      localStorage.setItem('user-token', payload.token);
      localStorage.setItem('user', JSON.stringify(payload.user));
      state.token = payload.token;
      state.user = payload.user;
    },
    resetToken(state) {
      localStorage.removeItem('user-token'); 
      localStorage.removeItem('user'); 
      state.token = '';
      state.user = {};
    }
  },
  actions: {
    async login({commit}, user){
      try {
        const response = await Api().post('http://localhost:3000/api/login/', user);
        const token = response.data.token;
        const tokenUser = VueJwtDecode.decode(token).user;
        commit('setToken', {'token': token, 'user': tokenUser});
        return tokenUser.role;
      } catch(e) {
        console.log(e);
      }
    },
    logout({commit}) {
      commit('resetToken');
    }
  }
}