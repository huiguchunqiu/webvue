import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: false,
    userinfo: {}
  },
  getters: {
    login(state) {
      return state.login;
    },
    userinfo(state) {
      return state.userinfo;
    }
  },
  mutations: {
    changeLogin(state, result) {
      console.log("233", result);
      state.login = result;
    },
    setUserinfo(state, result) {
      state.userinfo = result;
    }
  },
  actions: {},
  modules: {}
});
