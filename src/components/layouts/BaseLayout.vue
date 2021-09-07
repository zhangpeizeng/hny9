<template>
  <div class="root-layout">
    <div class="header">
      <WebHeader/>
    </div>
    <div class="root-wrap flex">
      <div
        v-if="$route.path!=='/home'"
        class="root-left"
        :class="{fold:isFold}"
      >
        <WebLeft/>
      </div>
      <div class="root-right">
        <div
          class="content-wrap"
          :class="{'has-title':hasTitle}"
        >
          <div
            class="title flex-center-y"
            :class="{'has-title':hasTitle}"
          >{{ title }}</div>
          <div :style="{padding:hasTitle?'21px':''}">
            <keep-alive>
              <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive"></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import WebHeader from './WebHeader'
import WebLeft from './WebLeft'
import { mapState } from 'vuex'
export default {
  components: { WebHeader, WebLeft },
  data () {
    return {
      title: '',
      hasTitle: true,
      noTitleList: ['home'] //  去掉页面顶部title，配置为router-name
    }
  },
  computed: {
    ...mapState(['isFold'])
  },
  watch: {
    $route (val) {
      this.title = document.title
      this.hasTitle = !this.noTitleList.includes(val.name)
    }
  },
  created () {
    // this.checkToken()
    this.title = document.title
    this.hasTitle = !this.noTitleList.includes(this.$route.name)
  },
  methods: {
    // async checkToken () {
    //   const token = this.$store.getters.token
    //   if (token) {
    //     // this.$router.push('/home')
    //   } else {
    //     const ticket = location.search.split('=')[1]
    //     if (ticket) {
    //       const res = await this.$api.userApi.getToken(ticket)
    //       if (res) {
    //         this.$store.dispatch('Login', res).then(() => {})
    //       }
    //     } else {
    //       this.$message.warning('登录已过期，请重新登陆~')
    //       // TODO
    //       const url =
    //         process.env.NODE_ENV === 'development'
    //           ? `http://112.6.99.54:9091/sso/auth/?redirectUrl=${encodeURIComponent(
    //               'http://127.0.0.1:8080'
    //             )}`
    //           : process.env.VUE_APP_MODE === 'test'
    //           ? `http://112.6.99.54:9091/sso/auth/?redirectUrl=${encodeURIComponent(
    //               'http://112.6.99.54:8082'
    //             )}`
    //           : `http://114.215.43.8:9091/sso/auth/?redirectUrl=${encodeURIComponent(
    //               'http://114.215.43.8:8082'
    //             )}`
    //       window.location.replace(url)
    //        this.$router.push('/login')
    //     }
    //   }
    // }
  }
}
</script>
<style lang="scss" scoped>
  *{
    -moz-user-select:none; /* Firefox私有属性 */
    -webkit-user-select:none; /* WebKit内核私有属性 */
    -ms-user-select:none; /* IE私有属性(IE10及以后) */
    -khtml-user-select:none; /* KHTML内核私有属性 */
    -o-user-select:none; /* Opera私有属性 */
    user-select:none; /* CSS3属性 */
  }
.root-layout {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  font-size: 13px;
  .header {
    height: 75px;
  }
  .root-wrap {
    height: calc(100vh - 75px);
    width: 100%;
  }
  .root-left {
    width: 220px;
    border-right: 1px solid #eee;
    transition: 300ms;
    overflow-y: auto;
    overflow-x: hidden;
    &.fold {
      width: 65px;
    }
  }
  .root-right {
    // width: calc(100vw - 220px);
    width: 100%;
    height: calc(100vh - 70px);
    overflow: auto;
    padding: 28px;
    background-color: #eef5f9;
    .content-wrap {
      &.has-title {
        background: #fff;
        box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.13);
        border-radius: 10px;
      }
      width: 100%;
      .title {
        height: 50px;
        background-color: #f8f9fc;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        border-bottom: 1px solid #e3e6f0;
        color: #6b7a9d;
        font-size: 14px;
        padding-left: 20px;
        display: none;
        &.has-title {
          display: flex;
        }
      }
    }
  }
}
</style>
