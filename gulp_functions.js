const gulp = require('gulp');
const gulp_sass = require('gulp-sass');
const gulp_sourcemaps = require('gulp-sourcemaps');
const gulp_pug = require('gulp-pug');
const gulp_uglify = require('gulp-uglify');
const gulp_webserver = require('gulp-webserver');
const gulp_zip = require('gulp-zip');

const paths = require('./gulp_paths').paths;

function compile_sass() {
  return gulp.src(paths.src.sass)
    .pipe(gulp_sourcemaps.init())
    .pipe(gulp_sass({
      outputStyle: 'compressed'
    }).on('error', gulp_sass.logError))
    .pipe(gulp_sourcemaps.write())
    .pipe(gulp.dest(paths.public.css))
}

function compile_pug() {
  return gulp.src(paths.src.pug)
    .pipe(gulp_sourcemaps.init())
    .pipe(gulp_pug())
    .pipe(gulp_sourcemaps.write())
    .pipe(gulp.dest(paths.public.html))
}

function setup_webserver() {
  return gulp.src(paths.public.html)
    .pipe(gulp_webserver({
      livereload: true,
      port: 8003
    }));
}

function setup_zip() {
  let filename = "website-archive-" + Date.now();
  return gulp.src(paths.zip)
    .pipe(gulp_zip(filename))
    .pipe(gulp.dest(paths.public.html));
}

module.exports = {
  compile_sass: compile_sass,
  compile_pug: compile_pug,
  setup_webserver: setup_webserver,
  setup_zip: setup_zip
};