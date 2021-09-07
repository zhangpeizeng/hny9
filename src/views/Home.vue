<template>
  <div class="home">
    <img
      src="../assets/home/left.png"
      alt=""
      class="left-img"
    >
    <img
      src="../assets/home/right.png"
      alt=""
      class="right-img"
    >
    <header>
    </header>
    <div class="center">
      <div class="rotate-wrap">
        <img
          src="../assets/home/num1.png"
          alt=""
        >
        <img
          src="../assets/home/num2.png"
          alt=""
        >
        <img
          src="../assets/home/num3.png"
          alt=""
        >
        <img
          src="../assets/home/num4.png"
          alt=""
        >
        <img
          src="../assets/home/num5.png"
          alt=""
        >
        <img
          src="../assets/home/num6.png"
          alt=""
        >
      </div>
      <div class="bottom-circle">
        <img
          src="../assets/home/base.png"
          alt=""
        >
      </div>
      <div class="logo-wrap flex-center">
        <img
          src="../assets/home/logo.png"
          alt=""
        >
      </div>
      <div class="count-wrap">
        <div class="title">全球接入生态网器</div>
        <div class="flex-center-x">
          <div class="item">{{ count1 }}</div>
          <div class="item">{{ count2 }}</div>
          <div class="item">{{ count3 }}</div>
          <div class="item">{{ count4 }}</div>
          <div class="item">{{ count5 }}</div>
          <div class="item">{{ count6 }}</div>
          <div class="item">{{ count7 }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      interval: null,
      time: 0,
      count: ''
    }
  },
  computed: {
    count1 () {
      return String(this.count)[0] || '0'
    },
    count2 () {
      return String(this.count)[1] || '0'
    },
    count3 () {
      return String(this.count)[2] || '0'
    },
    count4 () {
      return String(this.count)[3] || '0'
    },
    count5 () {
      return String(this.count)[4] || '0'
    },
    count6 () {
      return String(this.count)[5] || '0'
    },
    count7 () {
      return String(this.count)[6] || '0'
    }
  },
  created () {
    this.setTime()
  },
  methods: {
    setTime () {
      this.interval = setInterval(() => {
        this.time += 1
        this.count = parseInt(Math.random() * 1100000)
        if (this.time >= 30) {
          this.time = 0
          this.count = '1103869'
          clearInterval(this.interval)
        }
      }, 60)
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  background: url("../assets/home/bg1.png") no-repeat;
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
  .left-img {
    position: fixed;
    width: 640px;
    height: 737px;
    top: calc((100% - 737px) / 2);
    left: 5%;
  }
  .right-img {
    position: fixed;
    width: 640px;
    height: 737px;
    top: calc((100% - 737px) / 2);
    right: 5%;
  }
  .center {
    position: fixed;
    width: 1100px;
    height: 1100px;
    left: calc((100% - 1100px) / 2);
    bottom: 280px;
    perspective: 4200px;
    transform-style: preserve-3d;
    > div {
      transform-style: preserve-3d;
      position: absolute;
    }
    .count-wrap {
      top: 5%;
      width: 100%;
      .title {
        font-size: 50px;
        color: #fff;
        text-align: center;
        margin-bottom: 60px;
      }
      .item {
        width: 70px;
        height: 109px;
        background: #007ffe;
        border-radius: 6px;
        color: #fff;
        font-size: 91px;
        text-align: center;
        line-height: 109px;
        margin-right: 18px;
        &:nth-child(1) {
          margin: 0 50px;
        }
        &:nth-child(4) {
          margin-right: 50px;
        }
      }
    }
    .logo-wrap {
      background: url("../assets/home/center.png") no-repeat;
      background-size: 100% 100%;
      width: 1256px;
      height: 945px;
      top: 10%;
    }
    .rotate-wrap {
      width: 400px;
      height: 400px;
      left: calc((100% - 400px) / 2);
      bottom: 15%;
      animation: move2 40s linear infinite;
      img {
        position: absolute;
        width: 100%;
      }
      img:nth-child(1) {
        transform: rotateY(0deg) translateZ(1100px);
      }
      img:nth-child(2) {
        transform: rotateY(60deg) translateZ(1100px);
      }
      img:nth-child(3) {
        transform: rotateY(120deg) translateZ(1100px);
      }
      img:nth-child(4) {
        transform: rotateY(180deg) translateZ(1100px);
      }
      img:nth-child(5) {
        transform: rotateY(240deg) translateZ(1100px);
      }
      img:nth-child(6) {
        transform: rotateY(300deg) translateZ(1100px);
      }
    }
    .bottom-circle {
      bottom: -18%;
      width: 100%;
      transform: rotateX(75deg);
      img {
        width: 100%;
        animation: move1 20s linear infinite;
      }
    }
  }
  @keyframes move1 {
    from {
      transform: rotateZ(0deg);
    }
    to {
      transform: rotateZ(-360deg);
    }
  }
  @keyframes move2 {
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
