// vue.config.js 配置说明
// 这里只列一部分，具体配置惨考文档啊
const path = require("path");
const merge = require("webpack-merge");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // baseUrl  type:{string} default:'/'
  // 将部署应用程序的基本URL
  // 将部署应用程序的基本URL。
  // 默认情况下，Vue CLI假设您的应用程序将部署在域的根目录下。
  // https://www.my-app.com/。如果应用程序部署在子路径上，则需要使用此选项指定子路径。例如，如果您的应用程序部署在https://www.foobar.com/my-app/，集baseUrl到'/my-app/'.

  publicPath: "./",

  outputDir: "dist",
  assetsDir: "static",
  lintOnSave: false,
  // productionSourceMap：{ type:Bollean,default:true } 生产源映射
  // 如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建
  // productionSourceMap: true,
  // devServer:{type:Object} 3个属性host,port,https
  // 它支持webPack-dev-server的所有选项
  runtimeCompiler: true,
  chainWebpack: (config) => {
    config.plugins.delete("prefetch");
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"));
    config.module
      .rule("images")
      .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
      .use("url-loader")
      .loader("url-loader")
      .tap((options) =>
        merge(options, {
          limit: 20000,
        })
      );
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "./src/assets/css/variable.less")],
    },
  },

  devServer: {
    port: 8086, // 端口号
    // 192.168.1.17
    host: "192.168.10.190",
    // host: "192.168.1.17",
  },
};
