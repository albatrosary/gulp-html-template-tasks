const gulp = require('gulp');
const del = require('del');

gulp.task('clean', del.sync(null, ['.tmp', 'dist']));