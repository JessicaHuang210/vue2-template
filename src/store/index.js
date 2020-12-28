import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import ws from "./ws";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { auth, ws }
});
