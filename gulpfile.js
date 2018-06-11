'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var pug = require('gulp-pug');

gulp.task('dist:clean', function () {
  return gulp.src('./dist', {read: false})
    .pipe(clean());
});

gulp.task('sass:compile', function () {
  return gulp.src('./src/sass/captain-icons.sass')
    .pipe(sass({
      outputStyle: 'extended'
    })
    .on('error', sass.logError))
    .pipe(gulp.dest('dist'));
});

gulp.task('sass:minify', function () {
  return gulp.src('./src/sass/captain-icons.sass')
    .pipe(sass({
      outputStyle: 'compressed'
    })
    .on('error', sass.logError))
    .pipe(concat('captain-icons.min.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('fonts:copy', function () {
  return gulp.src('./src/web-fonts/*.*')
    .pipe(gulp.dest('dist/web-fonts'));
});

gulp.task('pug:compile', function() {
  return gulp.src('./src/index.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./'))
});

gulp.task('build', [
  'dist:clean',
  'sass:compile',
  'sass:minify',
  'fonts:copy',
  'pug:compile'
]);
