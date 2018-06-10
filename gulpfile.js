'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('dist:clean', function () {
  return gulp.src('./dist', {read: false})
    .pipe(clean());
});

gulp.task('sass:compile', function () {
  return gulp.src('./src/sass/main.sass')
    .pipe(sass({
      outputStyle: 'extended'
    })
    .on('error', sass.logError))
    .pipe(concat('captain-icons.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('sass:minify', function () {
  return gulp.src('./src/sass/main.sass')
    .pipe(sass({
      outputStyle: 'compressed'
    })
    .on('error', sass.logError))
    .pipe(concat('captain-icons.min.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('build', [
  'dist:clean',
  'sass:compile',
  'sass:minify'
]);