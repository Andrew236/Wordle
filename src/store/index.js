import Vue from "vue";
import Vuex from "vuex";
import * as application from "@/store/application.js";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    application,
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {},
});
