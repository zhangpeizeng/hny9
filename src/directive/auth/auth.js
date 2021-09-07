import store from '@/store'
import { Message } from 'element-ui'
export default {
  inserted (el, binding) {
    const { value } = binding
    const list = store.getters.authList // 当前登陆用户的权限列表
    if (value && value instanceof Array && value.length > 0) { // 是一个数组
      let hasPermission = false
      hasPermission = value.some((item) => list.includes(item))
      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      Message.error('网络错误，请刷新重试~')
      throw new Error('need permssion!')
    }
  }
}
