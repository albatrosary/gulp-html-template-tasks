const gulp = require('gulp');

gulp.task('watch', [
  'png.watch',
  'jpg.watch',
  'svg.watch',
  'js.watch',
  'scss.watch',
  'ejs.watch'
]);