module.exports = {
  publicPath: '/',
  outputDir: 'practice-vue-build',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    overlay: {
      warnings: false,
      errors: true,
    },
    proxy: {
      '/api': {
        target: '', // 代理地址为空时，编译会报错
        changeOrigion: true, // 允许跨域
        ws: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  // configureWebpack: {},
  // css: {},
}
