import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    status: false
  },
  mutations: {
    onAuthStateChanged(state, user) {
      state.user = user;
    },
    onUserStatusChanged(state, status) {
      state.status = status;
    }
  },
  getters: {
    user(state) {
      return state.user;
    },
    isSignedIn(state) {
      return state.status;
    }
  }
});
