/**
 * Size report
 */
const gulp = require('gulp');
const sizereport = require('gulp-sizereport');
const path = require('path');

const config = require('./config.json');

gulp.task('size', () =>
  // gulp.src(path.join(__dirname, config.root.dist, '**/*.+(js|css|html|png|jpg|svg|woff)')).pipe(
  gulp.src(path.join(__dirname, config.root.dist, '**/*.+(js|css|html|gz|br|png|woff|svg)')).pipe(
    sizereport({
      fail: true,
      gzip: false,
      '*': {
        maxGzippedSize: 250000,
      },
      'index.html': {
        maxSize: 100000,
        maxGzippedSize: 30000,
      },
    })
  )
);
