const gulp = require('gulp')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const minify = require('gulp-minify')

gulp.task('default', ['styles', 'js'], function() {
  gulp.start('styles', 'js')
    return gulp.watch('./src/sass/**/*.scss',['styles'])
})

gulp.task('styles', function() {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build/css/'))
})

gulp.task('js', function() {
    return gulp.src('./src/javascripts/*.js')
        .pipe(concat('main.js'))
        .pipe(minify())
        .pipe(gulp.dest('./build/javascripts/'))
})
