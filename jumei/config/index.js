
'use strict'
// Template version: 1.1.3
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: process.env.PORT || 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
   proxyTable: {
       '/v1': {//这里是我配置的名字
    　　　　target: 'http://s.mobile.jumei.com', //这个路径是我代理到本地tp框架里面
    　　　　 changeOrigin: true, //开启代理
     　　　　pathRewrite: { '^/v1': '/v1' }  //这里重写路径/run就代理到对应地址

            },
        '/msapi': {//这里是我配置的名字
        　　　　target: 'http://mobile.jumei.com', //这个路径是我代理到本地tp框架里面
        　　　　 changeOrigin: true, //开启代理
         　　　　pathRewrite: { '^/msapi': '/msapi' }  //这里重写路径/run就代理到对应地址

        　　},
        '/product': {//这里是我配置的名字
        　　　　target: 'http://h5.jumei.com', //这个路径是我代理到本地tp框架里面
        　　　　 changeOrigin: true, //开启代理
         　　　　pathRewrite: { '^/product': '/product' }  //这里重写路径/run就代理到对应地址

        　　},
        // '/msapi': {//这里是我配置的名字
        // 　　　　target: 'http://mobile.jumei.com', //这个路径是我代理到本地tp框架里面
        // 　　　　 changeOrigin: true, //开启代理
        //  　　　　pathRewrite: { '^/msapi': '/msapi' }  //这里重写路径/run就代理到对应地址

        // 　　},
        '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                pathRewrite: {
                  '^/api': '/api'
                }
            }


    },





    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
