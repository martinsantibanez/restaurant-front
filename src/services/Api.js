import axios from 'axios';
import store from '../store';
//TODO: Bearer from store
export default () => {
  return axios.create({
    baseURL: 'http://localhost:3000/api/',
    headers: {'Authorization': "Bearer " + localStorage.getItem('jwtToken')}
  });
};