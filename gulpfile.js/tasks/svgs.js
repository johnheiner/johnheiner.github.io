if (!TASK_CONFIG.images) return

var browserSync = require('browser-sync')
var changed = require('gulp-changed')
var gulp = require('gulp')
var path = require('path')
var svgmin = require('gulp-svgmin')

var svgTask = function () {
    
  var paths = {
    src: path.resolve(process.env.PWD, PATH_CONFIG.src, PATH_CONFIG.svgs.src, '**/*.' + TASK_CONFIG.svgs.extensions),
    dest: path.resolve(process.env.PWD, PATH_CONFIG.dest, PATH_CONFIG.svgs.dest)
  }
  console.log(paths.src);  

  return gulp.src([paths.src, , '*!README.md'])
    .pipe(svgmin({
        plugins: [
            {cleanupIDs: false},                  // don't remove  ids
            {removeViewBox: false},               // don't remove the viewbox atribute from the SVG
            {removeUselessStrokeAndFill: false},  // don't remove Useless Strokes and Fills
            {removeEmptyAttrs: false} 
        ]
    }))
    
    .pipe(changed(paths.dest))
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream());
}


gulp.task('svgs', svgTask)
module.exports = svgTask