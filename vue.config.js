module.exports = {
    devServer: {
      proxy: {
      //   key:value key前缀 /lulu value跟http-proxy-middleware相同的一个配置
        '/api': {
          target: 'https://m.maizuo.com',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        },
        '/city': {
          target: 'https://m.maizuo.com',
          changeOrigin: true,
          pathRewrite: {
            '^/city': ''
          }
        },
      }
    }
  }