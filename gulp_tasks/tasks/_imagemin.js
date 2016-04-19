const gulp = require('gulp');
const watch = require('gulp-watch');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminSvgo = require('imagemin-svgo');

gulp.task('pngmin', () => {
  gulp.src('src/**/*.png')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [
        {removeViewBox: false},
        {cleanupIDs: false}
      ],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('dist'));
}); 

gulp.task('png.watch', function() {
  gulp.watch('src/**/*.png', ['pngmin']);
});

gulp.task('svgmin', () => {
  gulp.src('src/**/*.svg')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [
        {removeViewBox: false},
        {cleanupIDs: false}
      ],
      use: [imageminSvgo()]
    }))
    .pipe(gulp.dest('dist'));
}); 

gulp.task('svg.watch', function() {
  gulp.watch('src/**/*.svg', ['svgmin']);
});

gulp.task('jpgmin', () => {
  gulp.src('src/**/*.jpg')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [
        {removeViewBox: false},
        {cleanupIDs: false}
      ],
      use: [imageminJpegtran({progressive: true})]
    }))
    .pipe(gulp.dest('dist'));
}); 


gulp.task('jpg.watch', function() {
  gulp.watch('src/**/*.jpg', ['jpgmin']);
});

gulp.task('imagemin', ['pngmin', 'jpgmin', 'svgmin']);

