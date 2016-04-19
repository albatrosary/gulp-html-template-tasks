const gulp = require('gulp');
const ejs = require('gulp-ejs');
const gutil = require('gulp-util');
const htmlmin = require('gulp-htmlmin');
const watch = require('gulp-watch');

gulp.task('ejs-build', () => {
  return gulp.src('src/**/*.html')
    .pipe(ejs().on('error', gutil.log))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
});

gulp.task('cssmin', () => {
  return gulp.src('src/**/*.css')
		.pipe(cssmin())
		.pipe(gulp.dest('dist'));
});

gulp.task('jsmin', () => {
  
});

gulp.task('ejs-watch', () => {
  return gulp
    .watch("src/**/*.html", ["ejs-build"]);
});

gulp.task('ejs', ['ejs-build', 'jsmin', 'cssmin', 'ejs-watch']);
 
