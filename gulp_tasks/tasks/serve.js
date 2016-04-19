const gulp = require('gulp');

gulp.task('serve', [
  'clean',
  'ejs.build',
  'jsmin',
  'cssmin',
  'imagemin',
  'watch'
]);