import axios from 'axios'
import store from '@/store'
import {
  Message
} from 'element-ui'
const httpClient = axios.create({
  baseURL: '/zhyq-admin',
  timeout: 30000
})
httpClient.interceptors.request.use((config) => {
  const c = {
    ...config
  }
  if (c.url.includes('/zhyq-auth') || c.url.includes('/zhyq-desktop')) {
    c.baseURL = ''
  }

  const token = store.getters.token
  if (token) {
    config.headers.common.Authorization = token
    config.headers.common.reqSource = '1'
    return c
  }
  return c
}, (err) => {
  Message.error(err)
  return Promise.reject(err)
})

httpClient.interceptors.response.use((res) => {
  const { code, responseData: data, message } = res.data
  if (res.data instanceof Blob) {
    return res
  }
  if (+code !== 200) {
    Message.error(message)
    return Promise.reject(message)
  }
  return data
}, (err) => {
  Message.error(`服务器异常： ${err}`)
  return Promise.reject(err)
})
export default httpClient
