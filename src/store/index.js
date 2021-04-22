import Vue from 'vue'
import Vuex from 'vuex'
// import info from './modules/info';
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    info: "",
    template: "",
    cart: [],
  },
  getters: {
    storeInfo: state => state.info,
    templateInfo: state => state.template,
    cart: state => state.cart
  },
  mutations: {
    setStoreInfo(state, payload) {
      state.info = payload;
    },
    setTemplateInfo(state, payload) {
      state.template = payload;
    },
    addToCart(state, {product,quantity}) {
      let productInCart = state.cart.find( item => {
        return item.product.slug == product.slug;
      });
      if(productInCart)
        return productInCart.quantity += quantity;
      else
       state.cart.push({product,quantity});
    }
  },
  actions: {
    addProductToCart({commit},{product,quantity}){
      commit('addToCart', {product,quantity});
    }
  },
  modules: {
  }
})
