const gulp = require('gulp');
const gutil = require('gulp-util');

gulp.task('default', () => {
  gutil.log('**********************');
  gutil.log('* task tools ');
  gutil.log('* gulp test:');
  gutil.log('* gulp eslint:');
  gutil.log('**********************');
});