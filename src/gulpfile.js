const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

function compileGlobalSCSS() {
  return gulp
    .src('./src/styles/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/styles'));
}

function compileComponentSCSS() {
  return gulp
    .src('./src/components/**/*.scss') // Match all SCSS files in components
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/components'));
}

function minifyGlobalCSS() {
  return gulp
    .src('./src/styles/index.css')
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./src/styles'));
}

function minifyComponentCSS() {
  return gulp
    .src('./src/components/**/*.css') // Match all CSS files in components
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./src/components'));
}

function watchFiles() {
  gulp.watch('./src/styles/index.scss', gulp.series(compileGlobalSCSS, minifyGlobalCSS));
  gulp.watch('./src/components/**/*.scss', gulp.series(compileComponentSCSS, minifyComponentCSS));
}

exports.default = gulp.series(compileGlobalSCSS, compileComponentSCSS, minifyGlobalCSS, minifyComponentCSS, watchFiles);
