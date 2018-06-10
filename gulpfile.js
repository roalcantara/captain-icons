'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('dist:clean', function () {
  return gulp.src('./dist', {read: false})
    .pipe(clean());
});

gulp.task('build', [
  'dist:clean'
]);
