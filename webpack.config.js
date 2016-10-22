var webpack = require('webpack')
var path = require('path')
var fs = require('fs')
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: {
    'components/index': './src/components/index.jsx',
    'main': './src/main.jsx'
  },

  node: {
    __filename: false,
    __dirname: false
  },

  // webpack重实现了require方法，导致大量原生包无法调用，据说也可以添加这句："var fs = global.require('fs')"
  target: 'atom',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js"
  },

  module: {
    loaders: [
      {
        //test: path.join(__dirname, 'es6'),
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-object-rest-spread']
        }
      },
      /*
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader?limit=50000&name=[path][name].[ext]'
      }
      */
    ]
  },

  resolve: [
    {
      root: __dirname + "/dist",
      extesions: ['.css', '.scss']
    }
  ],

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'html/index.html',
      inject: false, //not add js files in entry list
      template: __dirname + "/src/html/index.html" //new 一个这个插件的实例，并传入相关的参数
    })
  ]
}

module.exports = config
