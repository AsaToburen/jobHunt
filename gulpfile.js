var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    inject = require('gulp-inject'),
    concat = require('gulp-concat'),
    usemin = require('gulp-usemin'),
    cache = require('gulp-cache'),
    rev = require('gulp-rev'),
    uglify = require('gulp-uglify'),
    minifyHtml = require('gulp-minify-html'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    minifyCss = require('gulp-minify-css'),
    del = require('del');

gulp.task('copy-html-files', function() {
    gulp.src(['./public/**/*.html', './public/**/**/*.html', '!./public/index.html'], {
            base: './public'
        })
        .pipe(gulp.dest('dist/'));
});

gulp.task('copyfonts', function() {
    gulp.src('./public/fonts/bootstrap/*.{ttf,woff,woff2,eof,svg}')
        .pipe(gulp.dest('dist/fonts/bootstrap'));
});

gulp.task('images', function() {
    gulp.src('./public/images/*')
        .pipe(cache(imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images/'));
});

gulp.task('usemin', function() {
    gulp.src('./public/index.html')
        .pipe(usemin({
            html: [minifyHtml({
                empty: true
            })],
            css: [autoprefixer('last 2 versions'), minifyCss(), 'concat', rev()],
            vendor: [rev()],
            js: [uglify().on('error', function(e) {
                    console.log('\x07', e.message);
                    return this.end();
                }),
                rev()
            ]
        }))
        .pipe(gulp.dest('dist/'));
});


gulp.task('sass', function() {
    return sass(
            './public/sass', {
                sourcemap: true
            })
        .on('error', function(err) {
            console.error('Error!', err.message);
        })
        .pipe(sourcemaps.write('./', {
            includeContent: false,
            sourceRoot: './public/sass'
        }))
        .pipe(gulp.dest('public/css/'));
});



gulp.task('clean:dist', function(cb) {
    del('./dist', cb);
});

gulp.task('default', function() {
    gulp.watch('./public/sass/**/*.scss', ['sass']);
    gulp.watch('./public/images/*', ['images']);
});

gulp.task('clean', ['clean:dist']);

gulp.task('build', ['copy-html-files', 'copyfonts', 'images', 'usemin']);
