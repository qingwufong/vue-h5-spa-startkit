var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.config.js');

// 清空基本配置的插件列表
webpackBaseConfig.plugins = [];

module.exports = merge(webpackBaseConfig, {
  output: {
    publicPath: '/demo/dist/', // demo是context path, nginx的location也要配置成它
    // 将入口文件重命名为带有20位hash值的唯一文件
    filename: '[name].[hash].js'
  },
  plugins: [
    new ExtractTextPlugin({
      // 提取css，并重命名为带有20位hash值的唯一文件
      filename: '[name].[hash].css',
      allChunks: true
    }),
    // 定义当前node环境为生产环境
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    // 压缩js
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    // optimize module ids by occurrence count
    new webpack.optimize.OccurrenceOrderPlugin(),
    // 清空dist目录
    new CleanWebpackPlugin(['dist']),
    // 提取模板，并保存入口HTML文件
    new HtmlWebpackPlugin({
      filename: '../index_prod.html',
      template: './index.ejs',
      inject: true
    })
  ]
})
