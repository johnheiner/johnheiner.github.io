var gulp            = require('gulp')
var gulpSequence    = require('gulp-sequence')
var getEnabledTasks = require('../lib/getEnabledTasks')
var os              = require('os')
var fs              = require('fs')
var path            = require('path')

var productionTask = function(cb) {
  global.production = true

  // Build to a temporary directory, then move compiled files as a last step
  PATH_CONFIG.finalDest = PATH_CONFIG.dest
  PATH_CONFIG.dest = PATH_CONFIG.temp
      ? path.join(process.env.PWD, PATH_CONFIG.temp)
      : path.join(os.tmpdir(), 'gulp-starter');
  if( !fs.existsSync(PATH_CONFIG.dest) ) {
      fs.mkdirSync(PATH_CONFIG.dest);
  }

  var tasks = getEnabledTasks('production')
  var rev = TASK_CONFIG.production.rev ? 'rev': false
  var static = TASK_CONFIG.static ? 'static' : false

  gulpSequence('clean', tasks.assetTasks, tasks.codeTasks, rev, 'size-report', static, 'replaceFiles', cb)
}

gulp.task('build', productionTask)
module.exports = productionTask
