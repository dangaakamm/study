var gulp=require("gulp");
var less=require("gulp-less");
var uglify=require("gulp-uglify");
var concat=require("gulp-concat");
gulp.task('default', function() {
    gulp.src("src/**.js").pipe(uglify()).pipe(concat('all-min.js')).pipe(gulp.dest("dest/js"))
});
gulp.task('less', function() {
    gulp.src("src/**.less").pipe(less()).pipe(gulp.dest("dest"))
});