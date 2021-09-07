export default {
  SET_USERINFO (state, data) {
    state.userInfo = data
    localStorage.setItem('userInfo', JSON.stringify(data))
  },
  SET_TOKEN (state, data) {
    state.token = data
    localStorage.setItem('token', data)
  },
  SET_USERID (state, data) {
    state.userId = data
    localStorage.setItem('userId', data)
  },
  SET_AUTH (state, data) {
    state.authList = data
    localStorage.setItem('authList', JSON.stringify(data))
  },
  SET_FOLD (state, data) {
    state.isFold = data
  }
}
