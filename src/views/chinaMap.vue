<template>
  <div class="map-page">
    <!--    <div class="map-header">-->
    <!--      <img src="../assets/header-map.png" alt="">-->
    <!--    </div>-->
    <div class="map-top">
      <div>
        <img v-if="isIndex===0" src="../assets/map/shequ-light.png" alt="">
        <img v-else src="../assets/map/shequ.png" alt="">
      </div>
      <div style="margin-left: 50px">
        <img v-if="isIndex===1" src="../assets/map/yuanqu-light.png" alt="">
        <img v-else src="../assets/map/yuanqu.png" alt="">
      </div>

    </div>
    <div v-for="(item,index) in imgList" :key="index" class="map-left">
      <img :src="item.pic" alt="">
    </div>
    <div class="map-display">
      <img src="../assets/display.png" alt="">
      <div class="map-table">
        <div class="list-header">
          园区社区列表
        </div>
        <div class="map-list">
          <el-table
            class="custom-table-2 hidden-tbody"
            :data="tableData"
            :stripe="true"
            style="width: 100%">
            <el-table-column
              prop="name"
              label="名称"
            >
            </el-table-column>
            <el-table-column
              prop="address"
              label="位置"
            >
            </el-table-column>
          </el-table>
          <vue-seamless-scroll class="auto-scorll-table" :data="tableData" :class-option="defaultOption">
            <el-table
              class="custom-table-2 hidden-thead"
              :data="tableData"
              :stripe="true"
              style="width: 100%">
              <el-table-column
                prop="name"
                label="名称"
              >
              </el-table-column>
              <el-table-column
                prop="address"
                label="位置"
              >
              </el-table-column>
            </el-table>
          </vue-seamless-scroll>
        </div>
<!--        <div class="list-total">-->
<!--          总产值:10000+-->
<!--        </div>-->

      </div>
    </div>
    <div class="map-container" ref="myEchart"></div>
  </div>
</template>

<script>
  import vueSeamlessScroll from 'vue-seamless-scroll'
  import "../../node_modules/echarts/map/js/china.js";
  import {listData,shequData,yuanquData} from '../api/mapApi.js'

  export default {
    name: "chinaMap",
    components: {
      vueSeamlessScroll
    },
    computed: {
      defaultOption() {
        return {
          step: 1.5, // 数值越大速度滚动越快
          limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
          hoverStop: true, // 是否开启鼠标悬停stop
          direction: 1, // 0向下 1向上 2向左 3向右
          openWatch: true, // 开启数据实时监控刷新dom
          singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
          singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
          waitTime: 1000 // 单步运动停止的时间(默认值1000ms)·
        }
      }
    },
    data() {
      return {
        setTime:null,
        isIndex:0,
        myEchart: '',
        tableData: listData,
        imgList:[
          {
            pic:require('../assets/map/dianti.png'),
            picLight:require('../assets/map/shequ-light.png'),
          },
          {
            pic:require('../assets/map/cheku.png'),
            picLight:require('../assets/map/shequ-light.png'),
          },
          {
            pic:require('../assets/map/zhaoming.png'),
            picLight:require('../assets/map/shequ-light.png'),
          },
          {
            pic:require('../assets/map/qiaoliang.png'),
            picLight:require('../assets/map/shequ-light.png'),
          },
          {
            pic:require('../assets/map/xiaofang.png'),
            picLight:require('../assets/map/shequ-light.png'),
          },
        ]
      }
    },
    created() {


    },
    mounted() {
      this.setTime = setInterval(()=>{
        this.isIndex === 0 ? this.isIndex=1 : this.isIndex=0
        this.initEcharts();
      },1000*20)
      this.initEcharts();
    },
    beforeDestroy() {
      clearInterval(this.setTime)
    },
    methods: {
      initEcharts() {
        this.myEchart = this.$echarts.init(this.$refs.myEchart);
        let data1 = this.dealWithData();
        // let data1 = dataValue.splice(0, 2);
        let urlImg = ''
        let  symbolColor= ''
        this.isIndex === 0 ? urlImg = require('../assets/map/icon-shequ.png'):urlImg = require('../assets/map/icon-yuanqu.png')
        this.isIndex === 0 ? symbolColor = 'rgba(225, 40, 45, 1)':symbolColor = 'rgba(255, 172, 20, 1)'
        // var data1 = dataValue;
        let option2 = {
          tooltip: {
            show: false
          },
          geo: {
            z: 999,
            map: "china",
            roam: false,// 一定要关闭拖拽
            zoom: 1.23,
            center: [105, 36], // 调整地图位置
            label: {
              normal: {
                show: false, //关闭省份名展示
                fontSize: "10",
                color: "rgba(0,0,0,0.7)"
              },
              emphasis: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                areaColor: "#004a9e",
                borderColor: "#9dfcfd",
                borderWidth: 1
              },
              emphasis: {
                areaColor: "#17008d",
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 5,
                borderWidth: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          },
          series: [
            {
              type: "map",
              map: "china",
              roam: false,
              zoom: 1.23,
              center: [105, 36.7],
              // geoIndex: 1,
              // aspectScale: 0.75, //长宽比
              showLegendSymbol: false, // 存在legend时显示
              label: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: false
                }
              },
              itemStyle: {
                normal: {
                  areaColor: "#002450",
                  borderColor: "#17008d",
                  borderWidth: 0.5
                },
                emphasis: {
                  areaColor: "#17008d",
                  shadowOffsetX: 0,
                  shadowOffsetY: 0,
                  shadowBlur: 5,
                  borderWidth: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)"
                }
              }
            },
            {
              zlevel: 2,
              name: "",
              type: "scatter",
              coordinateSystem: "geo",
              data: [{name: '青岛', value: [120.6,36.6], num: '22'}],
              //   symbolSize: function(val) {
              //     return val[2] / 10;
              //   },
              symbol: "image://" + require('../assets/map/hny.png'),
              symbolSize: 100,
              hoverSymbolSize: 100,
              tooltip: {
                formatter(value) {
                  return value.data.name + "<br/>" + "设备数：" + value.data.num;
                },
                show: true
              },
              encode: {
                value: 2
              },
              label: {
                color:'#ffffff',
                formatter: "{b}",
                position: "right",
                show: true,
                fontSize:20,
              },
              itemStyle: {
                color: "#0efacc"
              },
              emphasis: {
                label: {
                  show: false
                }
              }
            },
            {
              name: "Top 5",
              type: "effectScatter",
              coordinateSystem: "geo",
              data: data1,
              symbolSize: 25,
              rippleEffect: {
                brushType: "fill",
                color: symbolColor,
                period: 4,
                scale: 5,
              },
              // symbol: "image://" + urlImg,
              // tooltip: {
              //   show: false
              // },
              tooltip: {
                formatter(value) {
                  return value.data.name + "<br/>" + "设备数：" + value.data.num;
                },
                show: true
              },
              encode: {
                value: 2
              },
              showEffectOn: "render",
              hoverAnimation: true,
              label: {
                color:'#ffffff',
                formatter: "{b}",
                position: "right",
                show: true,
                fontSize:20,
              },
              itemStyle: {
                color: symbolColor,
                shadowBlur: 2,
                shadowColor: "#333"
              },
              zlevel: 1
            }
          ]
        };
        this.myEchart.setOption(option2);
      },
      dealWithData() {
        let geoCoordMap
        this.isIndex === 0 ? geoCoordMap = shequData:geoCoordMap = yuanquData
        let data = [];
        for (let key in geoCoordMap) {
          data.push({name: key, value: geoCoordMap[key].data, num: geoCoordMap[key].num});
        }
        return data;
      }
    }
  }
</script>
<style lang="scss">
  .el-table th, .el-table tr{
    background: black;
  }
  /* 去掉中间数据的分割线 */
  .el-table__row>td{
    border: none;
  }
  /* 去掉上面的线 */
  .el-table th.is-leaf{
    border: none;
  }
  /* 去掉最下面的那一条线 */
  .el-table::before {
    height: 0px;
  }
  .hidden-tbody.el-table {
    height: 80px;
    box-sizing: border-box;

    tbody {
      display: none;
      overflow: hidden;
    }

  }

  .auto-scorll-table {
    /*height: calc(100% - 54px);*/
    overflow: hidden;
  }

  .hidden-thead.el-table {

    border-top: none;
    thead {
      display: none;
      overflow: hidden;
    }

  }

  .el-table td, .el-table th.is-leaf {
    border-bottom: none;
  }

  /*滚动条样式*/
  *::-webkit-scrollbar {
    width: 7px;
    height: 7px;
    background-color: transparent;
  }

  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
  *::-webkit-scrollbar-track {
    background-color: #141c25;
  }

  /*定义滚动条轨道 内阴影+圆角*/
  *::-webkit-scrollbar-thumb {
    background-color: #141c25;
    border-radius: 6px;
  }

  /*定义滑块 内阴影+圆角*/
  .scrollbarHide::-webkit-scrollbar {
    display: none
  }

  .scrollbarShow::-webkit-scrollbar {
    display: block
  }
</style>
<style scoped lang="scss">
  .map-page {

    position: relative;
    width: 3840px;
    height: 2160px;
    background: url("../assets/map.png") no-repeat;
    background-size: 100% 100%;

    .map-container {
      display: inline-block;
      width: 50%;
      height: 100%;
      margin-left: 13%;
    }

    .map-display {
      position: absolute;
      z-index: 999;
      top: 10%;
      right: 9%;

      img {
        width: 932px;
        height: 500px;
      }
      .map-table {
        margin-top: 50px;
        /*background: rgba(27, 37, 46, 0.71);*/
        background: #141c25;
        border-radius: 28px;
        width: 932px;
        height: 1168px;
        padding: 48px;

        .list-header {
          height: 50px;
          width: 100%;
          background: url("../assets/list-header.png") no-repeat;
          background-size: 100% 100%;
          font-size: 28px;
          font-family: FZZCHJW--GB1-0, FZZCHJW--GB1;
          font-weight: normal;
          color: #FFFFFF;
          line-height: 50px;
          padding-left: 50px;
        }
      }
    }

    .map-list {
      margin-top: 50px;
      height:980px;
      overflow: hidden;

      ::v-deep .el-table tr th {
        padding: 20px 0;
        font-size:30px;
        background: #1D5EB3;
        color: #FFFFFF;
        border-right: 10px solid #141c25;
      }
      ::v-deep .el-table .cell{
        overflow: unset;
      }

      ::v-deep .el-table tr td {
        padding: 25px 0;
        font-size:30px;
        /*border-top: 10px solid #141c25;*/
        /*border-bottom: 10px solid #141c25;*/
        background: rgba(63, 92, 130, 0.9);
        color: #FFFFFF;
        border-right: 10px solid #141c25;
      }

      ::v-deep .el-table--striped .el-table__body tr.el-table__row--striped td {
        background: #141c25;
      }

      ::v-deep .el-table--border::after, .el-table--group::after, .el-table::before {
        content: '';
        position: absolute;
        background: none;
        z-index: 1;
      }
    }

    .list-total {
      margin-top: 40px;
      background: #334662;
      height: 54px;
      color: white;
      font-size: 28px;
      font-family: FZZCHJW--GB1-0, FZZCHJW--GB1;
      font-weight: normal;
      line-height: 54px;
      text-align: right;
      padding-right: 15px;
    }
    .map-top{
      display: flex;
      align-items: center;
      position: absolute;
      z-index: 999;
      top: 20%;
      left: 30%;

      img {
        width: 245px;
        height: 245px;
      }
    }

    .map-left {
      position: absolute;
      z-index: 999;
      /*top: 23%;*/
      /*left: 7.8%;*/

      img {
        width: 245px;
        height: 245px;
      }
    }

    .map-left:nth-child(2) {
      top: 25%;
      left: 6%;
    }

    .map-left:nth-child(3) {
      top: 36%;
      left: 4.5%;
    }

    .map-left:nth-child(4) {
      top: 47%;
      left: 4%;
    }

    .map-left:nth-child(5) {
      top: 58%;
      left: 4.5%;
    }
    .map-left:nth-child(6) {
      top: 69%;
      left: 7%;
    }
    .map-left:nth-child(7) {
      top: 80%;
      left: 7%;
    }
    .map-left:nth-child(8) {
      top: 91%;
      left: 9%;
    }
  }
</style>