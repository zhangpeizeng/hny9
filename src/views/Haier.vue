<template>
  <div class="home">
    <header>
    </header>
    <div class="center">
      <div class="rotate-wrap">
        <img
          src="../assets/haier/park1.png"
          alt=""
        >
        <img
          src="../assets/haier/park2.png"
          alt=""
        >
        <img
          src="../assets/haier/park3.png"
          alt=""
        >
        <img
          src="../assets/haier/park4.png"
          alt=""
        >
        <img
          src="../assets/haier/park5.png"
          alt=""
        >
        <img
          src="../assets/haier/park6.png"
          alt=""
        >
        <img
          src="../assets/haier/park7.png"
          alt=""
        >
        <img
          src="../assets/haier/park8.png"
          alt=""
        >
        <img
          src="../assets/haier/park9.png"
          alt=""
        >
      </div>
      <div class="building"> </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  created () {},
  methods: {}
}
</script>

<style scoped lang="scss">
.home {
  background: url("../assets/haier/bg.png") no-repeat;
  background-size: 100% 100%;
  width: 3840px;
  height: 2160px;
  overflow: hidden;
  header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width: 100vw;
    height: 140px;
  }
  .center {
    position: fixed;
    width: 3000px;
    height: 2300px;
    left: calc((100% - 3100px) / 2);
    bottom: 280px;
    perspective: 4200px;
    transform-style: preserve-3d;
    > div {
      transform-style: preserve-3d;
      position: absolute;
    }
    .building {
      background: url("../assets/haier/building.png") no-repeat;
      background-size: 100% 100%;
      width: 100%;
      height: 100%;
      top: 10%;
    }
    .rotate-wrap {
      width: 737px;
      height: 683px;
      left: calc((100% - 683px) / 2);
      bottom: 15%;
      animation: move1 60s linear infinite;
      img {
        position: absolute;
        width: 100%;
      }
      img:nth-child(1) {
        transform: rotateY(0deg) translateZ(1400px);
      }
      img:nth-child(2) {
        transform: rotateY(40deg) translateZ(1400px);
      }
      img:nth-child(3) {
        transform: rotateY(80deg) translateZ(1400px);
      }
      img:nth-child(4) {
        transform: rotateY(120deg) translateZ(1400px);
      }
      img:nth-child(5) {
        transform: rotateY(160deg) translateZ(1400px);
      }
      img:nth-child(6) {
        transform: rotateY(200deg) translateZ(1400px);
      }
      img:nth-child(7) {
        transform: rotateY(240deg) translateZ(1400px);
      }
      img:nth-child(8) {
        transform: rotateY(280deg) translateZ(1400px);
      }
      img:nth-child(9) {
        transform: rotateY(320deg) translateZ(1400px);
      }
    }
  }
  @keyframes move1 {
    0% {
      transform: rotateX(0deg) rotateY(0deg);
    }

    // 25% {
    //   transform: rotateX(5deg) rotateY(90deg);
    // }

    // 50% {
    //   transform: rotateX(0deg) rotateY(180deg);
    // }

    // 75% {
    //   transform: rotateX(-5deg) rotateY(270deg);
    // }

    100% {
      transform: rotateX(0deg) rotateY(360deg);
    }
  }
}
</style>
