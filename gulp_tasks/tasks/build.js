const gulp = require('gulp');

gulp.task('build', [
  'clean',
  'ejs.build',
  'jsmin',
  'cssmin',
  'imagemin'
]);