const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false, //关闭eslint
    //代理跨域
    devServer: {
      proxy: {
        '/api': {
          target: 'http://39.98.123.211',
          //pathRewrite: { '^/api': '' },路径重写
        },
      },
    }
})
