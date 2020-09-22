module.exports = {
  publicPath: "./",
  outputDir: "dist",
  indexPath: "index.html",
  filenameHashing: true,
  pages: undefined,
  lintOnSave: true,
  runtimeCompiler: false,
  // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来
  transpileDependencies: [],
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,
  // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。如果这个值是一个函数，则会接收被解析的配置作为参数。该函数及可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。
  // configureWebpack: config => {
  //   if (process.env.NODE_ENV === "production") {
  //     // 为生产环境修改配置...
  //   } else {
  //     // 为开发环境修改配置...
  //   }
  // },
  // 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。
  // chainWebpack: config => {
  /*config.module
    .rule('images')
    .use('url-loader')
      .loader('url-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })*/
  // },
  // // css相关配置
  // css: {
  //     // 启用 CSS modules
  //     modules: false,
  //     // 是否使用css分离插件
  //     extract: true,
  //     // 开启 CSS source maps?
  //     sourceMap: false,
  //     // css预设器配置项
  //     loaderOptions: {},
  // },
  // webpack-dev-server 相关配置
  devServer: {
    host: "0.0.0.0",
    port: 8080,
    https: false,
    open: false,
    hotOnly: false,
    proxy: {
      "/login": {
        target: "http://localhost:3000",
        changeOrigin: true,
        pathRewrite: {
          "^/lukydraw": "/login"
        }
      },
      "/user": {
        target: "http://localhost:3000",
        changeOrigin: true,
        pathRewrite: {
          "^/user": "/user"
        }
      }
    }
    // before: app => {}
  },
  // PWA 插件相关配置
  pwa: {},
  // 第三方插件配置
  pluginOptions: {
    // ...
  }
};
