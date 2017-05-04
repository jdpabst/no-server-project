// STEP ONE: IMPORT 

var gulp = require('gulp');
var concat = require('gulp-concat');
var annotate = require('gulp-ng-annotate');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
// STEP TWO: TELL GULP WHERE TO PUT EVERYTHING

var paths = {
    // find every js file in app folder:
    jsSource: ['public/app/**/*.js'],
    cssSource: ['public/app/**/*.scss'],
    // want to include the index.html
    viewsSource: ['public/**/*.html'],
    imageSource:['public/img/**/*.*']


};



// STEP THREE: BUILDING TASKS

gulp.task('js', function(){
    gulp.src(paths.jsSource)
        .pipe(annotate())
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('bundle.js'))    //PUTS EVERYTHING FROM JS INTO BUNDLE.JS, SAME FOR OTHER FOLDERS USING CONCAT...
        .pipe(gulp.dest('./dist'))
});

gulp.task('css', function(){
    gulp.src(paths.cssSource)
        .pipe(sass())
        .pipe(concat('bundle.css')) 
        .pipe(gulp.dest('./dist'))
})

gulp.task('views', function(){
   gulp.src(paths.viewsSource)
    .pipe(gulp.dest('./dist'))


});

gulp.task('pics', function(){
    gulp.src(paths.imageSource)
       .pipe(gulp.dest('./dist/img/'))
})

// STEP FOUR: WATCHING YOUR FILES FOR CHANGES
// WATCH FOR CHANGES IN THE FILE LOCATIONS, CHANGES BUNDLE TO MATCH


gulp.task('watch', function(){
    gulp.watch(paths.jsSource, ['js']);   //ONLY WATCHING JS TO RE-BUILD JS ETC...
    gulp.watch(paths.cssSource, ['css'])
    gulp.watch(paths.viewsSource, ['views']);
    gulp.watch(paths.imageSource, ['pics']);
});

// STEP FIVE: SET A DEFAULT FOR WHEN YOU TYPE GULP
// RUNS ALL OF THE TASKS AT ONCE

gulp.task('default', ['js', 'views', 'css', 'watch', 'pics']);