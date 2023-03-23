/*
 * @Author: weiyayun
 * @Date: 2023-03-15 19:00:13
 * @Interface:
 * @Description:
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index',
  mode: 'development',
  module: {
    rules: []
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'yywei',
      filename: 'html/index.html',
      template: 'src/Html/index.html',
      inject: true
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/js/main.js',
    clean: true
  },
  devServer: {
    static: 'dist/html/index.html',
    compress: true,
    port: 9000
  }
}
