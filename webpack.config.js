const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const MODE = "development";

module.exports = {
  entry: "./src/index.js",
  mode: MODE,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  devServer: {
    compress: true,
    port: 3000,
    liveReload: true,
    hot: false,
  },
  plugins:[
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
