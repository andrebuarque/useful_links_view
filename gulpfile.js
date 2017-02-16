var gulp = require('gulp');
var concat = require('gulp-concat');
var strip = require('gulp-strip-comments');
var removeEmptyLines = require('gulp-remove-empty-lines');

gulp.task('scripts', function() {
  return gulp.src([
  		'./src/vendor/jquery/dist/jquery.min.js', 
  		'./src/vendor/bootstrap/dist/js/bootstrap.min.js', 
  		'./src/vendor/metisMenu/dist/metisMenu.min.js',
  		'./src/vendor/custom/js/sb-admin-2.js'
  	])
    .pipe(concat('scripts.js'))
    .pipe(strip())
    .pipe(removeEmptyLines())
    .pipe(gulp.dest('./public'));
});