const getters = {
  userInfo: state => state.userInfo,
  token: state => state.token,
  userName: state => state.userInfo.accountName,
  isAdmin: state => +state.userInfo.isAdmin === 1,
  authList: state => state.authList
}
export default getters
