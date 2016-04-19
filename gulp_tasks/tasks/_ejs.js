const gulp = require('gulp');
const ejs = require('gulp-ejs');
const gutil = require('gulp-util');
const htmlmin = require('gulp-htmlmin');
const watch = require('gulp-watch');
const cssmin = require('gulp-cssmin');
const sass = require('gulp-sass');
const jsmin = require('gulp-jsmin');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('ejs.build', () => {
  return gulp.src('src/**/*.html')
    .pipe(ejs().on('error', gutil.log))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('ejs.watch', () => {
  gulp.watch("src/**/*.{html,ejs}", ["ejs.build"]);
});

gulp.task('cssmin', () => {
  return gulp.src('src/**/*.scss')
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sass().on('error', sass.logError))
		.pipe(cssmin())
    .pipe(sourcemaps.write('maps'))
		.pipe(gulp.dest('dist'));
});

gulp.task('scss.watch', function() {
  gulp.watch('src/**/*.scss', ['cssmin']);
});

gulp.task('jsmin', () => {
  return gulp.src('src/**/*.js')
    .pipe(sourcemaps.init({loadMaps: true}))
		.pipe(jsmin())
    .pipe(sourcemaps.write('maps'))
		.pipe(gulp.dest('dist'));
});

gulp.task('js.watch', function() {
  gulp.watch('src/**/*.js', ['jsmin']);
});
