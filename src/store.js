import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    onAuthStateChanged(state, user) {
      state.user = user;
    }
  },
  getters: {
    user(state) {
      return state.user;
    }
  }
});
