var webpack = require('webpack')
var validate = require('webpack-validator')
var merge = require('webpack-merge')
var formatter = require('eslint-formatter-pretty')
var baseConfig = require('./webpack.config.base')

const port = process.env.PORT || 3000;

module.exports = validate(merge(baseConfig, {
  // devtool: 'source-map',

  debug: true,
  devtool: 'inline-source-map',

  // entry: {
  //   'webpack-dev-server/client?http://127.0.0.1:3000/': 'webpack-dev-server/client?http://127.0.0.1:3000/',
  //   'webpack/hot/only-dev-server': 'webpack/hot/only-dev-server'
  // },
  // output: {
  //   publicPath: 'http://localhost:3000/',
  // },
  eslint: {
    formatter
  },

  target:　'electron-renderer',

  // plugins: [
  //   new webpack.HotModuleReplacementPlugin(),
  //   // new webpack.DefinePlugin({
  //   //   'process.env.NODE_ENV': JSON.stringify('development')
  //   // })
  // ]
}))
