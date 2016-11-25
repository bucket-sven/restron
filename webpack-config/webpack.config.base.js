var webpack = require('webpack');
var validate = require('webpack-validator');
var path = require('path');
var fs = require('fs');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var NODE_ENV = process.env.NODE_ENV || 'development';

var config = {
  // key是生成文件的路径, value是源文件路径
  entry: {
    'bundle': './src/index.jsx',
    'main': './src/main.jsx'
  },

  // 解决__dirname和__filename路径混乱的问题
  node: {
    __filename: false,
    __dirname: false
  },

  // webpack重实现了require方法，导致大量原生包无法调用，据说也可以添加这句："var fs = global.require('fs')"
  target: 'atom',

  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: "[name].js"
  },

  module: {
    preLoaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        //test: path.join(__dirname, 'es6'),
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ['transform-object-rest-spread', 'transform-runtime']
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract("style", "css!sass")
      },
      {
        test: /\.(css)$/,
        //exclude: /node_modules/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        //loader: 'file-loader?limit=50000&name=[path][name].[ext]',
        loader: 'url-loader?limit=50000&name=[path][name].[ext]'
      }
    ]
  },

  resolve: {
    root: path.join(__dirname, '..', 'src'),
    extensions: ['', '.css', '.scss', '.js', '.jsx']
  },

  // watch: NODE_ENV === 'development',

  eslint: {
    configFile: './.eslintrc'
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: false, //不添加entry列表里的文件到index.html
      template: path.join(__dirname, "../src/index.html") //new 一个这个插件的实例，并传入相关的参数
    }),
    new ExtractTextPlugin("css/style.css")
  ]

}

let baseConfig = validate(config)

module.exports = baseConfig
