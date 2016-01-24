var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	cssmin = require('gulp-minify-css'),	
	htmlreplace = require('gulp-html-replace'),
	htmlmin = require('gulp-htmlmin'),
	image = require('gulp-image'),
	ngannotate = require('gulp-ng-annotate'),
    plumber = require('gulp-plumber');

gulp.task('default', ['scripts','html','partials','css', 'images', 'watch']);


// scripts
gulp.task('scripts', function () {
	return gulp.src([
		'public/src/js/aboutMe/aboutMe.module.js',
		'public/src/js/frontEnd/frontEnd.module.js',
		'public/src/js/fullStack/fullStack.module.js',
		'public/src/js/homePage/homePage.module.js',
		'public/src/js/microservice/microservice.module.js',
		'public/src/js/posts/posts.module.js',
		'public/src/js/aboutMe/services/aboutMe.service.js',
		'public/src/js/frontEnd/services/frontEnd.service.js',
		'public/src/js/fullStack/services/fullStack.service.js',
		'public/src/js/homePage/services/homePage.service.js',
		'public/src/js/microservice/services/microservice.service.js',
		'public/src/js/posts/services/posts.service.js',
		'public/src/js/aboutMe/controllers/aboutMe.controller.js',
		'public/src/js/frontEnd/controllers/frontEnd.controller.js',
		'public/src/js/fullStack/controllers/fullStack.controller.js',
		'public/src/js/homePage/controllers/homePage.controller.js',
		'public/src/js/microservice/controllers/microservice.controller.js',
		'public/src/js/posts/controllers/posts.controller.js',
		'public/src/js/app.js'])
    .pipe(plumber())
		.pipe(concat('app.bundle.min.js'))
		.pipe(ngannotate())
		.pipe(uglify())
		.pipe(gulp.dest('public/dist/js'));
});

// css
gulp.task('css', function () {
	return gulp.src([
		'public/src/css/styles.css'])
    .pipe(plumber())
		.pipe(concat('bundle.min.css'))
		.pipe(cssmin())
		.pipe(gulp.dest('public/dist/css'));
});

// html partials
gulp.task('partials', ['scripts'], function () {
	gulp.src('public/src/partials/*.html')
    .pipe(plumber())
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest('public/dist/partials'));
});


gulp.task('html', ['scripts'], function () {
	gulp.src('public/src/index.html')
    .pipe(plumber())
		.pipe(htmlreplace({
			'js': 'js/app.bundle.min.js',
			'css':'css/bundle.min.css'
		}))
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest('public/dist'));
});

// images
gulp.task('images', function () {
    return gulp.src('public/src/images/**/*')
        .pipe(plumber())
        .pipe(image())
        .pipe(gulp.dest('public/dist/images'));
});

// watch
gulp.task('watch', function () {
	gulp.watch('public/src/js/**/*', ['scripts']);
	gulp.watch('public/src/images/**/*', ['images']);
	gulp.watch('public/src/css/*', ['css']);
	gulp.watch('public/src/index.html', ['html']);
	gulp.watch('public/src/partials/*', ['partials']);
});