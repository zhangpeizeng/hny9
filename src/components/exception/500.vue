<template>
  <div @click="toHome">
    500 Back Home
  </div>
</template>

<script>
export default {
  name: 'Exception500',
  methods: {
    toHome () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>
