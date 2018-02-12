// var gulp        = require('gulp');
// var browserSync = require('browser-sync').create();

// // Static server
// gulp.task('browser-sync', function() {
//     browserSync.init({
//         server: {
//             baseDir: "./"
//         }
//     });
// });
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// Save a reference to the `reload` method

gulp.task('default', ['browser'])
    // Watch scss AND html files, doing different things with each.
gulp.task('browser', function() {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        },

        port: 8080
    });

    //laravel config
    gulp.watch("*.html").on("change", reload);
    gulp.watch("js/**/*.js").on("change", reload);
});