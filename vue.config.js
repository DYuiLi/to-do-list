// 修改脚手架生成的默认配置

const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false, /*关闭语法检查*/
  /* devServer: {
    proxy: 'http://localhost:4000'
  } */
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        pathRewrite: {'^/api': ''},
        ws: true,           // 用于支持websocket
        changeOrigin: true    // 是否修改代理服务器的真是请求服务来源（真是请求服务来源：localhost:8080），若是则修改为localhost:5000
      },
    }
  }
})
