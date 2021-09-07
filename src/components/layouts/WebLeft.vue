<template>
  <div class="left-nav-wrap">
    <SideBar :items="navList"></SideBar>
  </div>
</template>

<script>
import { getIndexMenuList } from '@/api/systemApi'
import SideBar from '../sidebar/index.vue'
export default {
  components: { SideBar },
  data () {
    return {
      navList: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    async getList () {
      const res = await getIndexMenuList()
      if (res) {
        this.navList = [...res]
      }
    }
  }
}
</script>

<style scoped lang="scss">
.left-nav-wrap {
  /*background-color: #2e477f;*/
  background-image: -webkit-gradient(linear,left top,left bottom,from(#3e579d),to(#000311));
  width: 100%;
  height: 100%;
}
</style>
