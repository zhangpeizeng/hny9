<template>
  <el-menu
    class="sidebar-el-menu"
    @open="handleOpen"
    @close="handleClose"
    :unique-opened="true"
    :collapse="isFold"
    background-color="rgba(1,1,1,0)"
    text-color="#fff"
    active-text-color="#fff"
  >
    <!-- 遍历菜单 -->
    <template v-for="item in items">
      <!-- 含有子菜单 -->
      <!-- 第一层 含有子菜单菜单 -->
      <el-submenu
        :index="item.path"
        :key="item.path"
        v-if="item.subs.length>0"
      >
        <template slot="title">
          <i :class="item.icon" class="iconfont"></i>
          <span slot="title">{{ item.title }}</span>
        </template>
        <menu-list :items="item.subs"></menu-list>
        <!--递归调用-->
      </el-submenu>

      <!-- 第一层 不含子菜单  -->
      <el-menu-item
        v-else
        :index="item.path"
        :key="item.path"
        @click="routerGo(item.path)"
      >
        <i :class="item.icon" class="iconfont"></i>
        <span slot="title">{{ item.title }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script>
import MenuList from './item.vue'
import { mapState } from 'vuex'
export default {
  components: { MenuList },
  props: {
    items: Array,
    isCollapse: Boolean
  },
  computed: {
    ...mapState(['isFold'])
  },
  methods: {
    handleOpen (key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      // console.log(key, keyPath)
    },
    routerGo (routerName) {
      if (!routerName) {
        this.$message.warning('开发中~')
        return
      }
      this.$router.push({ name: routerName })
    }
  }
}
</script>

<style scoped lang="scss">
.sidebar-el-menu {
}
</style>
