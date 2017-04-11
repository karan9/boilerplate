// import npm modules
const gulp = require('gulp');
// private imports
const functions = require('./gulp_functions');
const paths = require('./gulp_paths').paths;
// gulp compilation
gulp.task('sass', functions.compile_sass);
gulp.task('pug', functions.compile_pug);
gulp.task('webserver', functions.setup_webserver);
gulp.task('zipit', functions.setup_zip);

gulp.task('batman', () => {
    gulp.watch(paths.src.sass, functions.compile_sass);
    gulp.watch(paths.src.pug, functions.compile_pug);
});

gulp.task('init', () => {
    gulp.start('sass', 'pug');
});

gulp.task('default', () => {
    gulp.start(
        'sass', 
        'pug', 
        'webserver',
        'batman'
    );
});
