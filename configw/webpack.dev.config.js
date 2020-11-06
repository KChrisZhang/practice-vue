const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "../src/main.js",
  output: {
    filename: "my-first-webpack.bundle.js",
    path: path.resolve(__dirname, "dist")
  },

  /**
   * 1. loader 从右到左
   * 2. 在最后一个 loader 返回webpack所预期的 JavaScript
   * 3. loader 可以是同步，也可以是异步
   */
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { modules: true } }
        ]
      },
      { test: /\.ts$/, use: "ts-loader" },
      { test: /\.(js|jsx)$/, use: "babel-loader" }
    ]
  },

  /**
   * 1. 实例化插件之后，传入 plugins 选项
   * 2. 插件对象可以传入参数
   */
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({ template: "../public/index.html" })
  ]
};
