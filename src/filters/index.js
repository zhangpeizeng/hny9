import Vue from 'vue'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

Vue.filter('moment', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})
/**
 * 时间过滤器
 *
 * 格式化时间为字符串为指定形式， 可格式化的值：1、时间戳 2、格式化后的时间字符串
 *
 * 通过字母匹配替换(yyyy|MM|dd|hh|mm|ss) 可随意组装连接符号 以及随意组装显示的格式
 *
 * 例子：
 * <div>{{1574152196836 | date}}</div>                            ==> 2019-11-19 16:29:56
 * <div>{{1574152196836 | date('yyyy-MM-dd hh:mm:ss')}}</div>     ==> 2019-11-19 16:29:56
 * <div>{{1574152196836 | date('yyyy-MM-dd')}}</div>              ==> 2019-11-19
 * <div>{{1574152196836 | date('MM-dd hh:mm')}}</div>             ==> 11-19 16:29
 * <div>{{'2019-11-19 16:29:56' | date('yyyy年MM月dd日')}}</div>   ==> 2019年11月19日
 * <div>{{'2019-11-19 16:29:56' | date('yyyy/MM/dd')}}</div>      ==> 2019/11/19
 *
 */

Vue.filter("date", function(value, type = "yyyy-MM-dd hh:mm:ss") {
  if (value === null || value === undefined || value === "") return "";

  let date = new Date();
  if (typeof value === "string" || typeof value === "number") {
    date = new Date(value);
  } else {
    return "";
  }

  if (/(y+)/.test(type)) {
    type = type.replace(
        RegExp.$1,
        (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  let o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds()
  };

  Object.keys(o).forEach(key => {
    if (new RegExp(`(${key})`).test(type)) {
      let str = o[key] + "";
      type = type.replace(
          RegExp.$1,
          RegExp.$1.length === 1 ? str : ("00" + str).substr(str.length)
      );
    }
  });

  return type;
});
