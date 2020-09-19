import Vue from 'vue'
import Vuex from 'vuex' 

Vue.use(Vuex)

import actionsClient from './actions/actions'
import apiActions from './actions/api-actions'
import mutations from './mutations/mutations'
import getters from './getters/getters'

const actions = {...actionsClient, ...apiActions}


export default new Vuex.Store({
  state: {
    products: [], 
    cart: []
  },
  mutations,
  actions ,
  getters, 
  modules: {
  }
})
