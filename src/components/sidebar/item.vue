<template>
  <div>
    <template v-for="item in items">
      <!-- 含有子菜单 -->
      <!-- 第一层 含有子菜单菜单 -->
      <el-submenu
        :index="item.path"
        v-if="item.subs.length>0"
        :key="item.path"
      >
        <template slot="title">
          <i
            :class="item.icon"
          ></i>
          <span slot="title">{{ item.title }}</span>
        </template>
        <MenuList :items="item.subs"></MenuList>
        <!--递归调用-->
      </el-submenu>

      <!-- 第一层 不含子菜单  -->
      <el-menu-item
        v-else
        :index="item.path"
        :key="item.path"
        @click="routerGo(item.path)"
      >
        <i
          :class="item.icon"
        ></i>
        <span slot="title">{{ item.title }}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  components: { MenuList: () => import('./item.vue') },
  name: 'MenuList',
  props: {
    items: Array,
    isCollapse: Boolean
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
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
