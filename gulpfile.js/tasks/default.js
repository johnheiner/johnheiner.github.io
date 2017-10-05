var gulp            = require('gulp')
var gulpSequence    = require('gulp-sequence')
var getEnabledTasks = require('../lib/getEnabledTasks')

var defaultTask = function(cb) {
  var tasks = getEnabledTasks('watch')
  var static = TASK_CONFIG.static ? 'static' : false
  gulpSequence(tasks.assetTasks, tasks.codeTasks, static, 'watch', cb)
}

gulp.task('default', defaultTask)
module.exports = defaultTask
