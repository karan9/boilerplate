
// path defines for our current folder structure
const paths = {
    src: {
        pug: './src/pug/**/**/*.pug',
        sass: './src/sass/**/**/*.sass',
        img: './src/assets/**/**/*.*',
        js: './src/js/**/**/*.js'
    },
    public: {
        html: './public/',
        css: './public/css/',
        img: './public/assets/',
        js: './public/js/'
    },
    zip: './public/**/**/*.*'
}


module.exports.paths = paths;