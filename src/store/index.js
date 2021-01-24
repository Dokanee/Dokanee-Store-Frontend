import Vue from 'vue'
import Vuex from 'vuex'
// import info from './modules/info';
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    info: ""
  },
  getters: {
    storeInfo: state => state.info
  },
  mutations: {
    setStoreInfo(state, payload) {
      state.info = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
