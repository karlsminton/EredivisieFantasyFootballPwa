const gulp = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const del = require('del');

gulp.task('styles', () => {
  return gulp.src('src/assets/css/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/'));
});

gulp.task('clean', () => {
  return del([
    'assets/css/style.css'
  ]);
});

gulp.task('watch', () => {
  gulp.watch('src/assets/css/scss/*.scss', (done) => {
    gulp.series(['clean', 'styles'])(done)
  })
})

gulp.task('default', gulp.series(['clean', 'styles']));
