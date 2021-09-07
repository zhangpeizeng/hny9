<template>
  <div class="header flex">
    <div
      class="top-left flex-center"
      :class="{fold:isFold}"
    >
      <img
        v-show="!isFold"
        class="clickable logo"
        src="../../assets/hny-logo.png"
        alt
        @click="$router.push('/home')"
      />
      <img
        v-show="isFold"
        class="fold-logo clickable"
        src="../../assets/hny-logo-fold.png"
        alt
        @click="$router.push('/home')"
      />
    </div>
    <div class="top-center flex-center-y f18">
<!--      <i-->
<!--        class="el-icon-s-fold clickable f20"-->
<!--        :class="{rotate:isFold}"-->
<!--        @click="changeFold"-->
<!--      ></i>-->
      <span>莱西运营管理平台</span>
    </div>
    <div class="top_right flex">
      <div class="flex-center-y">
        <i
          class="iconfont icon-rentou1 clickable"
          @click="$router.push('/mine')"
        ></i>
        <span class="f18">{{ $store.getters.userName }}</span>
      </div>
      <div class="setting flex-center-y">
        <i class="el-icon-arrow-down f18"></i>
        <ul class="f13">
          <li
            class="org f13"
            v-for="item in orgList"
            :key="item.id"
            @click="changeOrg"
          >
            <i
              class="el-icon-check f600 f16"
              v-if="+item.isPrimary === 1"
            ></i>
            {{ item.orgName }}

          </li>
          <li @click="logOut">
            <i class="iconfont icon-tuichu"></i>
            <span>退出登录</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      orgList: []
    }
  },
  watch: {
    // $route () {
    // this.checkRoute()
    // }
  },
  computed: {
    ...mapState(['isFold'])
  },
  created () {
    // this.checkRoute()
    this.orgList = JSON.parse(localStorage.getItem('userInfo')).orgIds
  },
  methods: {
    changeFold () {
      this.$store.commit('SET_FOLD', !this.isFold)
    },
    changeOrg () {},
    // checkRoute () {
    //   const { meta } = this.$route
    //   let index = -1
    //   for (let i = 0; i < this.navList.length; i += 1) {
    //     const item = this.navList[i]
    //     if (item.key === meta.key) {
    //       index = i
    //       break
    //     }
    //   }
    //   this.activeNav = index === -1 ? 0 : index
    // },
    logOut () {
      this.$store.dispatch('Logout').then(() => {
        // TODO
        // const url =
        //   process.env.NODE_ENV === 'development'
        //     ? `http://112.6.99.54:9091/sso/logout/?redirectUrl=${encodeURIComponent(
        //         'http://127.0.0.1:8080'
        //       )}`
        //     : process.env.VUE_APP_MODE === 'test'
        //     ? `http://112.6.99.54:9091/sso/logout/?redirectUrl=${encodeURIComponent(
        //         'http://112.6.99.54:8082'
        //       )}`
        //     : `http://114.215.43.8:9091/sso/logout/?redirectUrl=${encodeURIComponent(
        //         'http://114.215.43.8:8082'
        //       )}`
        // window.location.replace(url)
        this.$router.push('/login')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  color: #fff;
  /*background: linear-gradient(270deg, #000311 0%, #3e579d 100%);*/
  /*background: -webkit-gradient(linear,left top,left bottom,from(#3e579d),to(#000311));*/
  background:#2e477f;

  box-shadow: 0px 2px 6px 2px rgba(42, 105, 167, 0.67);
  height: 100%;
  > div {
    height: 100%;
  }
  .top-left {
    width: 197px;
    &.fold {
      width: 65px;
    }
    .logo {
      width: 112px;
      height: 40px;
    }
    .fold-logo {
      width: 45px;
      height: 45px;
    }
  }
  .top-center {
    .el-icon-s-fold {
      color: #fff;
      transition: 300ms;
      margin-right: 12px;
      &.rotate {
        transform: rotate(180deg);
      }
    }
    height: 100%;
    padding-left: 12px;
    li {
      margin-right: 12px;
      position: relative;
      &.active::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: calc((100% - 26px) / 2);
        height: 3px;
        border-radius: 2px;
        width: 26px;
        background-color: red;
      }
    }
  }
  .top_right {
    margin-left: auto;
    padding-right: 20px;
    .iconfont {
      font-size: 26px;
      margin-right: 14px;
    }
    .setting {
      position: relative;
      padding: 0 16px;
      ul {
        position: absolute;
        z-index: 10;
        width: 135px;
        background-color: #fff;
        box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.13);
        border-radius: 8px;
        top: 60px;
        right: 16px;
        padding: 10px 0;
        display: none;
        li {
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 30px;
          color: #868d9b;
          i {
            margin-right: 12px;
            font-size: 19px;
          }
          &:hover {
            background-color: #f1f3f6;
          }
        }
      }
      &:hover {
        ul {
          display: block;
        }
      }
    }
  }
}
</style>
