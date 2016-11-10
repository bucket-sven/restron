var gulp = require('gulp')
var gutil = require('gulp-util')
var webpack = require('webpack')
var electron = require('gulp-run-electron')
var env = require('gulp-env')
var shell = require('shelljs')
var path = require('path')
var clean = require('gulp-clean')
var electronInfo = require('electron/package.json')

gulp.task('webpack', (cb) => {
  let webpackConfig = require('./webpack-config/webpack.config.development')
  webpack(webpackConfig, function(err, stats) {
    if(err) throw new gutil.PluginError('webpack', err);
    gutil.log("[webpack]", stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }))
  })
  cb()
})

gulp.task('webpack-production', (cb) => {
  let webpackConfig = require('./webpack-config/webpack.config.production')
  webpack(webpackConfig, function(err, stats) {
    if(err) throw new gutil.PluginError('webpack', err);
    gutil.log("[webpack]", stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }))
  })
  cb()
})

gulp.task('start', (cb) => {
  const envs = env.set({
    NODE_ENV: process.env.NODE_ENV || 'development'
  })
  gulp.src('')
      .pipe(envs)
      .pipe(electron(['--cli-arguments', '--another'], {cwd: __dirname}))

  // gulp.watch(['./src/**/*.jsx', './src/**/*.js']).on('change', (e) => {
  //   gulp.start('webpack')
  // })
  // gulp.watch("dist/**/*.js", electron.rerun);
  // cb()
})

gulp.task('clean', (cb) => {
  return gulp.src('dist')
             .pipe(clean());
})

gulp.task('build', ['webpack-production'], (cb) => {
  var platform = process.platform
  var icon = path.resolve(__dirname, "public", "img", "logo.icns")
  shell.exec(`node_modules/electron-packager/cli.js ./ restron --platform=${platform} --version=${electronInfo.version} --out=./package --overwrite --icon=${icon} --asar=true`, { async: true}, function(code, output) {
    if (code === 0) {
      console.log("Package finished.");
    } else{
      console.log("Exit with code: ", code);
      console.log(output);
    }
  })
})
