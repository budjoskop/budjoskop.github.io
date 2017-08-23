var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');


gulp.task('sass', function(){
  return gulp.src('scss/main.scss')
    //.pipe(plumber())
    .pipe(sass().on('error', sass.logError)) 
    .pipe(gulp.dest('style/'))
    .pipe(browserSync.stream());
    
});


gulp.task("watch",function(){
  browserSync.init({
    server: {
      baseDir: ''
    },
  });
  gulp.watch("scss/*.scss",['sass']);
  gulp.watch('*.html', browserSync.reload); 
   
});
gulp.task('default', ['watch']);