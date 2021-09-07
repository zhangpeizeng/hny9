export default {
  Login ({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      commit('SET_TOKEN', data.token)
      commit('SET_USERID', data.accountId)
      commit('SET_USERINFO', data)
      commit('SET_AUTH', data.functions)
      resolve()
    })
  },
  Logout ({
    commit
  }) {
    return new Promise((resolve, reject) => {
      commit('SET_TOKEN', '')
      commit('SET_USERID', '')
      commit('SET_USERINFO', '')
      commit('SET_AUTH', '')
      resolve()
    })
  }
}
