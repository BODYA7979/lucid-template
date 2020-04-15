const gulp = require('gulp');
const connect = require('gulp-connect');
const sass = require('gulp-sass');
const include = require('gulp-include');
const uglify = require('gulp-uglify');
const csso = require('gulp-csso');
const del = require('del');
const webServerPort = 54234;
const autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function () {
  return gulp.src('./assets/scss/app.scss')
      .pipe(sass({
          outputStyle: 'nested',
          precision: 10,
          includePaths: ['node_modules'],
          onError: console.error.bind(console, 'Sass error:')
      }))
      .pipe(include())
      .pipe(autoprefixer({
          cascade: false
      }))
      .pipe(csso())
      .pipe(gulp.dest('./assets/dist/css'));
});

gulp.task('scripts', function () {
  return gulp.src('./assets/js/*.js')
      .pipe(include())
      .pipe(uglify())
      .pipe(gulp.dest('./assets/dist/js'));
});

gulp.task('clean', function () {
  return del(['dist']);
});

gulp.task('build', gulp.series(['clean', 'styles', 'scripts']));

gulp.task('server', function (done) {
    connect.server({
        livereload: false,
        port: webServerPort
    });
    done();
});

gulp.task('livereload', function () {
    return gulp.src('*.html').pipe(connect.reload());
});

gulp.task('watch', function(done) {
    connect.server({
        livereload: true,
        port: webServerPort
    });
    gulp.watch('./assets/js/*.js', gulp.series(['build', 'livereload']));
    gulp.watch('./assets/scss/**/*.scss', gulp.series(['build', 'livereload']));
    gulp.watch('*.html', gulp.series('livereload'));
    done();
});
