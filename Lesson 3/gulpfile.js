var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function () {
	return browserSync.init({
		server: './'
	});
});

gulp.task('watch', function () {
	return gulp.watch('sass/**/*.scss', gulp.series('styles'));
});

gulp.task('styles', function () {
	return gulp.src('sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest('./css'))
		.pipe(browserSync.stream());
});

// Default Task
gulp.task('default', gulp.parallel('styles', 'browserSync', 'watch'));