const gulp = require('gulp')
const {series, parallel} = require('gulp')
const { appHtml, appCSS, appJS, appSounds } = require('./gulpTasks/app')
const { watchFiles, server } = require('./gulpTasks/server')

module.exports.default = series(
    parallel(
        series(appHtml, appCSS, appJS, appSounds)
    ),
    server,
    watchFiles
)
