'use strict';

global.$ = {
  package:          require('./package.json'),
  config:           require('./gulp/config'),
  path: {
    task:           require('./gulp/paths/tasks.js'),
    jsFoundation:   require('./gulp/paths/js.foundation.js'),
    cssFoundation:  require('./gulp/paths/css.foundation.js'),
    app:            require('./gulp/paths/app.js'),
    jsDesktop:      require('./gulp/paths/js.desktop.js')
  },
  gulp:             require('gulp'),
  browserify:       require('browserify'),
  vinyl:            require('vinyl-source-stream'),
  buffer:           require('vinyl-buffer'),
  merge:            require('merge-stream'),
  bourbon:          require('node-bourbon'),
  fileinclude:      require('gulp-file-include'),
  rimraf:           require('rimraf'),
  browserSync:      require('browser-sync').create(),
  gp:               require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  'sprites_svg',
  $.gulp.parallel(
    'sass',
    'pug',
    'js:foundation',
    'js:process',
    'js:desktop',
    'copy:image',
    'copy:fonts',
    'css:foundation'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));
