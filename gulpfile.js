const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('hello', function(done) {
  console.log('Привет мир!');
  done();
});

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch("app/*.html").on('change', browserSync.reload);
});

var config = {
  srcDir: './src',
  sassPattern: 'sass/**/*.scss'
};

var gulp = require('gulp'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  concat = require('gulp-concat'),
  cleanCSS = require('gulp-clean-css');

gulp.task('sass', function () {
  return gulp.src([config.srcDir+'/sass/libs.scss', config.srcDir+'/sass/style.scss', config.srcDir+'/sass/responsive.scss'])
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(concat('main.css'))
  .pipe(cleanCSS())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./design/okay_shop/css'));
});

gulp.task('watch', function () {
  gulp.watch(config.srcDir+'/'+config.sassPattern, ['sass'])
});
