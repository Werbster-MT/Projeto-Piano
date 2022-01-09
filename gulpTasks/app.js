const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const sass = require('gulp-sass')(require('sass'))
const concat =  require('gulp-concat')
const htmlmin = require('gulp-htmlmin')

function appHtml(){
    return gulp.src('src/**/*.html ')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('build'))
}

function appCSS(){
    return gulp.src('src/assets/sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({"uglyComments": true}))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('build/assets/css'))
}

function appJS() {
    return gulp.src('src/assets/js/**/*.js')
        .pipe(babel({"presets": ["@babel/preset-env"]}))
        .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('build/assets/js'))
}

function appSounds(){
    return gulp.src('src/assets/sounds/**/*.*')
        .pipe(gulp.dest('build/assets/sounds'))
}

gulp.task('appHtml', appHtml)
gulp.task('appCSS', appCSS)
gulp.task('appJS', appJS)
gulp.task('appSounds', appSounds)

module.exports = {
    appHtml,
    appCSS,
    appJS,
    appSounds
}