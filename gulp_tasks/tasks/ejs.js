const gulp = require('gulp');
const ejs = require('gulp-ejs');
const gutil = require('gulp-util');
const htmlmin = require('gulp-htmlmin');
const watch = require('gulp-watch');
const cssmin = require('gulp-cssmin');
const jsmin = require('gulp-jsmin');

gulp.task('ejs-build', () => {
  return gulp.src('src/**/*.html')
    .pipe(ejs().on('error', gutil.log))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
});

gulp.task('cssmin', () => {
  return gulp.src('src/**/*.css')
    .pipe(watch("src/**/*.css"))
		.pipe(cssmin())
		.pipe(gulp.dest('dist'));
});

gulp.task('jsmin', () => {
  return gulp.src('src/**/*.js')
    .pipe(watch("src/**/*.js"))
		.pipe(jsmin())
		.pipe(gulp.dest('dist'));
});

gulp.task('watch', () => {
  return gulp
    .watch("src/**/*.html", ["ejs-build"]);
});

gulp.task('ejs', ['ejs-build', 'jsmin', 'cssmin', 'imagemin', 'watch']);
 
