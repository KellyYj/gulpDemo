var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var browser = require('gulp-browserify');
var minifyCss = require('gulp-minify-css');
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');

//var paths = {
//	scripts:['js/index.js']
//}

gulp.task('concatcss',function(){
	gulp.src(['css/index.css','css/myIndex.css'])
	.pipe(concat('index.min.css'))
	.pipe(minifyCss())
	.pipe(gulp.dest('./build'));
});


gulp.task('default',['concatcss'],function(){
	gulp.src('./src/js/index.js')
	.pipe(uglify())  //压缩
	.pipe(gulp.dest('./build'));
});
