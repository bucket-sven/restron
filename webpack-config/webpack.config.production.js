var webpack = require('webpack')
var validate = require('webpack-validator')
var merge = require('webpack-merge')
var formatter = require('eslint-formatter-pretty')
var baseConfig = require('./webpack.config.base')

module.exports = validate(merge(baseConfig, {

  eslint: {
    formatter
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}))
