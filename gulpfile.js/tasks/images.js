if (!TASK_CONFIG.images) return

var browserSync = require('browser-sync')
var changed = require('gulp-changed')
var gulp = require('gulp')
var path = require('path')
var imagemin = require('gulp-imagemin')
var imageResize = require('gulp-image-resize')
var responsive = require('gulp-responsive')
var rename = require('gulp-rename')
var imageSizes = [360, 720, 1440, 2160, 2880]
// var $ = require('gulp-load-plugins')();

var imagesTask = function() {

  var paths = {
    src: path.resolve(process.env.PWD, PATH_CONFIG.src, PATH_CONFIG.images.src, '**/*.{' + TASK_CONFIG.images.extensions + '}'),
    dest: path.resolve(process.env.PWD, PATH_CONFIG.dest, PATH_CONFIG.images.dest)
  }
  var options = [{
      width: 360,
      rename: {
        suffix: '-360',
        extname: '.jpg',
      },
      quality: 90,
      format: 'jpeg',
    }, {
      width: 720,
      rename: {
        suffix: '-720',
        extname: '.jpg'
      },
      quality: 80,
      format: 'jpeg',
    }, {
      width: 1440,
      rename: {
        suffix: '-1440',
        extname: '.jpg',
      },
      quality: 80,
      format: 'jpeg',
    }, {
      width: 2160,
      rename: {
        suffix: '-2160',
        extname: '.jpg',
      },
      quality: 70,
      format: 'jpeg',
    }, {
      width: 2880,
      rename: {
        suffix: '-2880',
        extname: '.jpg',
      },
      quality: 60,
      format: 'jpeg',
    }, {
      width: '100%',
      rename: {
        extname: '.jpg',
      },
      quality: 70,
      format: 'jpeg',
    }];

  
  return gulp.src([paths.src, , '*!README.md'])
    // .pipe(changed(paths.dest)) // Ignore unchanged files
    .pipe(responsive({
      '**/*.jpg': options,
      '**/*.png': options
    }, {
      withMetadata: false,
      withoutEnlargement: false,
      skipOnEnlargement: false,
      // errorOnEnlargement: false,
      // quality: 70,
      // errorOnUnusedConfig: false,
      // errorOnUnusedImage: false,
      // Use progressive (interlace) scan for JPEG and PNG output
      progressive: true,
    }))
    .pipe(changed(paths.dest))
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream())
}




// var imagesTaskOLD = function () {
//   var exclude = '!' + path.resolve(process.env.PWD, PATH_CONFIG.src, PATH_CONFIG.images.src, TASK_CONFIG.images.excludeFolder);

//   var paths = {
//     src: [path.resolve(process.env.PWD, PATH_CONFIG.src, PATH_CONFIG.images.src, '**/*.{' + TASK_CONFIG.images.extensions + '}'), exclude],
//     dest: path.resolve(process.env.PWD, PATH_CONFIG.dest, PATH_CONFIG.images.dest),
//     resizeSrc: path.resolve(process.env.PWD, PATH_CONFIG.src, PATH_CONFIG.images.resizeSrc, '**/resize/*.{' + TASK_CONFIG.images.extensions + '}'),
//     resizeDest: path.resolve(process.env.PWD, PATH_CONFIG.dest, PATH_CONFIG.images.resizeDest),
//   }

//   return gulp.src(paths.src)
//     .pipe(changed(paths.dest)) // Ignore unchanged files
//     .pipe(imagemin())
//     .pipe(gulp.dest(paths.dest))
//     .pipe(browserSync.stream());

// }
// var imagesResizeTask = function () {
//   var exclude = '!' + path.resolve(process.env.PWD, PATH_CONFIG.src, PATH_CONFIG.images.src, TASK_CONFIG.images.excludeFolder);

//   var paths = {
//     src: [path.resolve(process.env.PWD, PATH_CONFIG.src, PATH_CONFIG.images.src, '**/*.{' + TASK_CONFIG.images.extensions + '}'), exclude],
//     dest: path.resolve(process.env.PWD, PATH_CONFIG.dest, PATH_CONFIG.images.dest),
//     resizeSrc: path.resolve(process.env.PWD, PATH_CONFIG.src, PATH_CONFIG.images.resizeSrc, '**/resize/*.{' + TASK_CONFIG.images.extensions + '}'),
//     resizeDest: path.resolve(process.env.PWD, PATH_CONFIG.dest, PATH_CONFIG.images.resizeDest),
//   }
//   var resizeImages = function (image_width) {
//     return gulp.src(paths.resizeSrc)
//       .pipe(imageResize({
//         width: image_width,
//         imageMagick: true,
//         format: 'jpg'
//       }))
//       .pipe(imagemin())
//       .pipe(rename(function (path) {
//         path.basename += ("-" + image_width);
//       }))
//       .pipe(gulp.dest(paths.resizeDest));
//   }

//   for (i = 0; i < imageSizes.length; i += 1) {
//     resizeImages(imageSizes[i]);
//   }

// }

// var imagesResizeNewTask = function () {
//   var exclude = '!' + path.resolve(process.env.PWD, PATH_CONFIG.src, PATH_CONFIG.images.src, TASK_CONFIG.images.excludeFolder);

//   var paths = {
//     src: [path.resolve(process.env.PWD, PATH_CONFIG.src, PATH_CONFIG.images.src, '**/*.{' + TASK_CONFIG.images.extensions + '}'), exclude],
//     dest: path.resolve(process.env.PWD, PATH_CONFIG.dest, PATH_CONFIG.images.dest),
//     resizeSrc: path.resolve(process.env.PWD, PATH_CONFIG.src, PATH_CONFIG.images.resizeSrc, '**/resize/*.{png,jpg}'),
//     resizeDest: path.resolve(process.env.PWD, PATH_CONFIG.dest, PATH_CONFIG.images.resizeDest),
//   }


//   return gulp.src(paths.resizeSrc)
//     .pipe(responsive({
//       '*': [{
//         width: 360,
//         rename: {
//           suffix: '-360',
//           extname: '.jpg',
//         },
//         quality: 90,
//         format: 'jpeg',
//       }, {
//         width: 720,
//         rename: {
//           suffix: '-720',
//           extname: '.jpg'
//         },
//         quality: 80,
//         format: 'jpeg',
//       }, {
//         width: 1440,
//         rename: {
//           suffix: '-1440',
//           extname: '.jpg',
//         },
//         quality: 80,
//         format: 'jpeg',
//       }, {
//         width: 2160,
//         rename: {
//           suffix: '-2160',
//           extname: '.jpg',
//         },
//         quality: 70,
//         format: 'jpeg',
//       }, {
//         width: 2880,
//         rename: {
//           suffix: '-2880',
//           extname: '.jpg',
//         },
//         quality: 60,
//         format: 'jpeg',
//       }],
//     }, {
//       withMetadata: false,
//       withoutEnlargement: false,
//       skipOnEnlargement: false,
//       // errorOnEnlargement: false,
//       // quality: 70,
//       // errorOnUnusedConfig: false,
//       // errorOnUnusedImage: false,
//       // Use progressive (interlace) scan for JPEG and PNG output
//       progressive: true,
//     }))
//     // .pipe(imagemin())
//     // .pipe(rename(function (path) {
//     //     path.basename += ("-" + image_width);
//     // }))
//     .pipe(gulp.dest(paths.resizeDest));

// }

gulp.task('images', imagesTask)

// gulp.task('image-resize', imagesResizeTask)
// gulp.task('image-resize-new', imagesResizeNewTask)
module.exports = imagesTask