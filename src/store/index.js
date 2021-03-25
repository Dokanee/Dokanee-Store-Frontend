import Vue from 'vue'
import Vuex from 'vuex'
// import info from './modules/info';
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    info: "",
    template: ""
  },
  getters: {
    storeInfo: state => state.info,
    templateInfo: state => state.template
  },
  mutations: {
    setStoreInfo(state, payload) {
      state.info = payload;
    },
    setTemplateInfo(state, payload) {
      state.template = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
