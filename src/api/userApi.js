import http from './request'

export default {
  // 登录
  userLogin (data) {
    return http.post('/zhyq-auth/login/doLogin', data)
  },
  // 刷新token
  refreshToken (data) {
    return http.post('/zhyq-auth/login/refreshToken', data)
  },
  // 修改密码
  updatePwd (data) {
    return http.post('/sysAccount/changePassword', data)
  },
  // 获取token
  getToken (data) {
    return http.get(`/zhyq-auth/sso/getTokenByTicket?ticket=${data}`)
  },
  // 获取userInfo
  getUserInfo (data) {
    return http.post('', data)
  },
  // 登陆日志
  getLoginLog (data) {
    return http.post('/userLoginLog/getTableList', data)
  }
}
