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

gulp.task('ejs', () => {
  return gulp.watch("src/**/*.html", ["ejs-build"]);
});
