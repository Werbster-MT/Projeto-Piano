const { series } = require('gulp')
const gulp = require('gulp')
const watch = require('gulp-watch')
const webServer = require('gulp-webserver')

function watchFiles(){
    watch('src/**/*.html', () => gulp.series('appHtml')()) 
    watch('src/**/*.scss', () => gulp.series('appCSS')()) 
    watch('src/**/*.js', () => gulp.series('appJS')()) 
    watch('src/assets/sounds/*.*', () => gulp.series('appSounds')()) 
}

function server(){
    return gulp.src('build')
        .pipe(webServer({
            port: 8080,
            open: true,
            livereload: true 
        }))
}

module.exports = {
    watchFiles,
    server
}