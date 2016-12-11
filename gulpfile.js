const gulp = require('gulp')
const sass = require('gulp-sass')
const babel = require('gulp-babel')
const concat = require('gulp-concat')
const minify = require('gulp-minify')

gulp.task('styles', () => {
  gulp.src('./src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/stylesheets/'))
})

gulp.task('scripts', function() {
  gulp.src('./src/**/*.js')
    .pipe(babel({presets: ['es2015']}))
    .pipe(concat('main.js'))
    .pipe(minify())
    .pipe(gulp.dest('./build/javascripts/'))
})

gulp.task('watch', function() {
  gulp.watch('./src/sass/*.scss', ['styles'])
  gulp.watch('./src/javascripts/**/*.js', ['scripts'])
})

gulp.task('default', ['watch', 'styles', 'scripts'])
