/*
 * @Author: weiyayun
 * @Date: 2023-03-15 19:00:13
 * @Interface:
 * @Description:
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src",
  mode: "development",
  module: {
    rules: [],
  },
  plugins: [new HtmlWebpackPlugin()],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "static/js/main.js",
    clean: true,
  },
};
