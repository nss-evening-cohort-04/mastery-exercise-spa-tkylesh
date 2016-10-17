var gulp = require('gulp');
var jshint = require('gulp-jshint');
var watch = require('gulp-watch');

gulp.task('default', ['lint', 'watch']);

gulp.task('watch', function() {
  gulp.watch('path/to/javascript/files/**/*.js', ['lint']);
});

/*
  Notice how a Gulp task is written just like chained
  methods on an array that you would use in your production
  code. Gulp libraries expose more fine-grained interfaces
  and the developer calls them in whichever order is needed
  using `.pipe()` to send the results of one to the next.
 */
gulp.task('lint', function() {
  return gulp.src(['path/to/javascript/files/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .on('error', function() {}
  );
});