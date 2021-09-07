
const CompressionPlugin = require('compression-webpack-plugin')
const prodUrl = 'http://114.215.43.8:9090'
const testUrl = 'http://112.6.99.54:8082'
const proxyUrl = process.env.VUE_APP_MODE === 'production' ? prodUrl : testUrl
module.exports = {
  configureWebpack: {
    plugins: [new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'), // 匹配文件名
      threshold: 4096, // 超过10k则进行压缩
      deleteOriginalAssets: false, // 是否删除源文件
      minRatio: 0.5
    })]
  },
  outputDir: process.env.outputDir,
  lintOnSave: false,
  devServer: {
    open: true,
    host: '',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      '': {
        target: proxyUrl,
        ws: true,
        changOrigin: true
      }

    }
  }
}
