var gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins();

gulp.task('build', ['css', 'js', 'html']);

gulp.task('watch', function() {
    gulp.watch('src/less/*.less', ['css']);
    gulp.watch('src/js/*.js', ['js']);
    gulp.watch('src/index.html', ['html']);
});

gulp.task('css', function () {
    return gulp.src([
	'src/less/desplo.less'
    ])
	.pipe(plugins.plumber())
    /* Sourcemap init before supported plugins */
	.pipe(plugins.sourcemaps.init())
	.pipe(plugins.less())
	.pipe(plugins.autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
	.pipe(plugins.concat('desplo.css'))
    /* Sourcemap write after supported plugins */
       	.pipe(plugins.sourcemaps.write())
	.pipe(gulp.dest('build/css'))
	.pipe(plugins.livereload());
});

gulp.task('js', function () {
    return gulp.src([
	'src/js/underscore.js',
	'src/js/desplo.js'
    ])
	.pipe(plugins.plumber())
	.pipe(plugins.jshint())
	.pipe(plugins.jshint.reporter('default'))
    /* Sourcemap init before supported plugins */
	.pipe(plugins.sourcemaps.init()) 
	.pipe(plugins.uglify())
	.pipe(plugins.concat('desplo.js'))
    /* Sourcemap write after supported plugins */
    	.pipe(plugins.sourcemaps.write())
	.pipe(gulp.dest('build/js'))
	.pipe(plugins.livereload());
});

gulp.task('html', function () {
    return gulp.src('src/index.html')
	.pipe(plugins.plumber())
	.pipe(gulp.dest('build/'))
	.pipe(plugins.livereload());
});
