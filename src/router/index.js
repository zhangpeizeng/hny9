import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '@/store/index'
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/chinaMap',
      name: 'chinaMap',
      component: () => import('@/views/chinaMap.vue')
    },
    {
      path: '/haier',
      name: 'haier',
      component: () => import('@/views/Haier.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

// 全局的路由守卫
router.beforeEach((to, from, next) => {
  next()
})

const originalPush = VueRouter.prototype.push
// 修改原型对象中的push方法
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
