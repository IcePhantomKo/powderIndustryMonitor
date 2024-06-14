const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // devServer 在发送请求时，会先走到before指定的函数中进行处理，
  // 如果before中没有对应的接口路由，才会请求外网等
  devServer:{
    onBeforeSetupMiddleware: require('./src/mock/index.js')
  }
})
