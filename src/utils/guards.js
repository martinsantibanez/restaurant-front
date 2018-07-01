import store from '@/store';

const isAdmin = (to, from, next) => {
  if(store.getters['auth/role'] != "admin"){
    next({name: 'Login'});
    return;
  }
  next();
}

const notLoggedIn = (to, from, next) => {
  if(store.getters['auth/isAuthenticated']) {
    next({
      path: '/'
    });
  } else {
    next();
  }
}

export default {
  isAdmin,
  notLoggedIn
}