const gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    minifyjs = require('gulp-js-minify'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    babel = require('gulp-babel'),
    cleanCSS = require('gulp-clean-css'),
    clean = require('gulp-clean'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    autoprefixer = require('gulp-autoprefixer'),
    rigger = require('gulp-rigger'),
    gulpSequence = require('gulp-sequence'),
    reload = browserSync.reload;
sass.compiler = require('node-sass');

const path = {
    dist: { //Тут мы укажем куда складывать готовые после сборки файлы
        html: 'dist/',
        js: 'dist/js/',
        css: 'dist/css/',
        img: 'dist/img/',
        fonts: 'dist/fonts/'
    },
    src: { //Пути откуда брать исходники
        html: 'src/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        js: 'src/js/main.js',//В стилях и скриптах нам понадобятся только main файлы
        style: 'src/scss/style.scss',
        img: 'src/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        fonts: 'src/fonts/**/*.*'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/style/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './dist'
};
const config = {
    server: {
        baseDir: "./dist"
    },
    tunnel: true,
    host: 'localhost',
    port: 8888,
    logPrefix: ""
};
//Task CLEAN
gulp.task('clean', function (){
    return gulp.src(path.clean, {read: false})
        .pipe(clean());
});
//Task HTML
gulp.task('html', function () {
    return gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.dist.html));
});
//Task SCSS
gulp.task('sass', function () {
    return gulp.src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest( 'src/css'));
});
gulp.task('prefixer', ['sass'], () =>
    gulp.src('src/css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 15 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('src/css'))
);

gulp.task('mini-css', ['prefixer'], () => {
    return gulp.src('./src/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename("/style.min.css"))
        .pipe(gulp.dest('dist/css'));
});
//Task JS
gulp.task('concat-js', function () {
    return gulp.src(['./src/js/**/*.js', '!./src/js/main.js'])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./src/js'));
});
gulp.task('transpile', ['concat-js'], function () {
    return gulp.src('./src/js/main.js')
        .pipe(babel({presets: ["@babel/env"]}))
        .pipe(gulp.dest('./src/js'));
});
gulp.task('compress-copy', ['transpile'], function (cb) {
    pump([
            gulp.src('./src/js/main.js'),
            uglify(),
            rename("/main.min.js"),
            gulp.dest('./dist/js')
        ],
        cb
    );
});
//Task SERVER
gulp.task('serve', function () {
    browserSync.init(config);
    gulp.watch('./src/**/*.html', ['html']).on('change', reload);
    gulp.watch('./src/scss/**/*.scss', ['mini-css']).on('change', reload);
    gulp.watch(['./src/js/**/*.js', '!./src/js/main.js'], ['compress-copy']).on('change', reload);
});
//Task IMG
gulp.task('img-minify', () =>
    gulp.src(path.src.img)
        .pipe(imagemin())
        .pipe(gulp.dest(path.dist.img))
);
//Task FONTS
gulp.task('fonts', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.dist.fonts))
});
//Task  DEV
gulp.task('dev', gulpSequence('clean', ['html', 'compress-copy', 'mini-css', 'img-minify', 'fonts'], 'serve'));

