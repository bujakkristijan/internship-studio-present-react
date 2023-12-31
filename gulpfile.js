const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

// Paths
const paths = {
  styles: {
    src: 'src/**/*.scss',
    dest: 'src' // Output to the same src folder
  }
};

// Compile SCSS to CSS
function style() {
  return gulp
    .src(paths.styles.src)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.styles.dest));
}

// Watch for changes
function watch() {
  gulp.watch(paths.styles.src, style);
}

exports.style = style;
exports.watch = watch;

// Default task
gulp.task('default', gulp.series(style, watch));
