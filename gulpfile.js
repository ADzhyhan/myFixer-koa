/* eslint-disable linebreak-style */
const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');

function style() {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: false,
    }))
    .pipe(cleanCSS({
      compatibility: 'ie8',
    }))
    .pipe(gulp.dest('src/public/stylesheets'));
}

async function build() {
  await style();
}

exports.style = style;
exports.build = build;
exports.default = build;
