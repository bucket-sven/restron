var gulp = require('gulp')
var gutil = require('gulp-util')
var webpack = require('webpack')
var webpackConfig = require('./webpack.config')
var electron = require('gulp-run-electron')
var env = require('gulp-env')
var shell = require('shelljs')
var path = require('path')
var clean = require('gulp-clean')

gulp.task('webpack', (cb) => {
  webpack(webpackConfig, function(err, stats) {
    if(err) throw new gutil.PluginError('webpack', err);
    gutil.log("[webpack]", stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }))
    cb();
  })
})

gulp.task('start', ['webpack'], (cb) => {
  const envs = env.set({
    NODE_ENV: process.env.NODE_ENV || 'development'
  })
  gulp.src('')
      .pipe(envs)
      .pipe(electron(['--cli-arguments', '--another'], {cwd: __dirname}))

  gulp.watch(['./src/**/*.jsx', './src/**/*.js']).on('change', (e) => {
    gulp.start('webpack')
  })
  gulp.watch("dist/**/*.js", electron.rerun);
  cb()
})

gulp.task('clean', (cb) => {
  return gulp.src('dist')
             .pipe(clean());
})

gulp.task('build', ['webpack'], (cb) => {
  var platform = process.platform
  var icon = path.resolve(__dirname, "public", "img", "guitar25.png")
  var version = '1.4.4'
  shell.exec(`node_modules/electron-packager/cli.js ./ restron --platform=${platform} --version=${version} --out=./package --overwrite --icon=${icon}`, { async: true}, function(code, output) {
    console.log("Exit with code: ", code);
    console.log(output);
  })
})
