/**
 * gzip build filed
 */
const path = require('path');
const gulp = require('gulp');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const brotli = require('gulp-brotli');

const config = require('./config');

gulp.task('brotli', function() {
  gulp
    .src(path.join(__dirname, config.root.dist, '**/*.+(js|html|css)'))
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(brotli.compress({
      skipLarger: true,
      mode: 0,
      quality: 11,
      lgblock: 0
    }))
    .pipe(gulp.dest(path.join(__dirname, config.root.dist)));
});
