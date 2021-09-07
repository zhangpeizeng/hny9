import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userInfo: '' || JSON.parse(localStorage.getItem('userInfo')),
    token: '' || localStorage.getItem('token'),
    userId: '' || localStorage.getItem('userId'), // 账户id
    authList: '' || localStorage.getItem('authList'),
    isFold: false
  },
  actions,
  getters,
  mutations
})

export default store
