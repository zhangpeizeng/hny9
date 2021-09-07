<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  created () {
    this.startTask()
  },
  methods: {
    async getWeather () {},
    // 定时任务
    startTask () {
      let index = 0
      setInterval(() => {
        index += 1
        this.getWeather()
        if (index === 0) {
          this.$router.push('/home')
        }
        if (index === 1) {
          this.$router.push('/chinaMap')
        }
        if (index === 2) {
          index = -1
          this.$router.push('/haier')
        }
      }, 1000 * 60 * 2)
    }
  }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>
