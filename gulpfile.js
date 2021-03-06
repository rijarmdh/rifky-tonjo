const gulp = require('gulp')
    // const browserSync = require("browser-sync").create()
const gulpSass = require('gulp-sass')


const cssBuild = (cb) => {
    console.log("test hello")

    return gulp.src('./src/css/*.+(sass|scss)') // to match sass or scss extension
        .pipe(gulpSass())
        .pipe(gulp.dest('dist'))
}


exports.default = () => gulp.watch("./src/css/*.+(sass|scss)", gulp.series(cssBuild))