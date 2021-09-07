import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './directive/index'
import '@/style/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
import '@/filters/index.js'
import api from '@/api'
Vue.use(ElementUI)
Vue.prototype.$api = api
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
