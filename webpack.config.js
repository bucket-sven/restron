var webpack = require('webpack')
var path = require('path')
var fs = require('fs')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var NODE_ENV = process.env.NODE_ENV || 'development';

var config = {
  // key是生成文件的路径, value是源文件路径
  deltool: 'source-map',
  entry: {
    './js/bundle': [
      //'./src/js/home.jsx',
      './src/js/entry.jsx'
    ],
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
    path: path.join(__dirname, 'dist'),
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
      {
        test: /\.css$/,
        //exclude: /node_modules/,
        loader: ExtractTextPlugin.extract("style-loader","css-loader")
        //loader: 'style!css'
      }
      /*
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader?limit=50000&name=[path][name].[ext]'
      }
      */
    ]
  },

  resolve: {
    root: path.resolve(__dirname, 'src'),
    extensions: ['', '.css', '.js', '.jsx']
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'html/index.html',
      inject: false, //不添加entry列表里的文件到index.html
      template: __dirname + "/src/html/index.html" //new 一个这个插件的实例，并传入相关的参数
    }),
    new ExtractTextPlugin("css/style.css")
  ]
}

if (NODE_ENV == 'production') {
  let conf = [new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }), new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify(NODE_ENV)
    }
  })];
  conf.forEach((c) => {
    config.plugins.push(c)
  })
}

module.exports = config
